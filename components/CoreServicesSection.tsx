import { Shield, Building2, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Shield,
    title: "Identity Access Management (IAM)",
    description: "Simplify user access while safeguarding data. Our IAM solutions ensure the right people have the right access at the right time.",
    benefits: [
      "Reduce security incidents by 70%",
      "Streamline user lifecycle management",
      "Enhance regulatory compliance"
    ]
  },
  {
    icon: Building2,
    title: "Enterprise Architecture",
    description: "Align your IT infrastructure with business goals. We help optimize your systems for efficiency and innovation.",
    benefits: [
      "Reduce IT operational costs by 30%",
      "Accelerate digital transformation",
      "Improve system integration"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Risk & Compliance",
    description: "Achieve audit readiness and avoid costly penalties. Our solutions ensure your cloud infrastructure is secure and compliant.",
    benefits: [
      "Automate 80% of compliance processes",
      "Real-time risk monitoring",
      "Reduce audit preparation time by 50%"
    ]
  }
]

export default function CoreServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-[#2196F3] mb-4" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="mb-6">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 mb-2">
                    <span className="mr-2 text-[#4CAF50]">✓</span> {benefit}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#2196F3] hover:bg-[#1E88E5]">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

