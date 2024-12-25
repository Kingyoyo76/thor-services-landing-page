'use client'

import { AlertTriangle, FileWarning, Key } from 'lucide-react'
import { motion } from 'framer-motion'

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Misaligned IT Strategies are Costing You",
    description: "Outdated systems waste resources and expose your organization to unnecessary risks."
  },
  {
    icon: FileWarning,
    title: "Compliance Gaps Lead to Costly Penalties",
    description: "Avoid audit failures with real-time gap detection tailored to your industry."
  },
  {
    icon: Key,
    title: "Access Management is Too Complex",
    description: "Simplify identity frameworks while safeguarding critical data assets."
  }
]

export default function PainPointsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why IT Leaders Choose Thor Group
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <point.icon className="w-12 h-12 text-[#FF5722] mb-4" />
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

