'use client';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import UploadButton from '../_component/UploadButton';

const experiences = [
  {
    id:1,
    title:'Website Student Assistant',
    company: 'University of California Agriculture and Natural Resources',
    duration: 'Aug 2024 - Present'
  },
  {
    id: 2,
    title: 'Fullstack Developer Intern',
    company: 'Feastech Data Corp',
    duration: 'Oct 2023 - Jan 2024',
  },
  {
    id: 3,
    title: 'Software Developer Intern',
    company: 'Codology',
    duration: 'May 2023 - Aug 2023',
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const experienceAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : -40,
    config: { duration: 500 },
  });

  return (
    <div className="mt-[10%] w-full mx-auto md:h-full h-screen p-8">
      <animated.div
        className="w-full text-center relative py-12 rounded-lg bg-white shadow-lg"
        style={{ ...experienceAnimation, top: isVisible ? 0 : -50 }}
      >
        <div className='text-left px-6'>
          <p className="font-satoshi font-medium md:text-4xl text-2xl">
            Experience
          </p>
          <div className="flex justify-center mt-5"></div>
        </div>

        <div className="mt-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ backgroundColor: '#faf7f7', color: '#000' }}
              whileHover={{
                backgroundColor: '#1a202c',
                color: '#fff',
                transition: { duration: 0.3, ease: 'easeInOut' },
              }}
              className="relative p-6 cursor-pointer overflow-hidden flex items-center"
            >
              <div className="md:w-1/2 w-full text-left font-satoshi">
                <div className="md:text-4xl text-2xl">{experience.company}</div>
              </div>
              <div className="flex items-center md:w-1/2 w-full justify-between">
                <div className="flex flex-col text-right w-full font-satoshi">
                  <span className="md:text-xl text-lg">{experience.title}</span>
                  <span className="text-xs">{experience.duration}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
            </motion.div>
          ))}
        </div>
      </animated.div>
      <animated.div
          className="flex flex-col items-center pt-10"
          style={{ opacity: experienceAnimation.opacity }}
        >
          <p className="mb-5 font-satoshi font-medium text-lg">
            Check out my resume below!
          </p>
          <UploadButton />
        </animated.div>
    </div>
  );
};

export default Experience;
