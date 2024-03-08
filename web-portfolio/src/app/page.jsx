'use client';
import React, { useState, useEffect } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import Link from 'next/link';
import Image from 'next/image';

const LinkTrail = ({ open, links }) => {
  const trail = useTrail(links.length, {
    config: { mass: 5, tension: 1500, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 40,
    from: { opacity: 0, x: 40 },
  });

  return (
    <div className="flex flex-col items-start">
      {trail.map((props, index) => (
        <animated.div key={index} style={props} classname="mb-3">
          <Link href={links[index].href}>
            <div className="md:text-6xl text-2xl hover:italic hover:text-orange md:min-w-[600px] min-w-[200px]">{links[index].text}</div>
          </Link>
        </animated.div>
      ))}
    </div>
  );
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const contentAnimation = useSpring({
    opacity: showContent ? 1 : 0,
    transform: showContent ? 'translateY(0)' : 'translateY(-100px)',
    config: { duration: 500 },
  });

  const [open, setOpen] = useState(true);
  const links = [
    { text: 'About Me', href: '/AboutMe' },
    { text: 'My Experience', href: '/Experience' }, 
    { text: 'Projects', href: '/Projects' },
    { text: 'UI/UX Case Studies', href: '/CaseStudy' },
    { text: 'Contact', href: '/Contact' },
  ];

  return (
    <div className="flex flex-col justify-center align-middle h-screen w-full mx-auto">
        <div className="w-full mx-auto md:flex md:justify-center md:items-center md:h-full gap-16 md:py-10 py-0">
          <div className="basis-1/2 mt-12 md:mt-32 md:order-1 mx-auto">
            {/* HEADINGS */}
            <animated.div style={contentAnimation}>
              <div className="flex items-center justify-center">
              <button className="button w-[300px] h-[350px] md:my-10 my-0 mb-10 mt-[100px] mx-auto md:mt-0 relative overflow-hidden">
                <Image
                  alt="profile"
                  className="absolute inset-0 min-w-full min-h-full object-cover"
                  src={require("../../public/assets/Kelly-Phan.jpg")}
                />
              </button>
              </div>
            <div className="flex items-center align-center flex-col">
              <p className="text-5xl font-dmserifdisplay text-center md:text-start md:mr-20 ">
                Kelly Phan
              </p>
              <p className="mt-10 mb-7 text-sm text-center md:text-start font-poppins max-w-[300px] ">
                Currently an undergraduate at UC Davis / Computer Science Major /
                Technology Management Minor <br /> <br /> Full Stack / User
                Experience Design / Project Management / Web Development
              </p>
            </div>
            </animated.div>

          </div>
          {/* LINK SECTION */}
          <div className="md:order-2 flex justify-center md:basis-1/2 z-10 mt-0 md:mt-32 py-10 md:items-start items-center">
            <div className="flex flex-col font-dmserifdisplay ml-5 md:text-start text-center">
              <LinkTrail open={open} links={links} />
            </div>
          </div>
        </div>
  
    </div>
  );
}

