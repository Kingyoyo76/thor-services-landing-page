'use client';

import { Button } from "@/components/ui/button";
import { Zap, Users, Shield } from 'lucide-react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MeetingModal from './MeetingModal';
import ContactFormModal from './ContactFormModal';

const phrases = [
  { text: "Security Posture", icon: Shield },
  { text: "IT Teams", icon: Users },
  { text: "Cyber Projects", icon: Zap },
];

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showMeetings, setShowMeetings] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = phrases[currentPhrase].icon;

  const handleScheduleMeeting = () => {
    setShowMeetings(true);
  };

  const handleContactUs = () => {
    setShowContactForm(true);
  };

  const handleCloseMeeting = () => {
    setShowMeetings(false);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <section
      id="hero"
      className="bg-[#0B1221] text-white min-h-screen flex flex-col justify-center overflow-hidden pt-16 relative"
    >
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="cyber-grid opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 sm:mb-12 leading-tight">
            <span className="block">IT Complexity Is Inevitable.</span>
            <span className="block text-[#FF3D00]">Chaos Is Optional.</span>
          </h1>
        </motion.div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center">
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
          <motion.div 
            className="flex flex-col items-center w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="space-y-4 w-full">
              <motion.div 
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Shield className="text-[#FF3D00] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">Fortify your IDENTITY ACCESS</span>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Users className="text-[#FF3D00] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">Optimize your GOVERNANCE, RISK & COMPLIANCE</span>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Zap className="text-[#FF3D00] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">Streamline your ENTERPRISE ARCHITECTURE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-[#FF3D00]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Get things done. Lower costs. No excuses.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#FF3D00] hover:bg-[#E64A00] text-white text-lg group transition-all duration-300 transform hover:scale-105 rounded-full"
            onClick={() => {
              const contactModal = document.getElementById('final-cta');
              if (contactModal) {
                contactModal.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ignite Your Cyber Strategy
            <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-white text-white text-lg rounded-full bg-transparent hover:bg-white/10"
            onClick={() => {
              const scheduleModal = document.getElementById('final-cta');
              if (scheduleModal) {
                scheduleModal.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Meet Our Cyber Commandos
            <Users className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <MeetingModal isOpen={showMeetings} onClose={handleCloseMeeting} />
        <ContactFormModal isOpen={showContactForm} onClose={handleCloseContactForm} />
      </div>
    </section>
  );
}
