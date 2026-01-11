"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const session = await auth();
  
  if (!session?.user?.id) {
    throw new Error("You must be logged in to list a product.");
  }

  // Extract values from form
  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const categoryId = formData.get("categoryId") as string;
  const description = formData.get("description") as string;

  // 1. Find or verify the vendor associated with the user
  const vendor = await prisma.vendor.findUnique({
    where: { userId: session.user.id }
  });

  if (!vendor) {
    throw new Error("Vendor profile not found.");
  }

  // 2. Create the product
  await prisma.product.create({
    data: {
      name,
      price,
      description,
      categoryId,
      vendorId: vendor.id,
      isPublished: true, // Auto-publish for now
    },
  });

  // 3. Clear the cache so the shop and inventory show the new item immediately
  revalidatePath("/shop");
  revalidatePath("/dashboard/products");

  // 4. Send them back
  redirect("/dashboard/products");
}