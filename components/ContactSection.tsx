'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import MeetingModal from './MeetingModal';
import ContactFormModal from './ContactFormModal';

export default function ContactSection() {
  const [showMeetings, setShowMeetings] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

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
    <section id="contact" className="bg-white text-[#0B1221] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Ready to take your IT infrastructure to the next level? Our team is here to help you achieve your goals.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-[#FF3D00] hover:bg-[#FF3D00]/90 text-white rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12 font-bold transform hover:scale-105 transition-all duration-300"
            onClick={handleScheduleMeeting}
          >
            Schedule a Strategy Session
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto border-2 border-[#FF3D00] text-[#FF3D00] hover:bg-[#FF3D00] hover:text-white rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12 font-bold transform hover:scale-105 transition-all duration-300"
            onClick={handleContactUs}
          >
            Contact Us
          </Button>
        </div>

        <MeetingModal isOpen={showMeetings} onClose={handleCloseMeeting} />
        <ContactFormModal isOpen={showContactForm} onClose={handleCloseContactForm} />
      </div>
    </section>
  );
}
