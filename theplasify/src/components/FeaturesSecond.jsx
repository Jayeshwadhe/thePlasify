import React from "react";
import HomeImg1 from "../assest/home1.webp";
import { response } from "express";
import HomeImg2 from "../assest/home2.webp";
import HomeImg3 from "../assest/home3.webp";

const cards = [
  {
    id: 1,
    icon: "\u2699", // Gear icon
    image: HomeImg1, // Replace with actual image path
    category: "TOOL • BENEFITS",
    title: "Your essential professional guides to UK salaries and benefits in 2025",
    description: "Discover the latest salary trends in the UK for 2025 with our comprehensive guides. Reed’s salary and benchmarking guides provide essential wage data and insights.",
  },
  {
    id: 2,
    icon: "\u23F3", // Clock icon
    image: HomeImg2, // Replace with actual image path
    category: "WEBINAR • BENEFITS",
    title: "Magnetising talent in 2025: turning challenges into opportunities",
    description: "Join Reed and our expert panel as we dive into game-changing insights to help professionals and leaders navigate the seismic shifts in the UK labour market.",
  },
  {
    id: 3,
    icon: "\u2699", // Gear icon
    image: HomeImg3, // Replace with actual image path
    category: "TOOL • INTERVIEWING",
    title: "Interview question generator for smarter recruiting",
    description: "Make interview prep easy! Find common interview questions and learn good interview questions to ask with the Reed AI-powered interview question generator tool.",
  },
];

const CardComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white"
        >
          <div className="relative w-56 h-56 mb-4">
            {/* <div className="absolute -top-4 -right-4 bg-blue-500 text-white rounded-full p-2 text-xl">
              {card.icon}
            </div> */}
            <img
              src={card.image}
              alt="card-img"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-gray-500 uppercase text-sm font-semibold mb-2">
            {card.category}
          </p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
