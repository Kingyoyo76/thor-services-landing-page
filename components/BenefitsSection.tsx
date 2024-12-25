import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Rocket, Shield, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: "Accelerate Growth",
    description: "Align your IT infrastructure with business goals, enabling rapid innovation and market responsiveness."
  },
  {
    icon: Shield,
    title: "Fortify Security",
    description: "Protect your digital assets with state-of-the-art identity management and cyber risk solutions."
  },
  {
    icon: TrendingUp,
    title: "Ensure Compliance",
    description: "Stay ahead of regulations with automated compliance processes, reducing risk and saving time."
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Unlock Your Enterprise Potential</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <benefit.icon className="w-8 h-8 mr-3 text-purple-600" />
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

