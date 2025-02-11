import React from 'react';
import BannerImg from "../assest/ApplicationServices.jpg";

const ApplicationServicesBanner = () => {
  return (
    <div className="relative w-full h-72 overflow-hidden bg-white">
      {/* Background image */}
      <img 
        src={BannerImg}
        alt="Business meeting with people working on laptops"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/60" /> */}
      <div className="absolute top-1/2 left-0 w-full h-32 bg-black/60 transform -translate-y-1/2"></div>
      
      {/* Content container */}
      <div className="relative h-full flex items-center justify-start px-8 md:px-16 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Application Services
        </h1> 
      </div>
      
      {/* Decorative bottom border */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" /> */}
    </div>
  );
};

export default ApplicationServicesBanner;