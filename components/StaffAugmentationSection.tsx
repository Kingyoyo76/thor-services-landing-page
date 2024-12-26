'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, Puzzle, Zap } from 'lucide-react'
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

const techPartners = [
  { name: 'Splunk', website: 'https://www.splunk.com' },
  { name: 'Okta', website: 'https://www.okta.com' },
  { name: 'Ping', website: 'https://www.pingidentity.com' },
  { name: 'ForgeRock', website: 'https://www.forgerock.com' },
  { name: 'Crowdstrike', website: 'https://www.crowdstrike.com' },
  { name: 'SentinelOne', website: 'https://www.sentinelone.com' },
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

// Duplicate the array to create a seamless loop
const extendedPartners = [...techPartners, ...techPartners]

// Split partners into groups of 6
const partnerGroups = techPartners.reduce((acc, _, i) => {
  if (i % 6 === 0) {
    acc.push(techPartners.slice(i, i + 6))
  }
  return acc
}, [] as typeof techPartners[])

export default function StaffAugmentationSection() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % partnerGroups.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(timer)
  }, [])

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

        {/* Technologies We Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
          id="technologies"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
            Technologies <span className="text-[#FF3D00]">We Support</span>
          </h2>
          
          <div className="relative overflow-hidden py-8">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10" />
            
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{
                  x: [0, -50 * techPartners.length],
                }}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {extendedPartners.map((partner, index) => (
                  <a
                    key={index}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center group"
                  >
                    <span className="text-2xl font-semibold text-gray-600 group-hover:text-[#FF3D00] transition-colors whitespace-nowrap">
                      {partner.name}
                    </span>
                  </a>
                ))}
              </motion.div>
              
              <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{
                  x: [0, -50 * techPartners.length],
                }}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {extendedPartners.map((partner, index) => (
                  <a
                    key={index}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center group"
                  >
                    <span className="text-2xl font-semibold text-gray-600 group-hover:text-[#FF3D00] transition-colors whitespace-nowrap">
                      {partner.name}
                    </span>
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center flex justify-center"
        >
          <Button 
            size="lg" 
            className="bg-[#FF3D00] hover:bg-[#FF3D00]/90 text-white rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12 font-bold transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            onClick={() => {
              const finalCTA = document.getElementById('final-cta')
              if (finalCTA) {
                const offset = 80
                const elementPosition = finalCTA.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                })
              }
            }}
          >
            Ready To Amplify Your IT Capabilities? <Zap className="w-6 h-6 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
