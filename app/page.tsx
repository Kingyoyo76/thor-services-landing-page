'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import TransformSection from '@/components/TransformSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import StaffAugmentationSection from '@/components/StaffAugmentationSection'
import TestimonialSection from '@/components/TestimonialSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import FinalCTASection from '@/components/FinalCTASection'

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#0B1221]">
      <Navigation />
      <HeroSection />
      <div id="services" className="w-full">
        <TransformSection />
      </div>
      <div id="expertise" className="w-full">
        <ExpertiseSection />
      </div>
      <div id="technologies" className="w-full">
        <StaffAugmentationSection />
      </div>
      <TestimonialSection />
      <div id="final-cta" className="w-full">
        <FinalCTASection />
      </div>
      <Footer />
      <BackToTop />
    </div>
  )
}
