import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function PATCH(req: Request) {
  const session = await auth();

  // Security: Only Admins can verify vendors
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { vendorId, status } = await req.json();

    const updatedVendor = await prisma.vendorProfile.update({
      where: { id: vendorId },
      data: { isVerified: status },
    });

    return NextResponse.json(updatedVendor);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}