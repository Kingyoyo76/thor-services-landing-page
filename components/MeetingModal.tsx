'use client';

import { Modal } from '@/components/ui/modal';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeetingModal({ isOpen, onClose }: MeetingModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Schedule a Meeting"
    >
      <div className="h-[70vh] -m-6">
        <iframe
          src="https://meetings.hubspot.com/jhamdi?embed=true"
          frameBorder="0"
          className="w-full h-full"
          title="Schedule a meeting"
          onError={(e) => {
            console.error('Meeting calendar failed to load:', e);
          }}
        />
      </div>
    </Modal>
  );
}
