"use server";
import { Admission } from "@prisma/client";
import prisma from "../connect";
import { revalidatePath } from "next/cache";
import { analyze } from "../ai";
import { uid } from "uid";
import { writeFile } from "fs/promises";

export async function submitAdmission(formData: any) {
  const path = require("path");
  const currentWorkingDirectory = process.cwd();

  try {
    const image = Buffer.from(formData.documentImage, "base64");
    const flag = await analyze(image);
    const filename = uid() + ".jpg";

    const docPhotoPath = path.join(
      currentWorkingDirectory,
      "public",
      "uploads",
      filename
    );

    await prisma.admission.create({
      data: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        age: parseInt(formData.age),
        learningDisorder: formData.learningDisorder,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        admissionStatus: "Pending",
        flag: flag.flag,
        documentImage: `/uploads/${filename}`,
      },
    });
    await writeFile(docPhotoPath, image);

    revalidatePath("/admissions");
    revalidatePath("/dashboard");
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
