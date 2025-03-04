import React from "react";

const cards = [
  {
    id: 1,
    icon: "\u2699", // Gear icon
    image: "https://www.reed.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7qqwgjna58ct%2F3y2kNNKeAeIiHUQBqDBhVq%2F6256d70f3b2cb6ee5ee8765b0254cf5c%2FReed_-_Salary_Guide_-_Landing_Page_-_800x800_-_Accountancy_and_finance.jpg&w=1920&q=75", // Replace with actual image path
    category: "TOOL • BENEFITS",
    title: "Your essential professional guides to UK salaries and benefits in 2025",
    description: "Discover the latest salary trends in the UK for 2025 with our comprehensive guides. Reed’s salary and benchmarking guides provide essential wage data and insights.",
  },
  {
    id: 2,
    icon: "\u23F3", // Clock icon
    image: "https://www.reed.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7qqwgjna58ct%2F6bqWjXo7pGa5o3Uby97GsM%2Fefb8e7832ab00595af6ffa69431a9768%2FMagnetising_talent_in_2025_webinar_square_image.jpg&w=1920&q=75", // Replace with actual image path
    category: "WEBINAR • BENEFITS",
    title: "Magnetising talent in 2025: turning challenges into opportunities",
    description: "Join Reed and our expert panel as we dive into game-changing insights to help professionals and leaders navigate the seismic shifts in the UK labour market.",
  },
  {
    id: 3,
    icon: "\u2699", // Gear icon
    image: "https://www.reed.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7qqwgjna58ct%2F1YH1RnflE9NC6PTo8nF6pj%2Fa6ac3cdc5d43ab6ea06c1de9db2cce96%2FMicrosoftTeams-image__26_.webp&w=1920&q=75", // Replace with actual image path
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
