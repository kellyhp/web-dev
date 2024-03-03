import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(index);
      }
    });
  });

  const backgroundColors = [
    "#317256",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--amber-500))",
    "linear-gradient(to bottom right, var(--amber-500), var(--violet-500))",
    "linear-gradient(to bottom right, var(--violet-500), var(--rose-500))",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor:
          backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-white max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
      <motion.div
        animate={{
          background:
            linearGradients[activeCard % linearGradients.length],
        }}
        className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
      ></motion.div>
    </motion.div>
  );
};

const SoftwareFramework = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []); 

  const headerAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
    config: { duration: 500 }
  });

  const skillsAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 700 }
  });

  const content = [
    {
      title: "AGILE",
      description: "I implement Agile methodologies such as Scrum, facilitating frequent stand-up meetings, sprint planning sessions, and retrospective meetings. This allows for iterative development, continuous feedback, and adaptation to changing requirements, ensuring timely delivery of high-quality software."
    },
    {
      title: "Clean Code",
      description: "I adhere to clean code principles, including meaningful variable names, consistent formatting, and modular code architecture. I enhance collaboration, reduce technical debt, and facilitate future enhancements. By applying SOLID principles and refactoring code regularly, I ensure readability, maintainability, and scalability of the codebase."
    },
    {
      title: "Documentation",
      description: "I extensively document my codebase, including inline comments, README files, and API documentation. I utilize tools like Swagger or Postman, providing comprehensive descriptions of endpoints, request and response formats, and usage examples. This ensures clarity, accessibility, and ease of integration for developers consuming the API."
    }
  ];

  return (
    <section id="software-framework" className="mt-0 mb-20 bg-black p-16">
      <div className="md:flex md:justify-between md:gap-16 mt-32 flex-col">
        <animated.div style={headerAnimation}>
          <p className="font-dmserifdisplay font-semibold text-4xl  mb-5 text-white">
            My Methodology
          </p>
          <animated.div style={skillsAnimation}> <StickyScroll content={content} /></animated.div>
        </animated.div>
      </div>
    </section>
  );
};

export default SoftwareFramework;

