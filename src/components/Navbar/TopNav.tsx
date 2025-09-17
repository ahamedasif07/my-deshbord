"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Grid, ShoppingBag, Maximize2, Moon, Bell } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-6">
      <nav
        className={`w-full px-4 py-2 flex items-center justify-between fixed top-0 z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"}`}
      >
        {/* Left Section */}
        <div className="flex items-center space-x-3">
          {/* Hamburger Menu */}
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 absolute left-3 top-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
              />
            </svg>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          {/* Language */}
          <span className="text-xl">🇺🇸</span>

          <div className="flex items-center gap-4">
            {/* Icons */}
            <div className="p-2 rounded-full hover:bg-gray-200 transition">
              <Grid className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>

            <div className="relative p-2 rounded-full hover:bg-gray-200 transition">
              <ShoppingBag className="w-6 h-6 text-gray-600 cursor-pointer" />
              <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                5
              </span>
            </div>

            <div className="p-2 rounded-full hover:bg-gray-200 transition">
              <Maximize2 className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>

            <div className="p-2 rounded-full hover:bg-gray-200 transition">
              <Moon className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>

            <div className="relative p-2 rounded-full hover:bg-gray-200 transition">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                3
              </span>
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-lg">
            <Image
              src="/logo.png" // Replace with your image
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="font-semibold">Anna Adame</p>
              <p className="text-gray-500 text-xs">Founder</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
