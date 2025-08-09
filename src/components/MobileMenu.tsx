"use client";

import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <AlignLeft className="lg:hidden hoverEffect hover:text-black" />
      </button>

      <div className="lg:hidden">
        <Sidebar
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
