import React from 'react'

const Cards = () => {
  return (
    <div>
      <main
        className="h-88  border-2 rounded-tl-4xl rounded-br-4xl 
                   border-[#A2E8DD] mb-10 ml-10 
                   bg-[#1a1a1a] shadow-lg overflow-hidden"
      >
        {/* Placeholder for image */}
        <div className="h-full w-full bg-gray-800 flex items-center justify-center">
          <span className="text-gray-500">Image goes here</span>
        </div>
      </main>
    </div>
  )
}

export default Cards
