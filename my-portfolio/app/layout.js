import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashelle Dsouza | Interactive Portfolio",
  description: "Personal portfolio of Ashelle Jeema Dsouza - MCA student, Web Developer & Graphic Designer at Christ University.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#08080c] text-gray-200" suppressHydrationWarning>
        <Navbar />
        {/* Glow Effects in the background */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute -top-[40%] left-[20%] h-[600px] w-[600px] rounded-full bg-rose-950/15 blur-[150px]" />
          <div className="absolute top-[60%] -right-[10%] h-[500px] w-[500px] rounded-full bg-rose-950/10 blur-[130px]" />
        </div>
        
        {/* Main Content Area */}
        <main className="relative z-10 flex flex-1 flex-col">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
