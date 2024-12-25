import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, Lock, FileWarning } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: "Hidden Inefficiencies",
    description: "Outdated or misaligned IT assets can bleed resources."
  },
  {
    icon: Lock,
    title: "Fragmented Identity Security",
    description: "Gaps in IAM expose organizations to risk."
  },
  {
    icon: FileWarning,
    title: "Compliance Headaches",
    description: "Manual processes lead to costly oversights."
  }
]

export default function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What's Holding Your IT Back?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <problem.icon className="w-6 h-6 mr-2 text-blue-600" />
                  {problem.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

