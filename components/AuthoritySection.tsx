import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const authorityItems = [
  {
    title: "Trusted by Industry Leaders",
    description: "Over 100 companies rely on Thor to optimize their IT infrastructure.",
    image: "/placeholder.svg"
  },
  {
    title: "Certified Excellence",
    description: "ISO 27001 certified, ensuring the highest standards of information security management.",
    image: "/placeholder.svg"
  },
  {
    title: "Award-Winning Solutions",
    description: "Recognized by Gartner as a Cool Vendor in IT Operations Management.",
    image: "/placeholder.svg"
  }
]

export default function AuthoritySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Thor?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authorityItems.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

