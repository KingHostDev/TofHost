import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import SupportChat from "@/components/shared/SupportChat"; // Import the chat
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
  weight: ["200", "400", "600", "700", "800"],
});

const vastago = localFont({
  src: "../../public/fonts/VastagoGrotesk-Bold.otf", 
  variable: "--font-vastago",
  display: 'swap',
  weight: "700",
});

export const metadata: Metadata = {
  title: "TofHost | Global Spiritual Marketplace",
  description: "Secure spiritual marketplace with escrow protection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vastago.variable} ${manrope.variable}`}>
      <body className="antialiased font-manrope">
        <CartProvider>
          {children}
          {/* Add the SupportChat here */}
          <SupportChat />
        </CartProvider>
      </body>
    </html>
  );
}