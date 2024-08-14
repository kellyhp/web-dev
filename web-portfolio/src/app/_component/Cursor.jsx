"use client"; // Mark this component as a client component

import { useEffect } from "react";
import useCustomCursor from "../_hooks/useCustomCursor";

export default function Cursor() {
  useCustomCursor();

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-dot-outline"></div>
    </>
  );
}
