import React from 'react'

interface CardsProps {
  image: string
}

const Cards: React.FC<CardsProps> = ({ image }) => {
  return (
    <div>
      <main
        className="h-88 border-2 rounded-tl-4xl rounded-br-4xl 
                   border-[#A2E8DD] mb-10 ml-10 
                   bg-[#1a1a1a] shadow-lg overflow-hidden"
      >
        {/* Image fills the card */}
        <img
          src={image}
          alt="Card"
          className="h-full w-full object-cover"
        />
      </main>
    </div>
  )
}

export default Cards
