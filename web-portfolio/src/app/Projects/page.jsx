'use client';
import React from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import SoftwareFramework from "../_component/SoftwareFramework";
import { cn } from "../../../util/cn";

const BentoGrid = ({ className, children }) => {
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

const Tag = ({ keyword }) => {
  return (
    <span className="bg-green text-white text-sm font-satoshi px-2 py-1 rounded-md m-1">
      {keyword}
    </span>
  );
};

const BentoGridItem = ({ className, title, description, tags = [], onClick }) => {
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
            className="rounded-lg object-cover w-full h-full max-h-[450px] transition duration-300 transform group-hover/bento:scale-95 group-hover/bento:saturate-200"
            src={require(`../../../public/assets/${projectTitle}.jpeg`).default}
            alt={projectTitle}
          />
        </div>
        <div className="text-xl font-satoshi font-bold text-white dark:text-white mb-2 mt-2 truncate relative">
          <span className="relative after:content-[''] after:absolute after:z-[-1] after:left-0 after:bottom-[0px] after:bg-green after:h-[8px] after:w-0 group-hover/bento:after:w-full after:transition-all after:rounded-xs after:duration-300">
            {title}
          </span>
        </div>
        <div className="font-satoshi font-normal text-white text-sm dark:text-white overflow-hidden">
          {description}
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap mt-2">
            {tags.map((tag, index) => (
              <Tag key={index} keyword={tag} />
            ))}
          </div>
        )}
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
      url: "https://github.com/kellyhp/weather_app",
      title: "Weather App",
      description: "This project is a react application of a weather app taken from Openweathermap's API. This weather app uses React useState for state management, react-icons for styling, moment for parsing data objects, and environment variables.",
      tags: ['React', 'Javascript']
    },
    {
      url: "https://medium.com/@kellyphan159/case-study-redesigning-boheme-threads-0adf336566ff",
      title: "Boheme",
      description: "The thrift consignment store's web redesign aimed to boost exposure and user experience. The project included a clean, responsive design. Social media integration enhanced online marketing, creating a visually appealing and user-friendly website.",
      tags: ['HTML', 'CSS', 'jQuery','Figma']
    },
    {
      url: "https://github.com/kellyhp/moment/tree/main",
      title: "Film E-Commerce Website",
      description: "Modern e-commerce store, enhancing the shopping journey through features like interactive maps, mobile friendliness, and intuitive product/category pages.",
      tags: ['React', 'Javascript', 'Nextjs', 'GraphQL', 'Apollo Client', 'Leaflet']
    },
    {
      url: "https://devpost.com/software/smiskify?ref_content=my-projects-tab&ref_feature=my_projects",
      title: "Spotify Personality Visualizer",
      description: "The web application uses the Spotify API to analyze your top songs of the last 6 months to determine what personality-based Smiski matches your music taste!",
      tags: ['Python', 'Flask', 'Figma']
    },
    {
      url: "https://github.com/kellyhp/includeProject",
      title: "Expense Tracker",
      description: "The expense tracker website combines mobile-friendly design with robust user authentication features, including login, account creation, and password recovery, while also providing insightful graphical representations of expenses.",
      tags: ['React', 'Nextjs', 'Javascript', 'Firebase', 'MongoDB', 'Postman']
    },
    {
      url: "https://github.com/kellyhp/motor-vehicle-collisions",
      title: "Motor Vehicle Collisions in NYC",
      description: "This is an interactive dashboard designed to analyze and visualize motor vehicle collisions across New York City. The dashboard utilizes various data visualizations to provide insights into the frequency, locations, and causes of accidents.",
      tags: ['Pythion', 'Steamlit', 'Pandas', 'Plotly', 'Pydeck']
    },
    {
      url: "",
      title:"Customer Overview Dashboard",
      description: "This is an interactive dashboard to analyze and visualize the customer segments and target a specific group. This provides actionable insights to marketing teams by highlighting behavioral trends.",
      tags: ['PowerBI', 'Excel']
    }
  ];

  return (
    <section id="projects" className="pb-48 w-5/6 mx-auto">
        <SoftwareFramework />
      {/* HEADINGS */}
      <animated.div
        ref={ref}
        className="mx-auto text-center"
        style={titleAnimation}
      >
        <div>
          <p className="text-left font-satoshi font-semibold md:text-4xl text-2xl text-orange ">
            Projects
          </p>
          <div className="flex justify-center mt-5">
          </div>
        </div>
        <p className="mt-10 mb-10 font-satoshi text-left ">
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
                tags={item.tags}
                onClick={() => {
                  if (item.url) {
                    window.open(item.url, "_blank");
                  }
                }}
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
