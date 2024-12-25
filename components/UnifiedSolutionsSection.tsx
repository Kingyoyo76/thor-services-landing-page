'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Shield, FileCheck, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ServiceType = 'ea' | 'iam' | 'crc'

const services = {
  ea: {
    icon: Building2,
    title: "Enterprise Architecture",
    description: "Crush IT complexity. Unleash business value.",
    capabilities: [
      {
        title: "Cloud & Security Architecture",
        items: ["AWS/Azure/GCP Integration", "NGFW/IPS Implementation", "DevOps Automation"]
      },
      {
        title: "Infrastructure Modernization",
        items: ["Legacy System Migration", "SASE & Zero Trust", "API Security"]
      },
      {
        title: "Security Analytics",
        items: ["SIEM Implementation", "Threat Detection", "Incident Response"]
      }
    ]
  },
  iam: {
    icon: Shield,
    title: "Identity & Access Management",
    description: "Lock it down. Speed it up. No compromises.",
    capabilities: [
      {
        title: "Identity Governance",
        items: ["SailPoint", "Saviynt", "Identity Now"]
      },
      {
        title: "Access Management",
        items: ["Okta", "Ping Federate", "Microsoft ADFS"]
      },
      {
        title: "Privileged Access",
        items: ["CyberArk", "Beyond Trust", "Delinea"]
      }
    ]
  },
  crc: {
    icon: FileCheck,
    title: "Cyber Risk & Compliance",
    description: "Turn red tape into your secret weapon.",
    capabilities: [
      {
        title: "Risk Management",
        items: ["Enterprise Risk", "BC/DR Planning", "Third Party Risk"]
      },
      {
        title: "Compliance Automation",
        items: ["NIST", "ISO", "Industry Standards"]
      },
      {
        title: "Security Program",
        items: ["Policy Development", "Controls Implementation", "Program Assessment"]
      }
    ]
  }
}

export default function UnifiedSolutionsSection() {
  const [activeService, setActiveService] = useState<ServiceType>('ea')

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          No Bullshit Cybersecurity. Just Results.
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600">
          We don't do excuses. We deliver iron-clad security, optimize your IT, and drive your business forward. Fast, efficient, no nonsense.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {(Object.entries(services) as [ServiceType, typeof services.ea][]).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveService(key)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full transition-all",
                activeService === key 
                  ? "bg-[#FF5722] text-white shadow-lg scale-105" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              )}
            >
              <service.icon className="w-5 h-5" />
              <span className="font-semibold">{`Conquer ${service.title}`}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services[activeService].capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
              <ul className="space-y-3">
                {capability.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-[#FF5722]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

