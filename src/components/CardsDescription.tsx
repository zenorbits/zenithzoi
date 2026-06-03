import React from 'react'

const CardsDescription = () => {
  return (
    <div
      className="h-88 border-2 rounded-tl-4xl rounded-br-4xl 
                 border-[#A2E8DD] mb-10 ml-10 
                 bg-[#1a1a1a] shadow-lg overflow-hidden"
    >
      <div className="content p-6 space-y-4">
        {/* Question */}
        <h2 className="text-xl font-bold text-[#A2E8DD]">
          Q: What is ZenithZoi?
        </h2>

        {/* Answer */}
        <p className="text-gray-300 leading-relaxed">
          A: ZenithZoi is your personal fitness companion — designed to help you
          track workouts, log meals, and transform your lifestyle with clarity.
        </p>

        {/* Another Q&A */}
        <h2 className="text-xl font-bold text-[#A2E8DD]">
          Q: How does it keep me motivated?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          A: By organizing your progress in one place with a sleek dashboard,
          exercise logs, and food tracking, so you can see your journey unfold
          day by day.
        </p>
      </div>
    </div>
  )
}

export default CardsDescription
