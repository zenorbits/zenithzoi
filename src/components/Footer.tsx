// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-[#A2E8DD] font-mono border-t-2 px-8 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Logo/Name */}
        <h1 className="text-lg font-bold">ZenithZoi</h1>

        {/* Center: Links */}
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li><a href="/about" className="hover:text-[#5cb2a5]">About</a></li>
          <li><a href="/contact" className="hover:text-[#5cb2a5]">Contact</a></li>
          <li><a href="/privacy" className="hover:text-[#5cb2a5]">Privacy</a></li>
        </ul>

        {/* Right side: Socials */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" className="hover:text-[#5cb2a5]">Twitter</a>
          <a href="https://instagram.com" target="_blank" className="hover:text-[#5cb2a5]">Instagram</a>
          <a href="https://github.com" target="_blank" className="hover:text-[#5cb2a5]">GitHub</a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm mt-6 text-gray-400">
        © {new Date().getFullYear()} ZenithZoi. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
