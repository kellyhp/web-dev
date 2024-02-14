'use client';
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { useForm } from "react-hook-form";
import SocialMediaIcons from "../_component/SocialMediaIcons";
import InterestedSVG from "../_component/InterestedSVG";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const titleAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 500 },
  });

  const formAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { delay: 200, duration: 500 },
  });

  return (
    <div className="flex justify-center items-center w-5/6 md:mx-0 mx-auto">
      <section id="contact" className="contact md:py-48 py-10">
        {/* HEADINGS */}
        <animated.div
          ref={ref}
          style={titleAnimation}
          className="flex justify-end w-full"
        >
        </animated.div>

        {/* FORM & IMAGE */}
        <div className="md:flex md:justify-between gap-16">
          <animated.div
            style={formAnimation}
            className="basis-1/2 flex justify-center"
          >
            <div className="flex flex-col justify-center md:items-start items-center md:mt-0">
            <InterestedSVG/>
            <div className="font-poppins text-lg">
                Interested in working with me?
            </div>
            <div className="font-poppins text-lg">
                Email:{" "}
                <a
                  href="mailto:khphan@ucdavis.edu"
                  className="text-green hover:underline"
                >
                  khphan@ucdavis.edu
                </a>
              </div>
            <SocialMediaIcons />
            </div>
          </animated.div>

          <animated.div
            style={formAnimation}
            className="basis-1/2 mt-10 md:mt-0 md:mx-0 mx-10"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/54f39f21075c92c03552d96247291da0"
              method="POST"
            >
                
              <label htmlFor="name" className="text-black font-poppins">
                Name
              </label>
              <input
                id="name"
                className="w-full mb-3 bg-green font-semibold placeholder-opaque-black 
                p-3 rounded-lg"
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-green mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <label htmlFor="email" className="text-black mt-5 font-poppins">
                Email
              </label>
              <input
                id="email"
                className="w-full mb-3 bg-green font-semibold placeholder-opaque-black p-3 mt-1 rounded-lg"
                type="text"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-green mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <label htmlFor="message" className="text-black font-poppins mt-5">
                Message
              </label>
              <textarea
                id="message"
                className="w-full bg-green font-semibold placeholder-opaque-black p-3 mt-1 rounded-lg"
                name="message"
                placeholder="Enter your message"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-green mt-1 rounded-lg">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                className="button mt-5"
                type="submit"
              >
                SEND ME A MESSAGE
              </button>
            </form>
          </animated.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;