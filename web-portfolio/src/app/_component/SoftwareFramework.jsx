import React, { useState, useEffect } from "react";
import useMediaQuery from "../_hooks/useMediaQuery";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from "react-spring";
import Image from "next/image";

const SoftwareFramework = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const [isVisible, setIsVisible] = useState(false);

  // Use useEffect to control the animation visibility
  useEffect(() => {
    // Set isVisible to true after a delay of 500 milliseconds
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run once on component mount

  // Define animations for header and image
  const headerAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
    config: { duration: 500 }
  });

  const imageAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 500 }
  });

  const skillsAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 500 }
  });

  return (
    <section id="software-framework" className="mt-0 mb-20 bg-black p-16">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <animated.div
          className="md:w-1/3"
          style={headerAnimation}
        >
          <p className="font-dmserifdisplay font-semibold text-4xl  mb-5 text-white">
            My Methodology
          </p>

        </animated.div>

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* AGILE */}
        <animated.div
          className="md:w-1/3 mt-10"
          style={skillsAnimation}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-dmserifdisplay font-semibold text-5xl text-white">01</p>
              <p className="font-dmserifdisplay font-semibold text-3xl mt-3 text-white">
                AGILE
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-brown absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-poppins text-white">
          I implement Agile methodologies such as Scrum, facilitating frequent stand-up meetings, sprint planning sessions, and retrospective meetings. 
          This allows for iterative development, continuous feedback, and adaptation to changing requirements, ensuring timely delivery of high-quality software.
          </p>
        </animated.div>

        {/* Clean Code */}
        <animated.div
          className="md:w-1/3 mt-10"
          style={skillsAnimation}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-dmserifdisplay font-semibold text-5xl text-white">02</p>
              <p className="font-dmserifdisplay font-semibold text-3xl mt-3 text-white">
                Clean Code
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-light-green absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-poppins text-white">
          I adhere to clean code principles, including meaningful variable names, consistent formatting, and modular code architecture. 
          I enhance collaboration, reduce technical debt, and facilitate future enhancements.
          By applying SOLID principles and refactoring code regularly, I ensure readability, maintainability, and scalability of the codebase.
          </p>
        </animated.div>
        {/* Documentation */}
        <animated.div
          className="md:w-1/3 mt-10"
          style={skillsAnimation}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-dmserifdisplay font-semibold text-5xl text-white">03</p>
              <p className="font-dmserifdisplay font-semibold text-3xl mt-3 text-white">
                Documentation
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-poppins text-white">
          I extensively document my codebase, including inline comments, README files, and API documentation. 
          I utilize tools like Swagger or Postman, providing comprehensive descriptions of endpoints, 
          request and response formats, and usage examples. 
          This ensures clarity, accessibility, and ease of integration for developers consuming the API.
          </p>
        </animated.div>
      </div>
    </section>
  );
};

export default SoftwareFramework;

