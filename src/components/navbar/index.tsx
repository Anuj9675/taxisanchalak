'use client'
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-[#084200] text-white shadow-md">
      {/* Logo */}
      <div className="flex-1 flex justify-start">
        <Link href="/">
          <p className="text-xl md:text-3xl">Taxi Sanchalak</p>
        </Link>
      </div>

      {/* Links for Desktop */}
      <div className="hidden lg:flex flex-1 justify-center space-x-12 text-xl">
        <Link href="/" >
          Home
        </Link>
        <Link href="/learn-how-to-use" >
          Learn How To Use
        </Link>
        <Link href="">
          Policy
        </Link>
        
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="flex-1 flex justify-end lg:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 w-full bg-[#084200] text-white shadow-lg transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } lg:hidden`}
        style={{
          top: "100%", // Position it directly below the navbar
          willChange: "transform, opacity",
          zIndex: 50, // Ensure it stays above other elements
        }}
      >
        <div className="flex flex-col items-start p-4 space-y-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            
          >
            Home
          </Link>
          <Link
            href="/learn-how-to-use"
            onClick={() => setIsMenuOpen(false)}
          
          >
            Learn How To Use
          </Link>
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            
          >
            Policy
          </Link>
          
        </div>
      </div>
    </nav>
  );
};
