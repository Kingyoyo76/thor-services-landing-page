'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const techPartners = [
  { name: 'Splunk', website: 'https://www.splunk.com' },
  { name: 'Saviynt', website: 'https://www.saviynt.com' },
  { name: 'SailPoint', website: 'https://www.sailpoint.com' },
  { name: 'CyberArk', website: 'https://www.cyberark.com' },
  { name: 'BeyondTrust', website: 'https://www.beyondtrust.com' },
  { name: 'Delinea', website: 'https://www.delinea.com' },
  { name: 'Imperva', website: 'https://www.imperva.com' },
  { name: 'Zscaler', website: 'https://www.zscaler.com' },
  { name: 'Checkred', website: 'https://www.checkred.com' },
  { name: 'Palo Alto Networks', website: 'https://www.paloaltonetworks.com' },
  { name: 'Cato Networks', website: 'https://www.catonetworks.com' }
]

// Split partners into groups of 6
const partnerGroups = techPartners.reduce((acc, _, i) => {
  if (i % 6 === 0) {
    acc.push(techPartners.slice(i, i + 6))
  }
  return acc
}, [] as typeof techPartners[])

export default function TechnologyPartnersSection() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % partnerGroups.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-[#0B1221] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 tracking-tight"
        >
          Technologies <span className="text-[#FF3D00]">We Support</span>
        </motion.h2>
        
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroupIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 absolute inset-0"
            >
              {partnerGroups[currentGroupIndex]?.map((partner, index) => (
                <motion.a
                  key={partner.name}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-center p-6 bg-white/5 rounded-xl backdrop-blur-sm
                           hover:bg-white/10 transition-all duration-300 border border-white/10
                           hover:border-[#FF3D00]/50 group"
                >
                  <span className="text-2xl font-semibold text-white/80 group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {partnerGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentGroupIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentGroupIndex 
                  ? 'bg-[#FF3D00] w-4' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
