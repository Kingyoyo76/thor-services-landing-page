'use client'

import { AlertTriangle, FileWarning, Key } from 'lucide-react'
import { motion } from 'framer-motion'
import { Rocket, Shield, CheckCircle } from 'lucide-react'

const results = [
  {
    icon: Rocket,
    title: "30% Cost Reduction in 90 Days",
    description: "Our clients typically see a 30% reduction in IT operational costs within the first quarter of implementation."
  },
  {
    icon: Shield,
    title: "70% Fewer Security Incidents",
    description: "Our IAM solutions have helped clients reduce security incidents by up to 70%, protecting critical assets and data."
  },
  {
    icon: CheckCircle,
    title: "100% Audit Readiness",
    description: "Achieve and maintain 100% compliance with our real-time monitoring and automated reporting systems."
  }
]

export default function ResultsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why IT Leaders Choose Thor Group for Rapid Results
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((point, index) => (
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

