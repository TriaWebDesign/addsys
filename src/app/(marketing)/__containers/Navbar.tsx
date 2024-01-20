"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGlobe, FaSchool } from "react-icons/fa";

const links = [
  { tag: "Home", href: "/" },
  { tag: "About", href: "/about" },
  { tag: "Accomodations", href: "/accomodations" },
  { tag: "Admission", href: "/admission" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-5 flex items-center justify-between">
      <div className="flex items-center gap-[3rem]">
        <div className="flex items-center gap-2">
          <FaSchool size={20} />
          <h1 className="font-semibold">School</h1>
        </div>
        <div className="flex items-center gap-4">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`transition-colors ${
                pathName === link.href
                  ? "text-zinc-600"
                  : "hover:text-zinc-500 text-zinc-400"
              }`}
            >
              {link.tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
          <Link href="/form">Apply Now!</Link>
        </button>
        <FaGlobe size={20} className="text-zinc-400" />
      </div>
    </nav>
  );
}
