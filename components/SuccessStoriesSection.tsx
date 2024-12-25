'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const successStories = [
  {
    title: "Fortune 500 Retailer",
    metric: "Reduced security incidents by 70%",
    description: "Implemented advanced IAM solutions, significantly reducing vulnerabilities."
  },
  {
    title: "Healthcare Provider",
    metric: "Saved $1.5M annually",
    description: "Streamlined compliance operations, cutting costs and improving efficiency."
  },
  {
    title: "Global Financial Institution",
    metric: "Achieved 99.9% uptime",
    description: "Optimized cloud infrastructure, ensuring reliable service delivery."
  }
]

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#0B1221] to-[#162236] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Client Success: Real Results from Thor Group
        </motion.h2>
        <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{successStories[currentIndex].title}</h3>
              <p className="text-3xl font-bold text-[#4CAF50] mb-4">{successStories[currentIndex].metric}</p>
              <p className="text-xl">{successStories[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevStory} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextStory} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

