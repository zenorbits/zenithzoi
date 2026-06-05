"use client";
import React, { useState } from "react";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#111] font-mono border-b-2">
      {/* Logo */}
      <h1 className="text-xl font-bold text-[#A2E8DD]">ZenithZoi</h1>

      {/* Links */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="/" className="hover:text-[#A2E8DD]">Home</a></li>
        <li><a href="/dashboard" className="hover:text-[#A2E8DD]">Dashboard</a></li>
        <li><a href="/workouts" className="hover:text-[#A2E8DD]">Workouts</a></li>
        <li><a href="/nutrition" className="hover:text-[#A2E8DD]">Nutrition</a></li>
      </ul>

      {/* Right side buttons */}
      <div className="gap-3 mt-4 md:mt-0 hidden md:flex">
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <button className="bg-[#A2E8DD] px-4 py-2 rounded-tl-3xl rounded-br-3xl hover:bg-[#5cb2a5] text-black font-bold">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <button className="bg-[#A2E8DD] px-4 py-2 rounded-tl-3xl rounded-br-3xl hover:bg-[#5cb2a5] text-black font-bold">
                Register
              </button>
            </SignUpButton>
          </>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex hamburger">
        <button
          className="md:hidden text-[#A2E8DD]"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {open && (
          <div className="absolute z-10 top-16 left-0 w-full bg-[#111] flex flex-col items-center gap-4 py-6 md:hidden border-t-2 border-b-2">
            <a href="/" className="hover:text-[#A2E8DD]">Home</a>
            <a href="/dashboard" className="hover:text-[#A2E8DD]">Dashboard</a>
            <a href="/workouts" className="hover:text-[#A2E8DD]">Workouts</a>
            <a href="/nutrition" className="hover:text-[#A2E8DD]">Nutrition</a>

            {!isSignedIn ? (
              <>
                <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                  <button className="bg-[#A2E8DD] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-black font-bold">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
                  <button className="bg-[#A2E8DD] px-4 py-2 rounded-tl-3xl rounded-br-3xl text-black font-bold">
                    Register
                  </button>
                </SignUpButton>
              </>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;