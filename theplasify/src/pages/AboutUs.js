
import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import SustainabilityPillars from "../components/SustainPiller";

const AboutUs = () => {
  const [features, setFeatures] = useState([]);
  const API_URL = "http://localhost:5000/api/about-us/getAll";
  const BASE_URL = "http://localhost:5000/";

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get(API_URL);
        setFeatures(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFeatures();
  }, []);



  const getImageUrl = (iconPath) => {
    if (!iconPath) return "";
  
    // Remove "uploads\\" and replace all backslashes with forward slashes
    const cleanPath = iconPath.replace("uploads\\", "").replace(/\\/g, "/");
  
    // Ensure there's no double slash in the final URL
    const finalUrl = `${BASE_URL.replace(/\/$/, '')}/uploads/${cleanPath}`;
  
    // Log for debugging
    console.log("Original path:", iconPath);
    console.log("Final URL:", finalUrl);
  
    return finalUrl;
  };
  
  return (
   <div className="bg-[#f1f1f1] px-0 lg:px-20"> 
    

    <Banner />
      <div className="container mx-auto  py-8">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature._id}
                  className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 h-16 flex items-center justify-center">
                    <img
                      src={getImageUrl(feature.icon)}
                      alt={feature.title}
                      className="max-h-24 w-24 object-contain"
                      onError={(e) => {
                        console.error("Image failed to load:", e.target.src);
                        // Log the attempted URL when image fails to load
                        console.log("Failed URL:", e.target.src);
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> 
      </div>
      {/* <section className="bg-[#00BFB3] text-white text-center w-[100%] mx-auto py-16">
        <p className="text-3xl font-normal max-w-4xl mx-auto leading-relaxed">
          Theplacify demonstrates its commitment to quality and cost, not just by{' '}
          <span className="font-bold italic">"words"</span>, but by actions and results.
        </p>
      </section> */}
      <SustainabilityPillars/>



   </div>
  );
};

export default AboutUs;
