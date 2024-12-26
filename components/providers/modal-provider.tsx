'use client';

import { useEffect, useState } from 'react';
import ContactFormModal from '@/components/ContactFormModal';
import MeetingModal from '@/components/MeetingModal';
import { useContactModal } from '@/hooks/use-contact-modal';
import { useMeetingModal } from '@/hooks/use-meeting-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const contactModal = useContactModal();
  const meetingModal = useMeetingModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {contactModal.isOpen && (
        <ContactFormModal 
          isOpen={contactModal.isOpen} 
          onClose={contactModal.onClose}
        />
      )}
      {meetingModal.isOpen && (
        <MeetingModal 
          isOpen={meetingModal.isOpen} 
          onClose={meetingModal.onClose}
        />
      )}
    </>
  );
};
