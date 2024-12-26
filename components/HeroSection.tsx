"use client";

import { Button } from "@/components/ui/button";
import { Zap, Users, Shield, ChevronRight } from 'lucide-react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  { text: "Cyber Projects", icon: Zap },
  { text: "IT Teams", icon: Users },
  { text: "Security Posture", icon: Shield },
];

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = phrases[currentPhrase].icon;

  const handleIgniteClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMeetClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[#0B1221] to-[#162236] text-white min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-12 leading-tight">
          <span className="block">IT Complexity Is Inevitable.</span>
          <span className="block text-[#FF3D00]">Chaos Is Optional.</span>
        </h1>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            <span className="block">Supercharge Your</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentPhrase}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#FF3D00] inline-flex items-center justify-center gap-2 w-full"
              >
                <span className="min-w-[200px] text-center">{phrases[currentPhrase].text}</span>
                <CurrentIcon className="w-8 h-8 flex-shrink-0" />
              </motion.span>
            </AnimatePresence>
          </h2>
          <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <Shield className="text-[#FF3D00] w-6 h-6 flex-shrink-0" />
                  <span className="text-xl sm:text-2xl font-bold">Fortify your IDENTITY ACCESS</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <Users className="text-[#FF3D00] w-6 h-6 flex-shrink-0" />
                  <span className="text-xl sm:text-2xl font-bold">Optimize your GOVERNANCE, RISK & COMPLIANCE</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <Zap className="text-[#FF3D00] w-6 h-6 flex-shrink-0" />
                  <span className="text-xl sm:text-2xl font-bold">Streamline your ENTERPRISE ARCHITECTURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-[#FF3D00]">
          Get things done. Lower costs. No excuses.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#FF3D00] hover:bg-[#E64A00] text-white text-lg group transition-all duration-300 transform hover:scale-105 rounded-full"
            onClick={handleIgniteClick}
          >
            Ignite Your Cyber Strategy
            <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-white text-white text-lg rounded-full bg-transparent"
            onClick={handleMeetClick}
          >
            Meet Our Cyber Commandos
            <Users className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
