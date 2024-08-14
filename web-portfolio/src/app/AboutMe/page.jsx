'use client';
import { cloud } from './_data/cloud';
import { data }from './_data/data';
import { database } from './_data/database';
import { design } from './_data/design';
import { dev } from './_data/dev';
import { language } from './_data/language';
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import TreeQA from "../_component/TreeQA";
import SocialMediaIcons from "../_component/SocialMediaIcons";
import AnimatedToolTip from '../_component/AnimatedToolTip';
import Link from "next/link";
import { useInView } from 'react-intersection-observer';

const Section = ({ children, title, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 },
  });

  return (
    <animated.div style={animation} ref={ref} id={id}>
      {children}
    </animated.div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); 

    return () => clearTimeout(timeout);
  }, []); 

  const contentAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)', 
    config: { duration: 500 }
  });

  return (
    <div className="w-5/6 mx-auto px-4 py-8 flex flex-col justify-center items-center mt-20">
      {/* Image section */}
      <Section  id="content-section"> 
      <div className="w-full flex md:flex-row flex-col justify-center items-center mx-auto">
        <div className="w-full md:w-1/2 justify-center items-center flex flex-col md:mt-10 mt-0">
            <Image
            alt="profile"
            className="
            z-10 w-full h-auto md:h-auto shadow-custom border-solid border-[2px] 
            border-green max-w-[350px]"
            src={require("../../../public/assets/About.jpg")}
            />
            <SocialMediaIcons />
        </div>
        {/* Content section */}
        <animated.div style={contentAnimation} className="w-full md:w-1/2 justify-center flex flex-col text-left">
            <div className="text-3xl font-semibold font-satoshi mb-4 text-black md:text-start text-left">
                Who I Am
            </div>
            <div className="font-satoshi text-base mb-4 text-black md:w-3/4 w-full md:text-start">
            Hi there! My name is Kelly, and I'm currently an undergraduate student at UC Davis, majoring in Computer Science with a minor in Technology Management. 
            </div>
            <div className="font-satoshi text-base mb-4 text-black md:w-3/4 w-full md:text-start">
            In my free time, you can often find me exploring thrift stores in search of unique clothing pieces, collecting adorable trinkets like Smiskis, or immersing myself 
            in the serene world of aquariums. I have a diverse taste in music, ranging from soulful R&B tunes to catchy K-pop beats, which always adds a soundtrack to my day.
            </div>
        </animated.div>
      </div>
      </Section>
    

      <div className="w-full my-10">
      <Section id="sneak-peek-section">
      <div className="text-xl font-satoshi underline font-bold"> Here's A Sneak Peek Of What I Can Do!</div>
        <div className="flex flex-col items-center justify-center gap-5 mt-3">
          <div className="flex md:flex-row flex-col w-full justify-between">
            <div className="flex flex-row items-center justify-center my-3 w-full ">
              <AnimatedToolTip people={dev} />
            </div>
            <div className="flex flex-row items-center justify-center my-3 w-full ">
              <AnimatedToolTip people={data} />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full justify-between">
            <div className="flex flex-row items-center justify-center my-3 w-full">
              <AnimatedToolTip people={design} />
            </div>
            <div className="flex flex-row items-center justify-center my-3 w-full ">
              <AnimatedToolTip people={cloud} />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full justify-between">
            <div className="flex flex-row items-center justify-center my-3 w-full ">
              <AnimatedToolTip people={database} />
            </div>
            <div className="flex flex-row items-center justify-center my-3 w-full ">
              <AnimatedToolTip people={language} />
            </div>
          </div>
        </div>
      </Section>

        {/* <TreeQA /> */}
        <Section id="find-out-section">
        <div className="text-xl font-satoshi underline mt-5 mb-5 font-bold">
            Find Out Here What I've Worked On So Far!
        </div>
        <div className="flex md:flex-row flex-col md:gap-10 gap-5">
            <Link className="button" href="/Experience">
                My Experiences
            </Link>
            <Link className="button" href="/Projects">
                Projects I've Worked On
            </Link>
            <Link className="button" href="/CaseStudy">
                My Designs
            </Link>
        </div>
        </Section>

      </div>
    </div>
  );
};

export default About;
