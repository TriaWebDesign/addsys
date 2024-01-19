import Link from "next/link";

const links = [
  { tag: "Home", href: "/" },
  { tag: "About", href: "/about" },
  { tag: "Accomodations", href: "/accomodations" },
  { tag: "Admission", href: "/form" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-5 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <h1 className="font-medium">Logo</h1>
        <div className="flex items-center gap-4">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-zinc-400 hover:text-zinc-500 transition-colors"
            >
              {link.tag}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button className="px-4 py-1 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </nav>
  );
}
