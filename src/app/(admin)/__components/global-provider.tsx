"use client";

import { useUser } from "@clerk/nextjs";
import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Admission } from "@prisma/client";

// Define types for your context
interface GlobalContextProps {
  admissions: Admission[];
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(
  undefined
);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [admissions, setAdmissions] = useState<Admission[]>([]);

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const res = await axios.get("/api/admissions");

        const sorted = res.data.sort((a: Admission, b: Admission) => {
          return (
            new Date(b.submittedAt).getTime() -
            new Date(a.submittedAt).getTime()
          );
        });

        setAdmissions(sorted);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdmissions();
  }, [user]);
  return (
    <GlobalContext.Provider value={{ admissions }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => useContext(GlobalContext);
