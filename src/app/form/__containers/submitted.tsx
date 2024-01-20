import Link from "next/link";

export default function Submitted() {
  return (
    <main className="h-screen bg-gradient-to-r from-green-500 to-green-700 flex justify-center items-center flex-col drop-shadow-lg">
      <h1 className="text-6xl font-semibold text-white">
        Thank you for submitting!
      </h1>
      <Link href="/" className="text-white underline mt-10">
        Back to Home
      </Link>
    </main>
  );
}
