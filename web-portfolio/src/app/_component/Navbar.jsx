import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      className="bg-white min-h-[50px] z-50 fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-4 border-b border-black"
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            alt="icon-profile"
            className="h-[50px] w-[50px] object-cover cursor-pointer"
            src={require("../../../public/assets/icon.png")}
          />
        </Link>
        {/* Logo */}
      </div>
      <div className="flex items-center">
        <span className="text-green mx-4 font-satoshi">@ / 2024</span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
