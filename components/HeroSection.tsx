"use client";

import { Button } from "@/components/ui/button";
import { Zap, Users, Shield } from 'lucide-react';
import HeroContent from "./HeroContent";

export default function HeroSection() {
  const handleIgniteClick = () => {
    console.log("Ignite clicked");
    // Add your logic here
  };

  const handleMeetClick = () => {
    console.log("Meet clicked");
    // Add your logic here
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[#0B1221] to-[#162236] text-white min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
        <HeroContent />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
          <span className="block">IT Complexity Is Inevitable.</span>
          <span className="block text-[#FF3D00]">Chaos Is Optional.</span>
        </h1>
        <ul className="text-xl space-y-4 mb-12">
          <li className="flex items-center justify-center">
            <Shield className="text-[#FF3D00] mr-2 w-6 h-6" />
            Fortify your IDENTITY ACCESS
          </li>
          <li className="flex items-center justify-center">
            <Users className="text-[#FF3D00] mr-2 w-6 h-6" />
            Optimize your GOVERNANCE, RISK & COMPLIANCE
          </li>
          <li className="flex items-center justify-center">
            <Zap className="text-[#FF3D00] mr-2 w-6 h-6" />
            Streamline your ENTERPRISE ARCHITECTURE
          </li>
        </ul>
        <p className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FF3D00] to-[#FFA07A]">
          Get things done. Lower costs. No excuses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#FF3D00] hover:bg-[#E64A00] text-white text-lg group transition-all duration-300 transform hover:scale-105"
            onClick={handleIgniteClick}
          >
            Ignite Your Cyber Strategy
            <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-white text-white text-lg rounded-md bg-transparent"
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

