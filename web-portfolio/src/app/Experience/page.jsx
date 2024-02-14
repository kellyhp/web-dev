'use client';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import UploadButton from '../_component/UploadButton';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Update isVisible state after a delay or based on some condition
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Example: Start animation after 1 second

    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, []); // Run once on component mount

  const experienceAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : -40, // Start from -50 and animate to 0
    config: { duration: 500 }
  });

  return (
    <div className="mt-[100px] flex justify-center items-center w-full mx-auto">
      {/* Experience details */}
      <animated.div
        className="w-5/6 mx-auto text-center relative"
        style={{ ...experienceAnimation, top: isVisible ? 0 : -50 }}
      >
        <div>
          <p className="font-dmserifdisplay font-semibold md:text-4xl text-2xl">
            Experience
          </p>
          <div className="flex justify-center mt-5"></div>
        </div>

        {/* First experience */}
        <div className="mt-8 flex md:flex-row flex-col justify-center items-center">
          <div className="md:w-1/3 w-full md:mb-0 mb-5 flex flex-col items-center">
            <p className="font-poppins font-normal text-lg">MAY 2023 - AUGUST 2023</p>
            <span className="font-dmserifdisplay font-bold md:text-2xl text-lg">Codology</span>
            <span className="font-dmserifdisplay font-semibold md:text-2xl text-lg">Software Developer Intern</span>
          </div>
          <div className="md:w-2/3 w-full ml-4 px-5">
            <p className="font-poppins">
              Software: MongoDB, NodeJS, Express.js, HTML/CSS <br/>
              Weekly stand up meetings to analyze project specifications and designing database schemas and API endpoints <br/>
              Implement robust authentication and authorization mechanisms such as JSON web tokens for user sessions and permissions along with password hashing to encrypt user passwords stored in the database <br/>
              Leveraged RESTful API principles to implement endpoints for handling file uploads, ensuring compatibility with various video formats and sizes <br/>
              Acquired practical experience on backend development through the iterative development of server-side scripting and API integration
            </p>
          </div>
        </div>

        {/* Second experience */}
        <div className="mt-8 flex md:flex-row flex-col justify-center items-center">
          <div className="md:w-1/3 w-full flex flex-col items-center md:mb-0 mb-5">
            <p className="font-poppins font-normal text-lg">OCTOBER 2023 - JANURARY 2024</p>
            <span className="font-dmserifdisplay font-bold md:text-2xl text-lg">Feastech Data Corp</span>
            <span className="font-dmserifdisplay font-semibold md:text-2xl text-lg">Fullstack Developer Intern</span>
          </div>
          <div className="md:w-2/3 w-full ml-4 px-5">
            <p className="font-poppins">
              Software: Azure, SQL, Java, ChatGPT API, Figma <br/>
              Designed a service-oriented architecture to improve fault tolerance and maintainability for risk assessments <br/>
              Developed MySQL database to handle data creation, updating, and deletion operations on risk assessments <br/>
              Integrated ChatGPT as a virtual assistant to develop risk assessments for companies within the application and encapsulated the logic with handling request and responses with clean code <br/>
              Worked for UI/UX team to implement wireframes ensuring WCAG standards and consistency <br/>
              Gained expertise on front-end development principles and valuable insights on code readability, maintainability, scalability, and documentation 
            </p>
          </div>
        </div>

        {/* Line connecting circles */}
        <div className="absolute left-1/3 w-0.5 bg-orange hidden md:block" style={{ top: 'calc(1/11 * 100%)', height: 'calc((2/3 * 1.02) * 100%)' }}>
        {/* First dot */}
        <div className="absolute top-[80px] right-[-9px] w-5 h-5 rounded-full bg-orange"></div>
        {/* Second dot */}
        <div className="absolute top-[350px] right-[-9px] w-5 h-5 rounded-full bg-orange"></div>
        </div>


        {/* Check out resume */}
        <animated.p
          className="flex justify-center pt-5 pb-5 font-poppins font-semibold"
          style={{ opacity: experienceAnimation.opacity }}
        >
          Check out my resume below!
        </animated.p>
        <div className="mb-5">
            <UploadButton />
        </div>
      </animated.div>
    </div>
  );
};

export default Experience;

