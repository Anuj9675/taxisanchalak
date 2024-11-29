'use client'
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex-1 flex justify-start">
        <Link href="/">
          <img
            src="https://taxisanchalak.in/wp-content/uploads/2022/03/Taxi-Sanchalak-Logo.png"
            alt="Taxi Sanchalak"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Links for Desktop */}
      <div className="hidden lg:flex flex-1 justify-center space-x-8">
        <Link href="/" className="text-gray-700">
          Home
        </Link>
        <Link href="/learn-how-to-use" className="text-gray-700">
          Learn How To Use
        </Link>
        <Link href="/vehicle-insurance" className="text-gray-700">
          Vehicle Insurance
        </Link>
        <Link href="/manage-subscription" className="text-gray-700">
          Manage Subscription
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="flex-1 flex justify-end lg:hidden">
        <button
          className="text-gray-700 focus:outline-none"
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
        className={`absolute left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out transform ${
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
            className="text-gray-700"
          >
            Home
          </Link>
          <Link
            href="/learn-how-to-use"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700"
          >
            Learn How To Use
          </Link>
          <Link
            href="/vehicle-insurance"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700"
          >
            Vehicle Insurance
          </Link>
          <Link
            href="/manage-subscription"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700"
          >
            Manage Subscription
          </Link>
        </div>
      </div>
    </nav>
  );
};
