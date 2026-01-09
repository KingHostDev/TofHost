"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Utility to verify vendor ownership
async function getVendorOrThrow() {
  const session = await auth();
  if (!session?.user || session.user.role !== "VENDOR") throw new Error("Unauthorized");
  
  const vendor = await prisma.vendorProfile.findUnique({
    where: { userId: session.user.id }
  });
  
  if (!vendor) throw new Error("Vendor profile not found");
  return vendor;
}

export async function createProduct(formData: FormData) {
  const vendor = await getVendorOrThrow();
  
  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const description = formData.get("description") as string;
  const categoryName = formData.get("category") as string;

  await prisma.product.create({
    data: {
      name,
      price,
      description,
      vendorId: vendor.id,
      category: {
        connectOrCreate: {
          where: { name: categoryName },
          create: { name: categoryName }
        }
      }
    }
  });

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function updateProduct(formData: FormData) {
  const vendor = await getVendorOrThrow();
  const id = formData.get("id") as string;
  
  // Ensure product belongs to this vendor before updating
  await prisma.product.update({
    where: { id, vendorId: vendor.id },
    data: {
      name: formData.get("name") as string,
      price: parseFloat(formData.get("price") as string),
      stock: parseInt(formData.get("stock") as string),
      description: formData.get("description") as string,
    }
  });

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function deleteProduct(productId: string) {
  const vendor = await getVendorOrThrow();

  await prisma.product.delete({
    where: { id: productId, vendorId: vendor.id }
  });

  revalidatePath("/dashboard/products");
}