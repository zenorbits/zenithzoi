// src/components/Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-[#111] font-mono border-b-2">
      {/* Logo */}
      <h1 className="text-xl font-bold text-[#A2E8DD]">ZenithZoi</h1>

      {/* Links */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="/" className="hover:text-[#A2E8DD]">Home</a></li>
        <li><a href="/dashboard" className="hover:text-[#A2E8DD]">Dashboard</a></li>
        <li><a href="/workouts" className="hover:text-[#A2E8DD]">Workouts</a></li>
        <li><a href="/nutrition" className="hover:text-[#A2E8DD]">Nutrition</a></li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 md:mt-0">
        <button className="bg-[#A2E8DD] px-4 py-2 rounded-tl-3xl rounded-br-3xl hover:bg-[#5cb2a5] text-black font-bold">
          Login
        </button>
        <button className="bg-[#A2E8DD] px-4 py-2 rounded-tl-3xl rounded-br-3xl hover:bg-[#5cb2a5] text-black font-bold">
          Signin
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
