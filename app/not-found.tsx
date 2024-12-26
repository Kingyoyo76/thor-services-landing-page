'use client';

import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1221] text-white">
      <div className="bg-[#162236] p-8 rounded-lg shadow-xl text-center max-w-md mx-4">
        <FileQuestion className="w-16 h-16 text-[#FF3D00] mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-6 text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          onClick={() => window.location.href = '/'}
          className="w-full bg-[#FF3D00] hover:bg-[#E64A00] text-white"
        >
          Return home
        </Button>
      </div>
    </div>
  );
}
