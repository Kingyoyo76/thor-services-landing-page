"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Users, Shield } from 'lucide-react';

const phrases = [
  { text: "Cyber Projects", icon: Zap },
  { text: "IT Teams", icon: Users },
  { text: "Security Posture", icon: Shield },
];

export default function HeroContent() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = phrases[currentPhrase].icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        <span className="block">Supercharge Your</span>
        <motion.span
          key={currentPhrase}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#FF4B11] flex items-center justify-center"
        >
          {phrases[currentPhrase].text}
          <CurrentIcon className="ml-4 w-8 h-8" />
        </motion.span>
      </h2>
      <ul className="text-xl space-y-2 mt-4">
        <li className="flex items-center justify-center">
          <ChevronRight className="text-[#FF4B11] mr-2" /> Expand your IT team
        </li>
        <li className="flex items-center justify-center">
          <ChevronRight className="text-[#FF4B11] mr-2" /> Accelerate project
          delivery and implementations
        </li>
      </ul>
    </motion.div>
  );
}

