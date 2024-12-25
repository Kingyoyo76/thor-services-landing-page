'use client'

import { Building2, Shield, FileCheck, Check } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: "Enterprise Architecture",
    subtitle: "(EA)",
    tagline: "Optimize Your IT Landscape",
    benefits: [
      "Align IT initiatives with business objectives",
      "Reduce complexity and technical debt",
      "Accelerate digital transformation"
    ]
  },
  {
    icon: Shield,
    title: "Identity & Access",
    subtitle: "Management (IAM)",
    tagline: "Secure Your Digital Identity",
    benefits: [
      "Implement zero-trust security model",
      "Streamline user lifecycle management",
      "Enhance regulatory compliance"
    ]
  },
  {
    icon: FileCheck,
    title: "Cyber Risk &",
    subtitle: "Compliance (CRC)",
    tagline: "Proactive Risk Management",
    benefits: [
      "Automate compliance processes",
      "Continuous risk assessment and mitigation",
      "Achieve and maintain audit readiness"
    ]
  }
]

export default function ComprehensiveSolutionsSection() {
  return (
    <section className="py-12 sm:py-24 bg-white px-4 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 tracking-tight">
          Comprehensive Enterprise Cybersecurity Solutions
        </h2>
        <p className="text-xl sm:text-2xl text-center mb-8 sm:mb-16 max-w-4xl mx-auto text-gray-600 px-4 leading-relaxed">
          Thor Group delivers tailored, integrated solutions to address your most 
          complex IT challenges. Our expertise spans across critical domains to 
          secure, optimize, and empower your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-[#FF5722]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">
                {service.title}
              </h3>
              <p className="text-lg sm:text-xl font-bold mb-4 text-gray-600">
                {service.subtitle}
              </p>
              <p className="text-lg sm:text-xl font-semibold mb-6 text-[#FF5722]">
                {service.tagline}
              </p>
              <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
