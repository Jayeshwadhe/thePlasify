import React, { useState } from 'react';

const ServicePageTemplate = ({ 
  tabsData,
  serviceContent,
  selectedTabIndex = 0  // Default selected tab
}) => {
  const [activeTab, setActiveTab] = useState(selectedTabIndex);

  return (
    <div className="w-full ">
      {/* Tabs Section */}
      <div className="w-full">
        {/* Primary Tabs */}
        <div className="grid grid-cols-4 text-center">
          {tabsData.primaryTabs.map((tab, index) => (
            <div
              key={index}
              className={`py-4 px-2 cursor-pointer ${
                index === activeTab 
                ? 'bg-[#00BFB3] text-white' 
                : 'bg-[#00BFB3] text-white opacity-90 hover:opacity-100'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Secondary Tabs */}
        <div className="grid grid-cols-4 text-center border-b">
          {tabsData.secondaryTabs.map((tab, index) => (
            <div
              key={index}
              className={`py-4 px-2 cursor-pointer ${
                index === activeTab 
                ? 'bg-[#00BFB3] text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Service Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={serviceContent.imageSrc}
                alt={serviceContent.imageAlt || "Service illustration"}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {serviceContent.content}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



export default ServicePageTemplate;