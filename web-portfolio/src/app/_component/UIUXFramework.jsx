import React, { useState, useEffect } from "react";
import useMediaQuery from "../_hooks/useMediaQuery";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from "react-spring";
import Image from "next/image";

const Framework = () => {
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
    <section id="skills" className="mt-0 mb-20 bg-black p-16">
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
        {/* EXPERIENCE */}
        <animated.div
          className="md:w-1/3 mt-10"
          style={skillsAnimation}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-dmserifdisplay font-semibold text-5xl text-white">01</p>
              <p className="font-dmserifdisplay font-semibold text-3xl mt-3 text-white">
                Empathize
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-brown absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-poppins text-white">
          By empathizing with the individuals who will ultimately interact with my creations, I gain invaluable insights that 
          inform every aspect of the design and development process. Through user research methodologies, I uncover valuable insights that shape the direction of the project.
          </p>
        </animated.div>

        {/* INNOVATIVE */}
        <animated.div
          className="md:w-1/3 mt-10"
          style={skillsAnimation}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-dmserifdisplay font-semibold text-5xl text-white">02</p>
              <p className="font-dmserifdisplay font-semibold text-3xl mt-3 text-white">
                Ideate
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-light-green absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-poppins text-white">
          Collaborating with my team or immersing myself in solitary brainstorming sessions, I explore diverse concepts and possibilities 
          to address the identified user requirements. Sketching wireframes, creating prototypes, and visualizing concepts allow me to breathe 
          life into ideas.
          </p>
        </animated.div>
        {/* IMAGINATIVE */}
        <animated.div
          className="md:w-1/3 mt-10"
          style={skillsAnimation}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-dmserifdisplay font-semibold text-5xl text-white">03</p>
              <p className="font-dmserifdisplay font-semibold text-3xl mt-3 text-white">
                Iterate
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-poppins text-white">
          Each iteration brings me closer to achieving the optimal user experience, as I analyze feedback, 
          identify areas for enhancement, and implement changes iteratively. Through multiple cycles of refinement, I ensure that my solutions 
          are not just good but exceptional, delivering value and delight to users.
          </p>
        </animated.div>
      </div>
    </section>
  );
};

export default Framework;
