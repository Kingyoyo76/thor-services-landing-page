'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import TransformSection from '@/components/TransformSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import StaffAugmentationSection from '@/components/StaffAugmentationSection'
import TestimonialSection from '@/components/TestimonialSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import FinalCTASection from '@/components/FinalCTASection'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TransformSection />
      <ExpertiseSection />
      <StaffAugmentationSection />
      <TestimonialSection />
      <FinalCTASection />
      <Footer />
      <BackToTop />
    </main>
  )
}
