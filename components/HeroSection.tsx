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
      className="bg-[#0B1221] text-white min-h-screen flex flex-col justify-start pt-24 md:justify-center overflow-hidden relative"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 61, 0, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 61, 0, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            transform: 'perspective(1000px) rotateX(60deg)',
            animation: 'grid 20s linear infinite'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center relative flex flex-col justify-between" style={{ minHeight: 'calc(100vh - 160px)' }}>
        <div className="space-y-16 md:space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 md:space-y-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-24 md:mb-32">
              <span className="block mb-2 md:mb-4">IT Complexity Is Inevitable.</span>
              <span className="block text-[#FF3D00]">Chaos Is Optional.</span>
            </h1>
          </motion.div>

          <div className="space-y-12 md:space-y-16 -mt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center flex flex-col items-center space-y-2 md:space-y-4">
              <span className="block">Supercharge Your</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="text-[#FF3D00] flex items-center gap-4 justify-center"
                >
                  <span className="text-center">{phrases[currentPhrase].text}</span>
                  <CurrentIcon className="w-8 h-8 flex-shrink-0" />
                </motion.span>
              </AnimatePresence>
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Get Things Done. Lower Costs. No Excuses.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#FF3D00] hover:bg-[#FF3D00]/90 text-white text-lg group transition-all duration-300 transform hover:scale-105 rounded-full"
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
        </div>

        <MeetingModal isOpen={showMeetings} onClose={handleCloseMeeting} />
        <ContactFormModal isOpen={showContactForm} onClose={handleCloseContactForm} />
      </div>
    </section>
  );
}
