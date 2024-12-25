'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Puzzle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  {
    icon: Users,
    title: "Instant Expertise Access",
    description: "Tap into a pool of pre-vetted IT specialists ready to join your team within days, not months."
  },
  {
    icon: Clock,
    title: "Flexible Team Scaling",
    description: "Easily expand or reduce your team size as project demands change, without long-term commitments."
  },
  {
    icon: Puzzle,
    title: "Seamless Integration",
    description: "Our professionals understand your tech stack and can contribute effectively from day one."
  }
]

const outcomes = [
  { value: "50%", label: "Faster Time-to-Value" },
  { value: "40%", label: "Project Acceleration" },
  { value: "30%", label: "Cost Optimization" }
]

export default function StaffAugmentationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            IT Staff Augmentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scale your IT capabilities on demand with our expert professionals, 
            bridging skill gaps and accelerating project delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-[#FF3D00] mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 text-white p-8 rounded-lg shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Proven Results</h3>
          <div className="grid grid-cols-3 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#FF3D00] mb-2">{outcome.value}</div>
                <div className="text-sm">{outcome.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Amplify Your IT Capabilities?</h3>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-[#FF3D00] hover:bg-[#FF3D00]/90 text-white rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12 font-bold transform hover:scale-105 transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                const offset = 80 // Account for fixed header
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                })
              }
            }}
          >
            Get Started with Staff Augmentation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
