import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    problem: "Lack of unified identity management led to inefficiencies.",
    solution: "Thor Group implemented IAM, saving 500+ hours annually.",
    outcome: "Reduced audit prep time by 50%."
  },
  {
    problem: "Complex cloud infrastructure exposed security vulnerabilities.",
    solution: "Implemented comprehensive cloud risk management strategy.",
    outcome: "Achieved 99.9% compliance across all cloud assets."
  },
  {
    problem: "Disjointed IT systems hindered digital transformation efforts.",
    solution: "Developed and executed strategic enterprise architecture plan.",
    outcome: "Accelerated project delivery by 40% and reduced IT costs by 30%."
  }
]

export default function CaseStudySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextCase = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#0B1221] to-[#162236] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Problem:</h3>
            <p>{caseStudies[currentIndex].problem}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Solution:</h3>
            <p>{caseStudies[currentIndex].solution}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Outcome:</h3>
            <p className="text-[#4CAF50] font-bold">{caseStudies[currentIndex].outcome}</p>
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button onClick={prevCase} className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button onClick={nextCase} className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

