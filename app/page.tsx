'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ComprehensiveSolutionsSection from '@/components/ComprehensiveSolutionsSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import StaffAugmentationSection from '@/components/StaffAugmentationSection'
import TestimonialSection from '@/components/TestimonialSection'
import TransformSection from '@/components/TransformSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
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
      <ComprehensiveSolutionsSection />
      <ExpertiseSection />
      <StaffAugmentationSection />
      <TestimonialSection />
      <TransformSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
