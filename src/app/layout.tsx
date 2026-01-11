import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const vastago = localFont({ src: "../../public/fonts/VastagoGrotesk-Bold.otf", variable: "--font-heading", display: "swap" });

export const metadata: Metadata = { title: "TofHost Marketplace", description: "Secure hosting" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${vastago.variable} antialiased font-manrope bg-white`} suppressHydrationWarning>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <main className="flex-grow">
              {children} {/* This is where your page.tsx content goes */}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}