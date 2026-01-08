import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { CartProvider } from "@/context/CartContext";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const vastago = localFont({
  src: [{ path: "../../public/fonts/VastagoGrotesk-Bold.otf", weight: "700" }],
  variable: "--font-vastago",
});

export const metadata: Metadata = {
  title: "TofHost | Spiritual Marketplace",
  description: "Buy Spiritual and Church items from Verified Vendors",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${vastago.variable}`}>
      <body className="font-sans antialiased text-tof-navy bg-white">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}