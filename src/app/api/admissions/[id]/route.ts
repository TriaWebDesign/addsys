import prisma from "@/app/(admin)/__utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const admission = await prisma.admission.findFirst({
      where: {
        id,
      },
    });

    return NextResponse.json(admission);
  } catch (error) {
    console.log("ERROR Fetching Admission: ", error);
    return NextResponse.json({
      error: "Error fetching admission",
      status: 500,
    });
  }
}
