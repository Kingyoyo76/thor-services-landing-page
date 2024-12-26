'use client';

import { Button } from '@/components/ui/button';
import { AlertOctagon } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-[#0B1221] text-white">
          <div className="bg-[#162236] p-8 rounded-lg shadow-xl text-center max-w-md mx-4">
            <AlertOctagon className="w-16 h-16 text-[#FF3D00] mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-6 text-gray-300">
              A critical error occurred. We apologize for the inconvenience.
            </p>
            <div className="space-y-4">
              <Button
                onClick={reset}
                className="w-full bg-[#FF3D00] hover:bg-[#E64A00] text-white"
              >
                Try again
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="w-full border-white text-white hover:bg-white hover:text-[#0B1221]"
              >
                Return home
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
