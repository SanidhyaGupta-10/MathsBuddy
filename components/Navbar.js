"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../app/images/logo.png";



const Navbar = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[10vh] bg-[#FCFCFC] text-black flex items-center shadow-xl px-4">
      {/* Left Area */}
      <div className="flex items-center gap-6">
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={80} className="md:w-[100px]" priority />
        </Link>
      </div>

      {/* Center + Right Nav (Desktop) */}
      <div className="hidden md:flex justify-between w-full">
        {/* Links */}
        <ul className="flex gap-6 ml-6">
          <li className="text-[17px] hover:text-blue-700 hover:text-[18px] transition-all duration-75">
            <Link href="/reference">Reference</Link>
          </li>
          <li className="text-[17px] hover:text-blue-700 hover:text-[18px] transition-all duration-75">
            <Link href="/practice">Practice</Link>
          </li>
          <li className="text-[17px] hover:text-blue-700 hover:text-[18px] transition-all duration-75">
            <Link href="/">Try Now</Link>
          </li>
          <li className="text-[17px] hover:text-blue-700 hover:text-[18px] transition-all duration-75">
            <Link href="/comparison">ComparisonBar</Link>
          </li>
        </ul>

        {/* User Section */}
        <ul className="flex items-center gap-5 mr-8">
          {!session ? (
            <>
              <li className="text-[17px] text-blue-600">
                <Link href="/login">Login</Link>
              </li>
             
            </>
          ) : (
            <>
              <li className="text-[17px] text-blue-600">
                Welcome, {session?.user?.email.split("@")[0]}
              </li>
              <li>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}

           <li>
                <Link
                  href="/pricing"
                  className="bg-[#FCFCFC] text-blue-600 hover:bg-blue-600 hover:text-white shadow-xl px-4 py-2 border rounded-xl transition"
                >
                  Premium
                </Link>
              </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white shadow-md md:hidden py-4 px-6 z-50">
          <ul className="flex flex-col gap-4 text-[18px]">
            <Link href="/reference" onClick={() => setMenuOpen(false)}>
              Reference
            </Link>
            <Link href="/practice" onClick={() => setMenuOpen(false)}>
              Practice
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Try Now
            </Link>
            <Link href="/pricing" onClick={() => setMenuOpen(false)}>
                  Premium
                </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
