import Image from 'next/image'

const clients = [
  { name: 'Client 1', logo: '/placeholder-logo.svg' },
  { name: 'Client 2', logo: '/placeholder-logo.svg' },
  { name: 'Client 3', logo: '/placeholder-logo.svg' },
  { name: 'Client 4', logo: '/placeholder-logo.svg' },
  { name: 'Client 5', logo: '/placeholder-logo.svg' },
  { name: 'Client 6', logo: '/placeholder-logo.svg' },
]

export default function ClientSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

