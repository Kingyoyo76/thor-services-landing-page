'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import NavigationMenu from './NavigationMenu'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1221] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg sm:text-xl font-bold text-white flex items-center">
            <span className="flex items-center">
              <span className="flex items-center -ml-1">
                <svg
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-8 text-[#FF3D00]"
                >
                  <path
                    d="M6 8h12v4H6z M11 12v16 M11 16h2v2h-2z M11 20h2v2h-2z M11 24h2v2h-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="-ml-1">HOR</span>
              </span>
              <span className="flex items-center ml-4 mr-2">
                <span className="-mr-1">I</span>
                <svg
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-8 text-[#FF3D00]"
                >
                  <path
                    d="M6 8h12v4H6z M11 12v16 M11 16h2v2h-2z M11 20h2v2h-2z M11 24h2v2h-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>SERVICES</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavigationMenu />
          </div>

          <Button
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B1221] border-t border-gray-800">
          <div className="px-6 py-4 space-y-2">
            <NavigationMenu />
          </div>
        </div>
      )}
    </nav>
  )
}
