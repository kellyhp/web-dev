import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const AnimatedTooltip = ({ people }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 30, damping: 20 };
  const x = useMotionValue(0); 
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-25, 25]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-25, 25]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); 
  };

  return (
    <>
      {people.map((tech) => (
        <div
          className="relative group"
          key={tech.id}
          onMouseEnter={() => setHoveredIndex(tech.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === tech.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute top-[-3rem] flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="font-bold text-white text-base">
                  {tech.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={require("../../../public/assets/logo/" + tech.image)}
            alt={tech.name}
            className="min-w-[80px] min-h-[80px] object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-green relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};

export default AnimatedTooltip;
