'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const gains = [
  {
    title: "Custom IT Strategies",
    description: "Tailored solutions that align IT infrastructure with business goals.",
    image: "/custom-it-strategy.jpg"
  },
  {
    title: "Audit Confidence",
    description: "Automated compliance checks ensure you're always audit-ready.",
    image: "/audit-confidence.jpg"
  },
  {
    title: "Stronger Security Posture",
    description: "Reduced vulnerabilities with cutting-edge IAM solutions.",
    image: "/security-posture.jpg"
  },
  {
    title: "Improved Efficiency",
    description: "Streamlined processes to save time and eliminate bottlenecks.",
    image: "/improved-efficiency.jpg"
  },
  {
    title: "Expert Partnership",
    description: "Big-firm expertise without the big-firm costs.",
    image: "/expert-partnership.jpg"
  }
]

export default function GainsSection() {
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
          What You Gain with Thor Group
        </motion.h2>
        {gains.map((gain, index) => (
          <motion.div 
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">{gain.title}</h3>
              <p className="text-gray-600 text-lg">{gain.description}</p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={gain.image}
                alt={gain.title}
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

