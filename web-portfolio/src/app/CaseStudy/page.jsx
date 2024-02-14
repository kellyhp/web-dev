'use client';
import React from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import UIUXFramework from "../_component/UIUXFramework";

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
  

const CaseStudy = () => {
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
    <section id="projects" className="pt-10 pb-48 w-5/6 mx-auto">
        <UIUXFramework />
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
            Everything so far is a works in progress!
        </p>
      </animated.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        
          <animated.div style={containerAnimation} className="sm:grid sm:grid-cols-3">
            {/* ROW 1 */}
            <Project url="https://medium.com/@kellyphan159/case-study-redesigning-boheme-threads-0adf336566ff" 
            title="Boheme" text=" The thrift consignment store's web redesign aimed to boost exposure and user experience. The project included a clean, responsive design. 
            Social media integration enhanced online marketing, creating a visually appealing and user-friendly website."/>
            <Project url = "https://www.figma.com/file/URTHMD9pPUmgIlYNgFkmfr/Expense-Tracker?type=design&node-id=1%3A12&mode=design&t=Jb2oUVgmH1Hcg4zi-1" 
            title="Expense Tracker" text="The expense tracker website combines mobile-friendly design with robust user authentication features, including login, account creation, and password recovery, while also providing insightful graphical representations of expenses."/>
            <Project url="https://www.figma.com/file/xKwFJkEJRaNNwNSHcqZww2/Preethi's-Indian-Cuisine?type=design&node-id=1%3A147&mode=design&t=oda2qLQfsm2IeUJ5-1" 
            title="Preethi" text="
            Preethi Indian Cuisine's website redesign aims to blend modern UI elements with a nostalgic mom and pop vibe, integrating DoorDash orders and updating the buffet and menu pages for an enhanced user experience."/>
            <Project url = "https://www.figma.com/file/4LGMkx3vpBN5QRaV0IsPUc/GeoNotify-App?type=design&node-id=1%3A512&mode=design&t=v6qszs5fL0mXiKEL-1" 
            title="Geonotify" text=" The web application uses the 
            The reminders app utilizes live location tracking to send tailored notifications based on reminders and specified location parameters, enhancing task management with real-time contextual alerts."/>
          </animated.div>
        
      </div>
    </section>
  );
};

export default CaseStudy;
