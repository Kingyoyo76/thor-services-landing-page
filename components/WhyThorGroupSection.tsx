'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const reasons = [
  "Proven Expertise: Trusted by global organizations to solve complex IT challenges.",
  "Tailored Solutions: We adapt to your needs, ensuring measurable outcomes.",
  "Value-Driven: Receive high-caliber services without exorbitant costs."
]

export default function WhyThorGroupSection() {
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
          Why Thor Group Stands Out
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder-team.jpg"
              alt="Thor Group Team"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#4CAF50] mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

