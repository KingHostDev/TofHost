"use server";

import { Resend } from 'resend';
import { prisma } from "@/lib/prisma";

// Initialize Resend with your specific key
const resend = new Resend(process.env.re_burWYMv5_MaMoKpRN7yoD8SduY4t36Jrg);

export async function sendInquiry(formData: FormData) {
  const productId = formData.get("productId") as string;
  const customerEmail = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    // 1. Fetch product and vendor details
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { 
        vendor: { 
          include: { user: true } 
        } 
      }
    });

    if (!product || !product.vendor.user.email) {
      return { error: "This vendor is currently unreachable." };
    }

    // 2. Dispatch the email via Resend
    const { data, error } = await resend.emails.send({
      from: 'TofHost Marketplace <onboarding@resend.dev>',
      to: product.vendor.user.email,
      subject: `New Inquiry for ${product.name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #f0f0f0; border-radius: 20px;">
          <h2 style="color: #0A0A0A;">You have a new lead on TofHost!</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Product:</strong> ${product.name}</p>
          <p><strong>Interested Customer:</strong> ${customerEmail}</p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 10px;">
            <strong>Message:</strong><br/>
            ${message}
          </p>
          <p style="font-size: 12px; color: #999;">TofHost Beta Test Environment</p>
        </div>
      `
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: "Failed to send message. Please try again later." };
    }

    return { success: true };
  } catch (err) {
    console.error("Server Error:", err);
    return { error: "A server error occurred." };
  }
}