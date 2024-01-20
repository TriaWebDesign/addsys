import { findAdmission } from "@/utils/actions/admission.action";
import { Admission } from "@prisma/client";
import Link from "next/link";

export default async function AdmissionPage({
  params,
}: {
  params: { admission_id: string };
}) {
  const admission: Admission | null = await findAdmission(params.admission_id);
  if (!admission) {
    return (
      <>
        <h1>Admission not Found</h1>
      </>
    );
  }
  return (
    <main className="h-screen p-10 flex flex-col">
      <button className="px-3 py-1 rounded-lg bg-black text-white mb-10 w-[80px]">
        <Link href="/admissions">Back</Link>
      </button>
      <div className="flex gap-4 justify-around">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-zinc-500">Firstname</p>
            <p className="text-2xl">{admission.firstname}</p>
          </div>
          <div>
            <p className="text-zinc-500">Lastname</p>
            <p className="text-2xl">{admission.lastname}</p>
          </div>
          <div>
            <p className="text-zinc-500">Age</p>
            <p className="text-2xl">{admission.age}</p>
          </div>
          <div>
            <p className="text-zinc-500">Learning Disorder</p>
            <p className="text-2xl">{admission.learningDisorder}</p>
          </div>
          <div>
            <p className="text-zinc-500">Address</p>
            <p className="text-2xl">{admission.address}</p>
          </div>
          <div>
            <p className="text-zinc-500">Phone</p>
            <p className="text-2xl">{admission.phone}</p>
          </div>
          <div>
            <p className="text-zinc-500">Email</p>
            <p className="text-2xl">{admission.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
