'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Shield, Users, Zap } from 'lucide-react';

const icons = [Shield, Users, Zap];

interface ScrollingPointsProps {
    points: string[];
    className?: string;
}

export default function ScrollingPoints({ points, className }: ScrollingPointsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % points.length);
        }, 8000); // 8 seconds per point

        return () => clearInterval(timer);
    }, [points.length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;

        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                // Swipe left
                setCurrentIndex((prev) => (prev + 1) % points.length);
            } else {
                // Swipe right
                setCurrentIndex((prev) => (prev - 1 + points.length) % points.length);
            }
        }
        setTouchStart(null);
    };

    return (
        <div 
            className={cn(
                "relative h-[80px] sm:h-[100px] overflow-hidden bg-white touch-pan-x",
                className
            )}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                    className="absolute w-full h-full flex items-center justify-center px-4 sm:px-6"
                >
                    <div className="flex items-center gap-3 sm:gap-4 py-4 px-6 bg-white/5 rounded-xl backdrop-blur-sm
                                  hover:bg-white/10 transition-all duration-300 border border-white/10
                                  hover:border-[#FF3D00]/50 group min-h-[44px]">
                        {icons[currentIndex] && React.createElement(icons[currentIndex], {
                            className: "text-[#FF3D00] w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 group-hover:scale-110 transition-transform"
                        })}
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B1221] whitespace-nowrap group-hover:text-[#0B1221]/80">
                            {points[currentIndex]}
                        </span>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2">
                {points.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 min-w-[8px] min-h-[8px] ${
                            index === currentIndex 
                                ? 'bg-[#FF3D00] w-4' 
                                : 'bg-[#0B1221]/30 hover:bg-[#0B1221]/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
