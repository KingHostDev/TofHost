import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const totalOrders = await prisma.order.count();
  const totalVendors = await prisma.vendorProfile.count();
  const escrowHeld = await prisma.order.aggregate({
    _sum: { amount: true },
    where: { status: "ESCROW_SECURED" }
  });

  return NextResponse.json({
    totalVendors,
    totalOrders,
    escrowAmount: escrowHeld._sum.amount || 0
  });
}