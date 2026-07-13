import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "LUXORA ESTATES | Elite Luxury Real Estate",
  description: "Discover ultra-premium villas, penthouses, and high-ROI luxury investments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${poppins.variable} font-sans bg-luxury-black text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
