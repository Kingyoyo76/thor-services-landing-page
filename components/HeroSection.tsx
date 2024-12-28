'use client';

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ScrollingPoints from './ScrollingPoints';

export default function HeroSection() {
  const points = ["Cyber Projects", "SECURITY POSTURE", "IT TEAMS"];

  return (
    <section className="relative pt-20 overflow-hidden bg-gradient-to-b from-[#0B1221] to-[#1B2B44]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-12 md:py-20">
          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                IT Complexity Is Inevitable.<br/>
                Chaos Is Optional.<br/>
                Supercharge Your{' '}
              </h1>
              <div className="mb-8">
                <ScrollingPoints points={points} className="bg-transparent" />
              </div>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Get things done. Lower costs. No excuses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="bg-[#FF3D00] hover:bg-[#FF3D00]/90 text-white rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12 
                           font-bold transform hover:scale-105 transition-all duration-300 min-h-[44px] min-w-[44px]
                           shadow-lg hover:shadow-xl"
                  onClick={() => window.location.href = '#final-cta'}
                >
                  Ignite Your Cyber Strategy
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12
                           font-bold transform hover:scale-105 transition-all duration-300 min-h-[44px] min-w-[44px]"
                  onClick={() => window.location.href = '#contact'}
                >
                  Meet Our Cyber Commandos
                </Button>
              </div>
            </motion.div>

            {/* Image/Illustration */}
            <motion.div 
              className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full aspect-square">
                <Image
                  src="/hero-illustration.png"
                  alt="IT Solutions Illustration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24.6667L60 30.8333C120 37 240 49.3333 360 55.5C480 61.6667 600 61.6667 720 55.5C840 49.3333 960 37 1080 30.8333C1200 24.6667 1320 24.6667 1380 24.6667H1440V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V24.6667Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
