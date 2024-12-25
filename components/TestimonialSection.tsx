'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "We hired Thor Group based on a colleague's recommendation because we needed our IAM implementation completed and live by a tight deadline. They delivered beyond our expectations, finishing ahead of schedule and under budget.",
    name: "Sarah Johnson",
    title: "CIO",
    company: "Global Financial Services Inc."
  },
  {
    quote: "Without a doubt, Thor Group has Big Four expertise with boutique delivery. Their personalized approach and deep industry knowledge helped us navigate complex compliance issues with ease.",
    name: "Michael Chen",
    title: "Head of IT Security",
    company: "TechInnovate Solutions"
  },
  {
    quote: "We brought in Thor Group for a cloud maturity assessment, and their findings blew our socks off. They uncovered multiple privileged accounts we didn't know existed and much more. Highly recommend!",
    name: "Emily Rodriguez",
    title: "Cloud Infrastructure Manager",
    company: "E-commerce Giants Ltd."
  },
  {
    quote: "Thor Group's enterprise architecture team helped us align our IT strategy with our business goals. The ROI we've seen in just six months is remarkable. They're not just consultants; they're true partners in our success.",
    name: "David Nkosi",
    title: "COO",
    company: "African Telecom Leaders"
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(() => {
    // This will only run on the client side
    return typeof window !== 'undefined' 
      ? Math.floor(Math.random() * testimonials.length) 
      : 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 10000) // Change testimonial every 10 seconds

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 sm:py-24 bg-[#0B1221] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 tracking-tight">
          Trusted by <span className="text-[#FF5722]">Industry Leaders</span>
        </h2>
        <div className="relative bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-lg sm:text-2xl italic mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400">{testimonials[currentIndex].title}</p>
                <p className="text-gray-400">{testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevTestimonial} 
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

