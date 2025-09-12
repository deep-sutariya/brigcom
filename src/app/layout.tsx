import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleTranslate from "@/components/GoogleTranslate";

export const metadata: Metadata = {
  title: "Brigcom Enterprise",
  description: "Global Trade, Swiftly Made.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-detail scroll-smooth ">
        <div className="bg-red-300">
          <GoogleTranslate />
        </div>
        <main className="relative flex flex-col min-h-screen overflow-x-hidden">
         <Navbar />
          <div className="flex-1 mt-[108px] md:mt-[140px]">{children}</div>
         <Footer />
        </main>
      </body>
    </html>
  );
}
