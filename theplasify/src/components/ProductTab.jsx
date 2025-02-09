import React, { useState } from 'react';

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState('define');

  const tabs = [
    {
      id: 'define',
      title: 'Define the task',
      content: 'We first seek to understand your requirements and then advise you and provide costs on the best solution possible for website design, ecommerce development, search engine optimization or internet advertising.',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'create',
      title: 'Create the solution',
      content: 'Our team works diligently to create customized solutions that perfectly match your requirements, ensuring optimal performance and user experience.',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'support',
      title: 'Support the client',
      content: 'We provide ongoing support and maintenance to ensure your solution continues to perform at its best, with regular updates and improvements.',
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Tab Headers */}
      <div className="flex flex-col sm:flex-row w-full mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-teal-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`transition-opacity duration-300 ${
            activeTab === tab.id ? 'block' : 'hidden'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src={tab.image}
                alt={tab.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-700 text-lg leading-relaxed">
                {tab.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTab;