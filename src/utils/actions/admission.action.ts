"use server";
import { Admission } from "@prisma/client";
import prisma from "../connect";
import { revalidatePath } from "next/cache";

export async function submitAdmission(formData: FormData) {
  try {
    const new_admission = await prisma.admission.create({
      data: {
        firstname: formData.get("firstname") as string,
        lastname: formData.get("lastname") as string,
        age: parseInt(formData.get("age") as string),
        learningDisorder: formData.get("learningDisorder") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        address: formData.get("address") as string,
        admissionStatus: "Pending",
        flag: false,
        documentImage: Buffer.from("123123", "base64"),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAdmissions(): Promise<Admission[]> {
  try {
    const admissions = await prisma.admission.findMany();
    return admissions;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function findAdmission(id: string): Promise<Admission | null> {
  try {
    const admission = await prisma.admission.findFirst({
      where: {
        id,
      },
    });
    return admission;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteAdmission(id: string) {
  try {
    await prisma.admission.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admissions");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
