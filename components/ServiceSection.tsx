import { Button } from '@/components/ui/button'
import { Users, Clock, Puzzle, Building2, Shield, FileCheck, CheckCircle, BarChart, Lock, Cloud, Server, Network } from 'lucide-react'

const services = [
  {
    id: "staffing",
    icon: Users,
    title: "IT Staff Augmentation",
    subtitle: "Scale Your IT Capabilities On Demand",
    businessChallenge: "Finding and onboarding the right IT talent can take months and cost thousands in lost opportunities.",
    coreCapabilities: [
      {
        icon: Users,
        title: "Instant Expertise Access",
        description: "Pre-vetted specialists ready to join your team within days, not months."
      },
      {
        icon: Clock,
        title: "Flexible Team Scaling",
        description: "Expand or reduce your team size as project demands change, without long-term commitments."
      },
      {
        icon: Puzzle,
        title: "Zero Onboarding Friction",
        description: "Experienced professionals who understand your tech stack and can contribute from day one."
      }
    ],
    businessOutcomes: [
      {
        value: "50% ↓",
        label: "Faster Time-to-Value",
        detail: "Start delivering results in days instead of months"
      },
      {
        value: "40% ↑",
        label: "Project Acceleration",
        detail: "Complete critical initiatives ahead of schedule"
      },
      {
        value: "30%",
        label: "Cost Optimization",
        detail: "Reduce hiring and training overhead"
      }
    ]
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Architecture (EA)",
    subtitle: "Transform Complexity into Business Value",
    businessChallenge: "Legacy systems and technical debt are slowing your digital transformation and driving up costs.",
    coreCapabilities: [
      {
        icon: Server,
        title: "Infrastructure Modernization",
        description: "Replace outdated systems with scalable, cost-effective solutions that drive growth."
      },
      {
        icon: Network,
        title: "Seamless Integration",
        description: "Connect disparate systems into a unified, efficient technology ecosystem."
      },
      {
        icon: Cloud,
        title: "Cloud-First Architecture",
        description: "Leverage cloud capabilities to reduce costs and increase business agility."
      }
    ],
    businessOutcomes: [
      {
        value: "30%",
        label: "Cost Reduction",
        detail: "Lower infrastructure and maintenance costs"
      },
      {
        value: "40%",
        label: "Faster Delivery",
        detail: "Accelerate new feature and product launches"
      },
      {
        value: "60%",
        label: "Increased Efficiency",
        detail: "Automate manual processes and reduce redundancies"
      }
    ]
  },
  {
    id: "identity",
    icon: Shield,
    title: "Identity & Access Management (IAM)",
    subtitle: "Secure Access Without Business Friction",
    businessChallenge: "Complex access management creates security risks and slows down your business operations.",
    coreCapabilities: [
      {
        icon: Lock,
        title: "Automated Access Control",
        description: "Right-sized access provisioning that keeps your business moving securely."
      },
      {
        icon: Shield,
        title: "Zero-Trust Security",
        description: "Protect sensitive data while maintaining seamless user experience."
      },
      {
        icon: BarChart,
        title: "Intelligent Risk Prevention",
        description: "Stop threats before they impact your business operations."
      }
    ],
    businessOutcomes: [
      {
        value: "70%",
        label: "Risk Reduction",
        detail: "Fewer security incidents and data breaches"
      },
      {
        value: "90%",
        label: "Faster Access",
        detail: "Streamlined user provisioning and deprovisioning"
      },
      {
        value: "100%",
        label: "Compliance",
        detail: "Automatic regulatory requirement adherence"
      }
    ]
  },
  {
    id: "cyber",
    icon: FileCheck,
    title: "Cyber Risk & Compliance (CRC)",
    subtitle: "Turn Compliance into Competitive Advantage",
    businessChallenge: "Manual compliance processes drain resources and leave you vulnerable to risks and penalties.",
    coreCapabilities: [
      {
        icon: FileCheck,
        title: "Automated Compliance",
        description: "Transform manual checkboxes into automated, continuous compliance."
      },
      {
        icon: Shield,
        title: "Proactive Risk Management",
        description: "Identify and mitigate risks before they impact your business."
      },
      {
        icon: BarChart,
        title: "Real-Time Risk Intelligence",
        description: "Make informed decisions with continuous security monitoring."
      }
    ],
    businessOutcomes: [
      {
        value: "50%",
        label: "Cost Savings",
        detail: "Reduced audit and compliance overhead"
      },
      {
        value: "99.9%",
        label: "Risk Coverage",
        detail: "Comprehensive threat detection and response"
      },
      {
        value: "24/7",
        label: "Compliance Status",
        detail: "Always audit-ready operations"
      }
    ]
  }
]

export default function ServiceSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col items-center md:flex-row md:items-start gap-4 mb-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <service.icon className="w-8 h-8 text-[#FF5722]" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2 text-center">{service.title}</h2>
                    <p className="text-xl text-gray-600 text-center">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-12 text-center mx-auto max-w-3xl text-justify">{service.businessChallenge}</p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {service.coreCapabilities.map((capability, index) => (
                    <div key={index} className="space-y-4 flex flex-col items-center">
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <capability.icon className="w-6 h-6 text-[#FF5722]" />
                      </div>
                      <h3 className="font-semibold text-lg text-center">{capability.title}</h3>
                      <p className="text-gray-600 text-center text-justify">{capability.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Business Impact</h3>
                <div className="grid grid-cols-3 gap-8">
                  {service.businessOutcomes.map((outcome, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-[#FF5722] mb-2">{outcome.value}</div>
                      <div className="font-semibold mb-2">{outcome.label}</div>
                      <div className="text-sm text-gray-600 text-justify">{outcome.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 text-center">
                <Button 
                  size="lg" 
                  className="bg-[#FF5722] hover:bg-[#E64A19] text-white"
                >
                  Learn How We Can Help Your Business
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

