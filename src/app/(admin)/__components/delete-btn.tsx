"use client";

import { deleteAdmission } from "@/utils/actions/admission.action";

export default function DeleteButton({ id }: { id: string }) {
  return <button onClick={() => deleteAdmission(id)}>Delete</button>;
}
