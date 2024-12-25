'use client';

import { Button } from '@/components/ui/button';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeetingModal({ isOpen, onClose }: MeetingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl h-[80vh] relative">
        <Button
          variant="ghost"
          className="absolute top-2 right-2 z-50"
          onClick={onClose}
        >
          ✕
        </Button>
        <iframe
          src="https://meetings.hubspot.com/jhamdi?embed=true"
          frameBorder="0"
          className="w-full h-full rounded-lg"
          title="Schedule a meeting"
        />
      </div>
    </div>
  );
}
