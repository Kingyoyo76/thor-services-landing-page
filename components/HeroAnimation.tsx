import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const elements = container.children

    gsap.set(elements, { autoAlpha: 0, y: 50 })

    gsap.to(elements, {
      duration: 1,
      autoAlpha: 1,
      y: 0,
      stagger: 0.2,
      ease: 'power3.out'
    })

    const tl = gsap.timeline({ repeat: -1, yoyo: true })

    tl.to(elements, {
      duration: 2,
      y: '-=10',
      rotation: '+=5',
      scale: 1.05,
      stagger: 0.1,
      ease: 'sine.inOut'
    })

  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-purple-300 rounded-full opacity-50"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 border-4 border-white rounded-lg opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/3 w-40 h-24 border-4 border-white rounded-full opacity-30"></div>
    </div>
  )
}

