'use client';
import React from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import SoftwareFramework from "../_component/SoftwareFramework";

const Project = ({ title, text, url }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    const link = url;
  
    // Define animation properties for the project container
    const projectAnimation = useSpring({
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
      config: { duration: 500 }
    });
  
    return (
      <animated.div style={projectAnimation} className="relative">
        <div onClick={() => window.open(link, "_blank")} className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7 font-poppins">{text}</p>
        </div>
        <Image
          className="min-w-[400px] min-h-[400px]"
          src={require(`../../../public/assets/${projectTitle}.jpeg`).default}
          alt={projectTitle}
        />
      </animated.div>
    );
  };
  

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const titleAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-50px)',
    config: { duration: 500 }
  });

  const containerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-50px)',
    config: { duration: 500 }
  });

  return (
    <section id="projects" className="pb-48 w-5/6 mx-auto">
        <SoftwareFramework />
      {/* HEADINGS */}
      <animated.div
        ref={ref}
        className="md:w-2/5 mx-auto text-center"
        style={titleAnimation}
      >
        <div>
          <p className="font-dmserifdisplay font-semibold text-4xl text-orange">
            Projects
          </p>
          <div className="flex justify-center mt-5">
          </div>
        </div>
        <p className="mt-10 mb-10 font-poppins">
          From conceptualization to execution, these projects reflect my passion for 
          building intuitive and impactful digital solutions.
        </p>
      </animated.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        
          <animated.div style={containerAnimation} className="sm:grid sm:grid-cols-3">
            {/* ROW 1 */}
            <Project url="https://github.com/kellyhp/cookbook" title="Cookbook" text=" This project was is a react app of a cookbook website consisting of multiple cuisines w/ 
            recipies included. It is a front-end application that utilizes 'react-router-dom' for routing and reusuable cards."/>
            <Project url = "https://github.com/kellyhp/weather_app" title="Weather App" text=" This project is a react application of a weather app taken from https://openweathermap.org's API. 
            This weather app uses React useState for state management, react-icons for styling, moment for parsing data objects, and environment variables."/>
            <Project url ="https://medium.com/@kellyphan159/case-study-redesigning-boheme-threads-0adf336566ff" title="Boheme" text=" The thrift consignment store's web redesign aimed to boost exposure and user experience. The project included a clean, responsive design. 
            Social media integration enhanced online marketing, creating a visually appealing and user-friendly website."/>
            <Project url = "https://devpost.com/software/smiskify?ref_content=my-projects-tab&ref_feature=my_projects" title="Spotify Personality Visualizer" text=" The web application uses the 
            Spotify API to analyze your top songs of the last 6 months to determine what personality-based Smiski matches your music taste!"/>
            <Project url = "https://github.com/kellyhp/moment/tree/main" title="Film E-Commerce Website" text=" Modern e-commerce store, enhancing the shopping journey through features 
            like interactive maps, mobile friendliness, and intuitive product/category pages."/>
          </animated.div>
        
      </div>
    </section>
  );
};

export default Projects;

