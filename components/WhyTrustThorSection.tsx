'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, DollarSign } from 'lucide-react'

const trustReasons = [
  {
    icon: Clock,
    title: "Get Audit-Ready Faster and Easier",
    description: "Thor Group's real-time gap detection eliminates compliance guesswork."
  },
  {
    icon: Shield,
    title: "Streamline Identity Management",
    description: "Simplify user access across platforms without compromising security."
  },
  {
    icon: DollarSign,
    title: "Reduce Risks While Cutting Costs",
    description: "Tailored IT strategies at half the cost of big consulting firms."
  }
]

export default function WhyTrustThorSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why IT Leaders Trust Thor Group
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {trustReasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <reason.icon className="w-12 h-12 text-[#FF5722] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#FF5722] transition-colors">{reason.title}</h3>
              <p className="text-gray-600 group-hover:text-black transition-colors">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

