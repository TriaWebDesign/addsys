"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

import { FaChartPie, FaPager } from "react-icons/fa";

const links = [
  { tag: "Dashboard", href: "/dashboard", icon: <FaChartPie size={20} /> },
  { tag: "Admissions", href: "/admissions", icon: <FaPager size={20} /> },
];

export default function SidebarContainer({ toggle }: { toggle: boolean }) {
  const user = useUser();
  return (
    <div
      className={`text-white fixed h-full bg-black w-[300px] md:relative md:left-0 flex flex-col justify-between p-5 ${
        toggle ? "left-0" : "-left-[300px]"
      } transition-all`}
    >
      <div>
        <div className=" p-5">
          <h1 className="text-2xl font-bold">Hello World</h1>
          <p>Welcome Back {user.user?.username}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {links.map((link, i) => (
          <div
            key={i}
            className="flex items-center p-2 hover:bg-slate-200 hover:text-black transition-colors px-5 gap-4 rounded-lg"
          >
            {link.icon}
            <Link href={link.href} className="text-lg">
              {link.tag}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center p-5">
        <UserButton afterSignOutUrl="/login" />
        <h1>Account</h1>
      </div>
    </div>
  );
}
