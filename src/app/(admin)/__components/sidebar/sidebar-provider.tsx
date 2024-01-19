"use client";

import { useState } from "react";
import SidebarButton from "./sidebar-btn";
import SidebarContainer from "./sidebar-container";

export default function SidebarProvider() {
  const [toggle, setToggle] = useState(true);

  const toggleSide = () => {
    setToggle(!toggle);
  };

  return (
    <div className="z-50">
      <SidebarButton toggle={toggle} toggleSide={toggleSide} />
      <SidebarContainer toggle={toggle} />
    </div>
  );
}
