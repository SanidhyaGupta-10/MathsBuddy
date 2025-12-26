import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import mainBg from "./images/main_bg.jpg";
import logo from "./images/logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Setting the favicon (website logo shown in browser tab) in metadata
export const metadata = {
  title: "Learn, Solve, Master - With MathsBuddy!",
  description: "Your personal math solver",
  icons: {
    icon: [
      { rel: "icon", url: "/images/favicon.png", sizes: "64x64" }, // Larger favicon
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="64x64" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[]`}
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          position: "relative"
        }}
      >
          <Navbar/>
          <div className="relative min-h-[90vh] w-full">
            <Image
              src={mainBg}
              alt="Mathematics background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              style={{ zIndex: -1 }}
            />
            <div className="relative z-10">{children}</div>
          </div>
      </body>
    </html>
  );
}
