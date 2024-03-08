import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white min-h-[50px] z-50 fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-4 border-b border-black">
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
        <span className="text-green mx-4">@ / 2024</span>
      </div>
    </nav>
  );
};

export default Navbar;
