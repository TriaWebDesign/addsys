"use client";

import { AiFillCloseCircle, AiFillRightCircle } from "react-icons/ai";

export default function SidebarButton({
  toggle,
  toggleSide,
}: {
  toggle: boolean;
  toggleSide: () => void;
}) {
  return (
    <div
      className={`fixed top-[35px] md:hidden z-10 cursor-pointer ${
        toggle ? "left-[280px]" : "-left-[0]"
      } transition-all`}
      onClick={toggleSide}
    >
      {toggle ? (
        <AiFillCloseCircle
          size={40}
          className="text-white bg-black rounded-full"
        />
      ) : (
        <AiFillRightCircle
          size={40}
          className="text-white bg-black rounded-full"
        />
      )}
    </div>
  );
}
