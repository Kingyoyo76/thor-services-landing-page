'use client'

import { motion } from 'framer-motion'
import { FileSearch, LightbulbIcon, Shield, Cog } from 'lucide-react'

const phases = [
  {
    icon: FileSearch,
    title: "Pre-Sales",
    description: "Strategic workshops and gap analysis",
    tools: ["IAM Workshops", "Domain Assessment", "Roadmap Planning"]
  },
  {
    icon: LightbulbIcon,
    title: "Advisory",
    description: "Framework and governance planning",
    tools: ["IGA Strategy", "Access Management", "Privileged Identity"]
  },
  {
    icon: Cog,
    title: "Delivery",
    description: "Implementation of core IAM pillars",
    tools: ["Identity Governance", "Access Management", "Strong Auth", "PAM"]
  },
  {
    icon: Shield,
    title: "Managed Services",
    description: "Continuous IAM optimization",
    tools: ["IGA-as-a-Service", "AM-as-a-Service", "PAM-as-a-Service"]
  }
]

export default function IAMHowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">How We Deliver IAM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-orange-500/20 p-4 rounded-full mb-4 group-hover:bg-orange-500/30 transition-colors">
                <phase.icon className="w-8 h-8 text-[#FF5722]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
              <p className="text-gray-300 mb-4">{phase.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {phase.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

