import { create } from 'zustand';

interface MeetingModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMeetingModal = create<MeetingModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
