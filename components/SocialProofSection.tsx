'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Successful Projects', value: '500+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Security Experts', value: '50+' }
];

const testimonials = [
  {
    quote: "Thor Services transformed our security infrastructure. Their expertise in identity management and compliance has been invaluable.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp Solutions"
  },
  {
    quote: "The team's dedication to excellence and deep understanding of enterprise architecture helped us modernize our systems efficiently.",
    author: "Michael Chen",
    role: "IT Director, Global Innovations"
  },
  {
    quote: "Their comprehensive approach to security and compliance gave us the confidence to scale our operations globally.",
    author: "Emily Rodriguez",
    role: "CISO, SecureFlow Systems"
  }
];

const clientLogos = [
  '/logos/client1.svg',
  '/logos/client2.svg',
  '/logos/client3.svg',
  '/logos/client4.svg',
  '/logos/client5.svg',
];

export default function SocialProofSection() {
  return (
    <section className="bg-[#162236] py-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="cyber-grid" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF3D00] mb-2">
                {stat.value}
              </div>
              <div className="text-white text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#0B1221] p-6 rounded-xl relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FF3D00] opacity-50" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FF3D00]" fill="#FF3D00" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Trusted By Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {clientLogos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="Client Logo"
                className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
