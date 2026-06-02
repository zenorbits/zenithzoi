// src/app/page.tsx
import React from "react";

const Page = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#111] font-mono text-white">
      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Logo */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#A2E8DD] mb-6">
          ZenithZoi
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-base md:text-lg leading-relaxed text-gray-300">
          <span className="block mb-4">
            ZenithZoi is your personal fitness companion — built to help you track workouts, log meals, and transform your lifestyle with clarity.
          </span>
          <span className="block mb-4">
            Whether you’re lifting weights, counting macros, or simply staying consistent, ZenithZoi keeps everything organized in one place. With a sleek dashboard, exercise logs, and food tracking, you’ll see your progress unfold day by day.
          </span>
          <span className="block">
            Stay motivated, stay accountable, and let ZenithZoi guide you toward your peak performance.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-10">
          <button className="bg-[#A2E8DD] text-black font-bold px-6 py-3 rounded-tl-3xl rounded-br-3xl hover:bg-[#5cb2a5] transition">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-[#A2E8DD] text-[#A2E8DD] font-bold px-6 py-3 rounded-tl-3xl rounded-br-3xl hover:bg-[#5cb2a5] hover:text-black transition">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;
