// src/app/page.tsx
import React from "react";
import Cards from "../components/Cards";
import CardsDescription from "../components/CardsDescription";

const Page = () => {

  const qaItems = [
    {
      question: "What is ZenithZoi?",
      answer: "ZenithZoi is your personal fitness companion — designed to help you track workouts, log meals, and transform your lifestyle with clarity. It's more than just a tracker; it's a lifestyle tool that helps you stay consistent, visualize progress, and build healthy habits over time.",
      image: "/images/zenithzoi-overview.jpg"
    },
    {
      question: "How does it keep me motivated?",
      answer: "ZenithZoi keeps you motivated by showing your progress in real time. With a sleek dashboard, workout logs, and nutrition tracking, you'll see how your daily efforts add up. It also provides reminders, insights, and milestones to keep you accountable and inspired to push further.",
      image: "/images/zenithzoi-motivation.jpg"
    },
    {
      question: "Why should I use ZenithZoi?",
      answer: "Using ZenithZoi means having clarity and control over your fitness journey. It helps you stay consistent, accountable, and motivated while giving you a clear picture of your strengths and areas to improve. Whether you're a beginner or an athlete, it adapts to your needs.",
      image: "/images/zenithzoi-benefits.jpg"
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#111] font-mono text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        <div className="font-bold text-[#A2E8DD] mb-6 flex flex-col items-center">
          <span className="text-sm mb-8">You intelligent fitness patner</span>
          <span className="text-[clamp(3.2rem,11vw,8.5rem)] leading-none">Zenith</span>
          <span
            className="text-[clamp(3.2rem,11vw,8.5rem)] leading-none text-transparent"
            style={{ WebkitTextStroke: "2px #A2E8DD" }}
          >
            Zoi
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full max-w-xs sm:max-w-none sm:w-auto">
          <button className="bg-[#A2E8DD] text-black font-bold px-6 py-3 rounded-tl-3xl rounded-br-3xl hover:bg-[#5cb2a5] transition">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-[#A2E8DD] text-[#A2E8DD] font-bold px-6 py-3 rounded-tl-3xl rounded-br-3xl hover:bg-[#5cb2a5] hover:text-black transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-16 flex flex-col space-y-10">
        {qaItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-stretch gap-6"
          >
            {/* Card image — full width on mobile, fixed width on sm+ */}
            <div className="w-full sm:w-48 md:w-56 shrink-0">
              <Cards image={item.image} />
            </div>

            {/* Description */}
            <div className="flex-1 min-w-0">
              <CardsDescription
                question={item.question}
                answer={item.answer}
              />
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Page;