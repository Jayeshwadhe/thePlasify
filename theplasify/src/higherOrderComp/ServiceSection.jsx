import React from 'react';

// Generic ServiceSection component that accepts content as props
const ServiceSection = ({ 
  title,
  subtitle,
  description,
  highlights,
  imageSrc,
  imageAlt = "Service Image"
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              {title}
            </h2>
            
            <p className="text-[#00BFB3] text-lg font-normal">
              {subtitle}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>

            {highlights && (
              <>
                <h3 className="text-xl font-semibold text-gray-800 pt-4">
                  Training Highlights
                </h3>
                <ul className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-600">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


export default ServiceSection;