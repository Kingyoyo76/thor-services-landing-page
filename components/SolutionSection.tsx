import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const solutions = [
  {
    title: "Asset Maturity Assessment (AMA)",
    description: "Optimize IT spend and align assets with business goals.",
    image: "/placeholder.svg"
  },
  {
    title: "Identity Security Posture Management (ISPM)",
    description: "Prevent breaches by fortifying your identity and access controls.",
    image: "/placeholder.svg"
  },
  {
    title: "Compliance Automation",
    description: "Simplify audits and maintain continuous compliance effortlessly.",
    image: "/placeholder.svg"
  }
]

export default function SolutionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How Thor Delivers Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2">{solution.title}</CardTitle>
                <p className="text-gray-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

