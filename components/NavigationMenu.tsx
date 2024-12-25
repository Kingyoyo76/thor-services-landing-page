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
    <>
      {['services', 'expertise', 'contact'].map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className="text-white hover:text-[#FF4B11] transition-colors font-bold"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </>
  )
}

export default NavigationMenu
