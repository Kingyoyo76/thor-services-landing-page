'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const handleComingSoon = (item: string) => {
    toast.info(`${item}`, {
      description: 'This feature is currently under development.'
    })
  }

  const scrollToExpertise = (tab: string) => {
    const element = document.getElementById('expertise')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Allow time for the scroll to complete before changing the tab
      setTimeout(() => {
        const tabButton = document.querySelector(`[data-tab="${tab}"]`) as HTMLButtonElement
        if (tabButton) {
          tabButton.click()
        }
      }, 1000)
    }
  }

  return (
    <footer className="bg-[#0B1221] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Thor IT Services</h3>
            <p className="text-sm text-gray-400">Empowering enterprises with comprehensive cybersecurity solutions.</p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToExpertise('ea')} 
                  className="text-xs sm:text-sm text-gray-400 hover:text-white"
                >
                  Enterprise Architecture (EA)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToExpertise('iam')} 
                  className="text-xs sm:text-sm text-gray-400 hover:text-white"
                >
                  Identity and Access Management (IAM)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToExpertise('grc')} 
                  className="text-xs sm:text-sm text-gray-400 hover:text-white"
                >
                  Cyber Risk and Compliance (CRC)
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleComingSoon('Case Studies')} 
                  className="text-xs sm:text-sm text-gray-400 hover:text-white"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleComingSoon('Whitepapers')} 
                  className="text-xs sm:text-sm text-gray-400 hover:text-white"
                >
                  Whitepapers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleComingSoon('Blog')} 
                  className="text-xs sm:text-sm text-gray-400 hover:text-white"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
              Follow Us
              <svg
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-8 ml-2 text-[#FF5722]"
              >
                <path
                  d="M6 8h12v4H6z M11 12v16 M11 16h2v2h-2z M11 20h2v2h-2z M11 24h2v2h-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/thor-group" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/thor_group" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Thor IT Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
