'use client';

import { ChevronRight, Calendar, Mail, Users, Rocket, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import MeetingModal from './MeetingModal';
import ContactFormModal from './ContactFormModal';

export default function TransformSection() {
  const [showMeetings, setShowMeetings] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleScheduleMeeting = () => {
    setShowMeetings(true);
  };

  const handleCloseMeeting = () => {
    setShowMeetings(false);
  };

  const handleContactUs = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <section id="contact" className="bg-white text-[#0B1221] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16">Ready to Transform Your IT?</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#FF3D00]/10 p-4 rounded-full">
                <Users className="w-8 h-8 text-[#FF3D00]" />
              </div>
              <div className="text-xl font-semibold">Expand your IT team</div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#FF3D00]/10 p-4 rounded-full">
                <Rocket className="w-8 h-8 text-[#FF3D00]" />
              </div>
              <div className="text-xl font-semibold">Accelerate project delivery</div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#FF3D00]/10 p-4 rounded-full">
                <DollarSign className="w-8 h-8 text-[#FF3D00]" />
              </div>
              <div className="text-xl font-semibold">Reduce operational costs</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-[#FF3D00] hover:bg-[#FF3D00]/90 text-white rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12 font-bold transform hover:scale-105 transition-all duration-300"
            onClick={handleScheduleMeeting}
          >
            Schedule a Strategy Session
            <Calendar className="ml-3 h-6 w-6" />
          </Button>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-white border-2 border-[#FF3D00] text-[#FF3D00] hover:bg-[#FF3D00] hover:text-white rounded-full text-lg sm:text-xl py-6 px-8 sm:px-12 font-bold transform hover:scale-105 transition-all duration-300"
            onClick={handleContactUs}
          >
            Contact Us
            <Mail className="ml-3 h-6 w-6" />
          </Button>
        </div>

        <MeetingModal isOpen={showMeetings} onClose={handleCloseMeeting} />
        <ContactFormModal isOpen={showContactForm} onClose={handleCloseContactForm} />
      </div>
    </section>
  );
}
