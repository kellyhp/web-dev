'use client';
import React from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import SoftwareFramework from "../_component/SoftwareFramework";
import { cn } from "../../../util/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[h-full] grid-cols-1 md:grid-cols-3 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, onClick }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between space-y-4",
        className
      )}
      onClick={onClick}
    >
      <div className="group-hover/bento:translate-x-1 transition duration-200 cursor-pointer">
        <div className="relative w-full h-full min-h-[rem] overflow-hidden rounded-lg">
          <Image
            className="object-cover w-full h-full max-h-[450px]"
            src={require(`../../../public/assets/${projectTitle}.jpeg`).default}
            alt={projectTitle}
          />
        </div>
        <div className="font-poppins font-bold text-white dark:text-white mb-2 mt-2 truncate">
          {title}
        </div>
        <div className="font-poppins font-normal text-white text-sm dark:text-white overflow-hidden">
          {description}
        </div>
      </div>
    </div>
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
    config: { duration: 700 }
  });

  const items = [
    {
      url: "https://github.com/kellyhp/cookbook",
      title: "Cookbook",
      description: "This project is a react app of a cookbook website consisting of multiple cuisines with recipes included. It is a front-end application that utilizes 'react-router-dom' for routing and reusable cards."
    },
    {
      url: "https://github.com/kellyhp/weather_app",
      title: "Weather App",
      description: "This project is a react application of a weather app taken from https://openweathermap.org's API. This weather app uses React useState for state management, react-icons for styling, moment for parsing data objects, and environment variables."
    },
    {
      url: "https://medium.com/@kellyphan159/case-study-redesigning-boheme-threads-0adf336566ff",
      title: "Boheme",
      description: "The thrift consignment store's web redesign aimed to boost exposure and user experience. The project included a clean, responsive design. Social media integration enhanced online marketing, creating a visually appealing and user-friendly website."
    },
    {
      url: "https://github.com/kellyhp/moment/tree/main",
      title: "Film E-Commerce Website",
      description: "Modern e-commerce store, enhancing the shopping journey through features like interactive maps, mobile friendliness, and intuitive product/category pages."
    },
    {
      url: "https://devpost.com/software/smiskify?ref_content=my-projects-tab&ref_feature=my_projects",
      title: "Spotify Personality Visualizer",
      description: "The web application uses the Spotify API to analyze your top songs of the last 6 months to determine what personality-based Smiski matches your music taste!"
    },
    {
      url: "https://github.com/kellyhp/includeProject",
      title: "Expense Tracker",
      description: "The expense tracker website combines mobile-friendly design with robust user authentication features, including login, account creation, and password recovery, while also providing insightful graphical representations of expenses."
    },
  ];

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
          <p className="font-dmserifdisplay font-semibold text-4xl text-orange ">
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
      <div className="flex justify-center w-full">
        <animated.div style={containerAnimation}>
          {/* ROW 1 */}
          <BentoGrid>
            {items.map((item, index) => (
              <BentoGridItem
                key={index}
                title={item.title}
                description={item.description}
                onClick={() => window.open(item.url, "_blank")}
                className={index === 3 || index === 6 ? "md:col-span-2" : ""} 
              />
            ))}
          </BentoGrid>
        </animated.div>
      </div>
    </section>
  );
};

export default Projects;

