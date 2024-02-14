'use client';
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import TreeQA from "../_component/TreeQA";
import SocialMediaIcons from "../_component/SocialMediaIcons";
import Link from "next/link";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Update isVisible state after a delay or based on some condition
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Example: Start animation after 0.5 second

    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, []); // Run once on component mount

  // Define animation properties for the content
  const contentAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)', // Start from -20px and animate to 0
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
            <div className="text-3xl font-semibold font-dmserifdisplay mb-4 text-black md:text-start text-center">
                Who I Am
            </div>
            <div className="font-poppins text-base mb-4 text-black md:w-3/4 w-full md:text-start text-center">
            Hi there! My name is Kelly, and I'm currently an undergraduate student at UC Davis, majoring in Computer Science with a minor in Technology Management. 
            </div>
            <div className="font-poppins text-base mb-4 text-black md:w-3/4 w-full md:text-start text-center">
            One of my passions is promoting cultural awareness and diversity,
             which is why I actively participate in the Vietnamese Student Association. Within the association, I help out in coordinating our culture show 
             performance and managing the various acts. It's incredibly fulfilling to showcase the rich heritage and traditions of Vietnamese culture to our community.
            </div>
            <div className="font-poppins text-base mb-4 text-black md:w-3/4 w-full md:text-start text-center">
            In my free time, you can often find me exploring thrift stores in search of unique clothing pieces, collecting adorable trinkets like Smiskis, or immersing myself 
            in the serene world of aquariums. I have a diverse taste in music, ranging from soulful R&B tunes to catchy K-pop beats, which always adds a soundtrack to my day.
            </div>
            <div className="font-poppins text-base mb-4 text-black md:w-3/4 w-full md:text-start text-center">
            Overall, I'm passionate about leveraging technology to create meaningful experiences and contribute to the community. I'm excited to continue my journey of growth 
            and exploration both academically and personally. Feel free to reach out and connect with me—I'm always eager to meet new people and exchange ideas!
            </div>
        </animated.div>
      </div>
      <div className="w-full my-10">
        <div className="text-base font-dmserifdisplay underline font-semibold"> Here's A Sneak Peek Of What I Can Do!</div>
        <TreeQA />
        <div className="text-base font-dmserifdisplay underline mt-5 mb-5 font-semibold">
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
