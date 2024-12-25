import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react'

const outcomes = [
  {
    icon: TrendingUp,
    title: "Drive Business Growth",
    description: "Align your IT infrastructure with business goals, enabling faster innovation and market responsiveness."
  },
  {
    icon: ShieldCheck,
    title: "Enhance Security Posture",
    description: "Protect your digital assets and sensitive data with robust IAM and cyber risk management solutions."
  },
  {
    icon: Zap,
    title: "Accelerate Digital Transformation",
    description: "Streamline operations, improve efficiency, and stay ahead of the competition in the digital landscape."
  }
]

export default function OutcomeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Transformative Outcomes with Thor Group</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="bg-white text-blue-600 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold">
                  <outcome.icon className="w-8 h-8 mr-3" />
                  {outcome.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

