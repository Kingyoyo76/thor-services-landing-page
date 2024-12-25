import { Building2, Shield, FileCheck } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: "Enterprise Architecture (EA)",
    description: "Optimize Your IT Arsenal",
    benefits: [
      "Align tech with business goals - no more wasted resources",
      "Slash complexity and technical debt",
      "Accelerate digital transformation, leave competitors in the dust"
    ]
  },
  {
    icon: Shield,
    title: "Identity & Access Management (IAM)",
    description: "Fortify Your Digital Fortress",
    benefits: [
      "Implement zero-trust security - trust no one, secure everything",
      "Streamline user lifecycle - right access, right time, every time",
      "Boost compliance - pass audits with flying colors"
    ]
  },
  {
    icon: FileCheck,
    title: "Cyber Risk & Compliance (CRC)",
    description: "Turn Regulations into Your Secret Weapon",
    benefits: [
      "Automate compliance - say goodbye to manual headaches",
      "Continuous risk assessment - stay ahead of threats 24/7",
      "Achieve audit-ready status - anytime, all the time"
    ]
  }
]

export default function ValuePropositionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          Battle-Tested Solutions for Modern IT Warfare
        </h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          We don't just patch holes - we build impenetrable defenses. Our arsenal of solutions is designed to secure, optimize, and propel your business forward. No fluff, just firepower.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <service.icon className="w-12 h-12 text-[#FF5722] mb-4" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-xl font-semibold mb-4 text-[#FF5722]">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {benefit}
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

