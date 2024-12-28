"use client";

import { useCallback } from 'react'

const NavigationMenu = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  const menuItems = [
    { id: 'services', label: 'Services' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'final-cta', label: 'Contact' }
  ]

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-white/90 hover:text-[#FF3D00] transition-colors font-medium py-3 md:py-0
                     text-base md:text-sm tracking-wide uppercase
                     flex items-center space-x-2 w-full md:w-auto"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default NavigationMenu
