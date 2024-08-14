"use client";
import "./globals.css";
// import React, { useState, useEffect } from 'react';
import React from 'react';
import Navbar from './_component/Navbar';
import Cursor from './_component/Cursor';
//import LoadingPage from './_component/LoadingPage';

export default function RootLayout({ children }) {
  // const [loading, setLoading] = useState(true);
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   let interval; // Declare interval here

  //   if (loading) {
  //     interval = setInterval(() => {
  //       setProgress((prev) => {
  //         if (prev >= 1) {
  //           clearInterval(interval); // Clear interval here
  //           setLoading(false);
  //           return 1;
  //         }
  //         return prev + 0.1;
  //       });
  //     }, 100); // Adjust the interval and increment for smooth progress
  //   }

  //   // Clean up function to clear the interval when component unmounts
  //   return () => clearInterval(interval);
  // }, [loading]);

  return (
    <html lang="en">
      <head>
        <title>Kelly Phan's Portfolio</title>
        <meta name="description" content="My Software and UI/UX development portfolio" />
      </head>
      <body className="relative">
        <Cursor />
        <Navbar />
        <div className="dark:bg-white bg-gray-200 dark:bg-grid-gray-200 bg-grid-white/[0.2] relative flex items-center justify-center align-middle z-0 scroll-smooth">
          {/* {loading ? <LoadingPage progress={progress} /> : children} */}
          {children}
        </div>
      </body>
    </html>
  );
}

