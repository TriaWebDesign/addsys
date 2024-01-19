"use client";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Admission } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function AdmissionPage({
  params,
}: {
  params: { admission_id: string };
}) {
  const [admission, setAdmission] = useState<Admission | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchAdmission = async () => {
      try {
        const response = await axios.get(
          `/api/admissions/${params.admission_id}`
        );
        setAdmission(response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 404) {
          setNotFound(true);
        } else {
          console.error("Axios error:", axiosError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAdmission();
  }, [params.admission_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (notFound) {
    return <div>Admission not found</div>;
  }
  // @ts-ignore
  return (
    <main className="h-screen p-10 flex flex-col">
      <button className="px-3 py-1 rounded-lg bg-black text-white mb-10 w-[80px]">
        <Link href="/admissions">Back</Link>
      </button>
      <div className="flex gap-4 justify-around">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-zinc-500">Firstname</p>
            <p className="text-2xl">{admission?.firstname}</p>
          </div>
          <div>
            <p className="text-zinc-500">Lastname</p>
            <p className="text-2xl">{admission?.lastname}</p>
          </div>
          <div>
            <p className="text-zinc-500">Age</p>
            <p className="text-2xl">{admission?.age}</p>
          </div>
          <div>
            <p className="text-zinc-500">Learning Disorder</p>
            <p className="text-2xl">{admission?.learningDisorder}</p>
          </div>
          <div>
            <p className="text-zinc-500">Address</p>
            <p className="text-2xl">{admission?.address}</p>
          </div>
          <div>
            <p className="text-zinc-500">Phone</p>
            <p className="text-2xl">{admission?.phone}</p>
          </div>
          <div>
            <p className="text-zinc-500">Email</p>
            <p className="text-2xl">{admission?.email}</p>
          </div>
        </div>
        <Image
          src={`data:image/jpeg;base64,${Buffer.from(
            admission?.documentImage?.data
          ).toString("base64")}`}
          alt="doc"
          width={400}
          height={300}
        />
      </div>
    </main>
  );
}
