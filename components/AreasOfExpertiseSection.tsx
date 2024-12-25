'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, LightbulbIcon, Settings, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = 'iam' | 'grc' | 'ea'

interface Phase {
  icon: any;
  title: string;
  description: string;
  tags: {
    iam: string[];
    grc: string[];
    ea: string[];
  };
}

const categories: { id: Category; name: string; color: string }[] = [
  {
    id: 'iam',
    name: 'Identity & Access Management',
    color: '#FF5722'
  },
  {
    id: 'grc',
    name: 'Governance, Risk & Compliance',
    color: '#4A5568'
  },
  {
    id: 'ea',
    name: 'Enterprise Architecture',
    color: '#4A5568'
  }
]

const deliveryProcess: Phase[] = [
  {
    icon: FileText,
    title: "Pre-Sales",
    description: "Strategic assessment and planning",
    tags: {
      iam: ['IAM Workshops', 'Domain Assessment', 'Roadmap Planning'],
      grc: ['GRC Workshops', 'Risk Assessment', 'Compliance Planning'],
      ea: ['EA Workshops', 'Architecture Assessment', 'Technology Planning']
    }
  },
  {
    icon: LightbulbIcon,
    title: "Advisory",
    description: "Strategy and framework development",
    tags: {
      iam: ['IGA Strategy', 'Access Management', 'Privileged Identity'],
      grc: ['Security Policies', 'Risk Framework', 'Compliance Strategy'],
      ea: ['Cloud Strategy', 'Integration Framework', 'Technology Roadmap']
    }
  },
  {
    icon: Settings,
    title: "Delivery",
    description: "Implementation and integration",
    tags: {
      iam: ['Identity Governance', 'Access Management', 'Strong Auth', 'PAM'],
      grc: ['Policy Implementation', 'Control Framework', 'Compliance Automation'],
      ea: ['Cloud Migration', 'System Integration', 'Architecture Implementation']
    }
  },
  {
    icon: Shield,
    title: "Operations",
    description: "Ongoing management and optimization",
    tags: {
      iam: ['IGA-as-a-Service', 'AM-as-a-Service', 'PAM-as-a-Service'],
      grc: ['Continuous Monitoring', 'Risk Management', 'Compliance Reporting'],
      ea: ['Platform Management', 'Performance Optimization', 'Technology Support']
    }
  }
]

export default function AreasOfExpertiseSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('iam')

  return (
    <section className="py-24 bg-[#0B1221] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          Areas of <span className="text-[#FF5722]">Expertise</span>
        </h2>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300",
                activeCategory === category.id
                  ? "bg-[#FF5722] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Delivery Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliveryProcess.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#FF5722]/10 flex items-center justify-center mb-4">
                <phase.icon className="w-8 h-8 text-[#FF5722]" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
              <p className="text-gray-400 mb-6">{phase.description}</p>
              
              <div className="space-y-2">
                {phase.tags[activeCategory].map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 rounded-full text-sm bg-[#2D3748] text-gray-300 m-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
