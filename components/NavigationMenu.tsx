"use client";

import { useCallback } from 'react'

const NavigationMenu = ({ onItemClick }: { onItemClick?: () => void }) => {
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
      
      // Call the callback if provided (for mobile menu)
      if (onItemClick) {
        onItemClick()
      }
    }
  }, [onItemClick])

  const menuItems = [
    { id: 'services', label: 'Services' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'final-cta', label: 'Contact' }
  ]

  return (
    <div className="md:flex md:space-x-8">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="block w-full md:w-auto text-left md:text-center text-white hover:text-[#FF3D00] transition-colors font-bold py-2 md:py-0"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default NavigationMenu
