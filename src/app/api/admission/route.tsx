import prisma from "@/app/(admin)/__utils/connect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      firstname,
      lastname,
      age,
      learningDisorder,
      email,
      phone,
      address,
      documentImage, // Assuming you handle the file input properly in your frontend
    } = await req.json();

    // Validation: Check if required fields are present
    if (!firstname || !lastname || !age || !learningDisorder || !email) {
      return NextResponse.json({ error: "Missing Fields", status: 400 });
    }

    // Save data to the database
    const admission = await prisma.admission.create({
      data: {
        firstname,
        lastname,
        age,
        learningDisorder,
        email,
        phone,
        address,
        admissionStatus: "Pending",
        flag: false,
        documentImage: Buffer.from(documentImage, "base64"), // Convert base64 image to buffer
      },
    });

    return NextResponse.json(admission);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
