'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ComprehensiveSolutionsSection from '@/components/ComprehensiveSolutionsSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import StaffAugmentationSection from '@/components/StaffAugmentationSection'
import TestimonialSection from '@/components/TestimonialSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ComprehensiveSolutionsSection />
      <ExpertiseSection />
      <StaffAugmentationSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
      <BackToTop />
    </main>
  )
}
