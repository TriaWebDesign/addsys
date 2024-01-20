import Link from "next/link";

export default function AdmissionPage() {
  return (
    <div className="w-full h-screen p-10">
      <h1 className="text-3xl font-semibold mb-4">Admission</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, sit.
        Consectetur impedit, sunt itaque ipsum veritatis id repellat, dolorem
        error eum alias dolore minima vel consequatur ex reprehenderit quia
        necessitatibus?
      </p>
      <div className="mt-10">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
          <Link href="/form">Apply Now!</Link>
        </button>
      </div>
    </div>
  );
}
