import { useState, useEffect } from 'react'

const stats = [
  { label: 'Clients Protected', value: 500, suffix: '+' },
  { label: 'Threats Mitigated', value: 1, suffix: 'M+' },
  { label: 'Compliance Success Rate', value: 99, suffix: '%' },
  { label: 'Years of Experience', value: 15, suffix: '+' },
]

export default function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters =>
        prevCounters.map((counter, index) => {
          const target = stats[index].value
          const increment = Math.ceil(target / 50)
          return Math.min(counter + increment, target)
        })
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

