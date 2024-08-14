"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { animated, useSpring } from 'react-spring';
import { motion } from 'framer-motion';

const LoadingPage = ({ progress = 0, onDone }) => {
  const [springProps, setSpringProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(20px)',
  }));

  useEffect(() => {
    setSpringProps({ opacity: 1, transform: 'translateY(0)' });
  }, [setSpringProps]);

  // Ensure progress is clamped between 0 and 1
  const clampedProgress = Math.min(Math.max(progress, 0), 1);

  // Compute strokeDashoffset to reflect the percentage
  const radius = 20; // Circle radius
  const strokeWidth = 1; // Stroke width
  const circumference = 7 * Math.PI * radius; // Circle circumference
  const strokeDashoffset = circumference * (1 - clampedProgress);

  // Define the exit animation using framer-motion
  const exitAnimation = {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
      ease: 'easeOut' // Smooth ease-out transition
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50"
      style={springProps}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={exitAnimation} // Apply exit animation
      onAnimationComplete={() => {
        if (progress >= 1 && onDone) {
          onDone(); // Callback when animation completes
        }
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Percentage above the logo */}
        <p className="text-xs font-bold absolute top-[-3rem]">{Math.round(clampedProgress * 100)}%</p>
        
        <svg className="w-40 h-40" viewBox="0 0 50 50">
          <circle className="stroke-gray-300" cx="25" cy="25" r={radius} strokeWidth={strokeWidth} fill="none" />
          <circle
            className="stroke-blue-500"
            cx="25"
            cy="25"
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            fill="none"
            style={{ transition: 'stroke-dashoffset 0.5s ease-out' }} // Easing effect for stroke
          />
        </svg>

        {/* Logo in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/assets/icon.png" alt="Logo" width={70} height={70} />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
