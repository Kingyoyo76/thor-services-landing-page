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

  return (
    <div className="md:flex md:space-x-8">
      {['services', 'expertise', 'contact'].map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className="block w-full md:w-auto text-left md:text-center text-white hover:text-[#FF3D00] transition-colors font-bold py-2 md:py-0"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default NavigationMenu
