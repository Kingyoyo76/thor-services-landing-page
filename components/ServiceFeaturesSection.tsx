'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart, Shield, Cloud, DollarSign } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: BarChart,
    title: "Strategic IT Alignment",
    description: "Drive business results by aligning infrastructure with your goals."
  },
  {
    icon: Shield,
    title: "IAM Optimization",
    description: "Simplify access management, reduce friction, and boost security."
  },
  {
    icon: Cloud,
    title: "Cloud Compliance Made Simple",
    description: "Streamline audits with real-time reporting and automation."
  },
  {
    icon: DollarSign,
    title: "Big Four Expertise at a Fraction of the Cost",
    description: "Get premium solutions without the premium price tag."
  }
]

export default function ServiceFeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What You Get with Thor Group
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="grid gap-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <feature.icon className="w-8 h-8 text-[#2196F3]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder-dashboard.jpg"
              alt="Thor Group Dashboard"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

