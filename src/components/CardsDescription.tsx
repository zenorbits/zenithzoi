import React from 'react'

interface CardsDescriptionProps {
  question: string
  answer: string
}

const CardsDescription: React.FC<CardsDescriptionProps> = ({ question, answer }) => {
  return (
    <div
      className="h-88 border-2 rounded-tl-4xl rounded-br-4xl 
                 border-[#A2E8DD] mb-10 ml-10 
                 bg-[#1a1a1a] shadow-lg overflow-hidden"
    >
      <div className="content p-6 space-y-4">
        {/* Question */}
        <h2 className="text-xl font-bold text-[#A2E8DD]">
          Q: {question}
        </h2>

        {/* Answer */}
        <p className="text-gray-300 leading-relaxed">
          A: {answer}
        </p>
      </div>
    </div>
  )
}

export default CardsDescription
