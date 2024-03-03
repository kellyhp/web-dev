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
        <animated.div style={contentAnimation} className="w-full md:1/2 justify-center items-center flex flex-col">
            <div className="text-3xl font-semibold font-dmserifdisplay mb-4 text-black md:text-start text-center ">
                Who I Am
            </div>
            <div className="font-poppins text-base mb-4 text-black md:w-3/4 w-full md:text-start text-center ">
            Hi there! My name is Kelly, and I'm currently an undergraduate student at UC Davis, majoring in Computer Science with a minor in Technology Management. 
            </div>
            <div className="font-poppins text-base mb-4 text-black md:w-3/4 w-full md:text-start text-center ">
            One of my passions is promoting cultural awareness and diversity,
             which is why I actively participate in the Vietnamese Student Association. Within the association, I help out in coordinating our culture show 
             performance and managing the various acts. It's incredibly fulfilling to showcase the rich heritage and traditions of Vietnamese culture to our community.
            </div>
            <div className="font-poppins text-base mb-4 text-black md:w-3/4 w-full md:text-start text-center">
            In my free time, you can often find me exploring thrift stores in search of unique clothing pieces, collecting adorable trinkets like Smiskis, or immersing myself 
            in the serene world of aquariums. I have a diverse taste in music, ranging from soulful R&B tunes to catchy K-pop beats, which always adds a soundtrack to my day.
            </div>
            <div className="font-poppins text-base mb-4 text-black md:w-3/4 w-full md:text-start text-center ">
            Overall, I'm passionate about leveraging technology to create meaningful experiences and contribute to the community. I'm excited to continue my journey of growth 
            and exploration both academically and personally. Feel free to reach out and connect with me—I'm always eager to meet new people and exchange ideas!
            </div>
        </animated.div>
      </div>
      <div className="w-full my-10">
        <div className="text-xl font-dmserifdisplay underline font-bold"> Here's A Sneak Peek Of What I Can Do!</div>
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
        <TreeQA />
        <div className="text-xl font-dmserifdisplay underline mt-5 mb-5 font-bold">
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
      </div>
    </div>
  );
};

export default About;
