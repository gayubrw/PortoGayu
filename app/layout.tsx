import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

// Define metadata
export const metadata: Metadata = {
  title: "PortoGayu | Welcome",
  description:
    "Professional portfolio showcasing the web development and design work of Gayu Baruwa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="min-h-screen flex flex-col selection:bg-gray-900/40 selection:text-gray-200 bg-black text-gray-300"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 10%, rgba(40, 40, 40, 0.05) 0%, transparent 20%),
            linear-gradient(to bottom, #000000, #050505)
          `,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Subtle Texture Overlay */}
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none z-50"></div>

        {/* Subtle Pattern */}
        <div className="fixed inset-0 bg-[url('/subtle-pattern.png')] bg-repeat opacity-[0.01] pointer-events-none z-50 animate-float"></div>

        {/* Dark Vignette Effect */}
        <div
          className="fixed inset-0 pointer-events-none z-40"
          style={{
            boxShadow: "inset 0 0 250px rgba(0, 0, 0, 0.8)",
            background:
              "radial-gradient(ellipse at center, transparent 60%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        ></div>

        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
