"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const categoryId = formData.get("categoryId") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;

  const profile = await prisma.vendorProfile.findUnique({
    where: { userId: session.user.id }
  });

  if (!profile) throw new Error("Vendor profile not found.");

  await prisma.product.create({
    data: {
      name,
      price,
      description,
      categoryId,
      vendorId: profile.id,
      image: imageUrl || null,
      isPublished: true,
    },
  });

  revalidatePath("/shop");
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function updateProduct(productId: string, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const categoryId = formData.get("categoryId") as string;
  const description = formData.get("description") as string;

  await prisma.product.update({
    where: { 
      id: productId,
      vendor: { userId: session.user.id } 
    },
    data: { name, price, description, categoryId },
  });

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function deleteProduct(productId: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  await prisma.product.delete({
    where: { 
      id: productId,
      vendor: { userId: session.user.id }
    }
  });

  revalidatePath("/dashboard/products");
}

export async function registerAsVendor(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const storeName = formData.get("storeName") as string;

  await prisma.$transaction([
    prisma.vendorProfile.create({
      data: { userId: session.user.id, storeName }
    }),
    prisma.user.update({
      where: { id: session.user.id },
      data: { role: "VENDOR" }
    })
  ]);

  revalidatePath("/dashboard");
  redirect("/dashboard/products");
}