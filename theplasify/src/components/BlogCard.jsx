import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const BlogCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const blogData = {
    title: "Top IT Trends In 2019",
    date: "February 25th, 2019",
    author: "admin",
    category: "Uncategorized",
    shortDescription: "As entrepreneurs in the industry are aware, 2018 was a big year for innovation in tech. That trend is expected to continue in 2019. For entrepreneurs, this presents many opportunities — but also possible pitfalls. Yours may be the company that creates cutting-edge tech or is one of the earliest to implement it.",
    fullDescription: `As entrepreneurs in the industry are aware, 2018 was a big year for innovation in tech. That trend is expected to continue in 2019. For entrepreneurs, this presents many opportunities — but also possible pitfalls. Yours may be the company that creates cutting-edge tech or is one of the earliest to implement it.

    The tech industry continues to evolve rapidly, bringing new innovations and challenges. Companies need to stay ahead of these trends to remain competitive in the market. This includes understanding emerging technologies, adapting to changing consumer needs, and implementing robust security measures.

    Key areas of focus include artificial intelligence, cloud computing, cybersecurity, and digital transformation. Each of these domains presents unique opportunities for growth and innovation.`
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {!showDetails ? (
        // Blog Card View
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 bg-gray-800">
            <img 
              src="/api/placeholder/800/400"
              alt="Blog header"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">{blogData.title}</h2>
            <p className="text-gray-600 mb-4">{blogData.shortDescription}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex space-x-4">
                <span>By {blogData.author}</span>
                <span>{blogData.date}</span>
                <span>{blogData.category}</span>
              </div>
              <button 
                onClick={() => setShowDetails(true)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Detailed View
        <div className="bg-white rounded-lg shadow-lg p-6">
          <button 
            onClick={() => setShowDetails(false)}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
          <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>
          <div className="flex space-x-4 text-sm text-gray-500 mb-6">
            <span>By {blogData.author}</span>
            <span>{blogData.date}</span>
            <span>{blogData.category}</span>
          </div>
          <div className="prose max-w-none">
            {blogData.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;