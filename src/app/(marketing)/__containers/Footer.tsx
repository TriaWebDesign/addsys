import { FaSchool } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white p-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaSchool size={20} />
        <h1 className="font-semibold">School</h1>
      </div>
      <div className="flex gap-5">
        <button>Terms</button>
        <button>Privacy</button>
      </div>
    </footer>
  );
}
