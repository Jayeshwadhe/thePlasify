






































































import React, { useState, useEffect } from "react";
import axios from "axios";
import JobListing from "../components/career/JobListing";
// import { response } from "express";
import CareerImg2 from "../assest/career1.jpg";
import CareerImg1 from "../assest/career2.jpg";
import CareerImg3 from "../assest/career3.jpg";
import CareerImg4 from "../assest/career4.jpg";
import SustainabilityPillars from "../components/SustainPiller";

function Career() {
  const [careerData, setCareerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("position");
  const API_URL = "https://api.theplacify.com/api/careers/getAll";

  useEffect(() => {
    const fetchCareerData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setCareerData(response.data[0]); // Assuming the first object is relevant
        setLoading(false);
      } catch (error) {
        console.error("Error fetching career data:", error);
        setLoading(false);
      }
    };

    fetchCareerData();
  }, []);

  // Static Data for *Position for our people* section
  const content = {
    position: {
      title: "Specifically, we position our people for",
      image: CareerImg4,
      list: [
        "Management and leadership skills",
        "Business development techniques and best practices",
        "Relationship building",
        "How to develop and mentor others",
        "Negotiation skills",
        "How to succeed long term in the lucrative sales field",
      ],
    },
    benefits: {
      title: "Theplacify Offers Great Benefits",
      image: CareerImg3,
      list: [
        "Competitive Base Salary with Bonuses and Commission opportunities",
        "Health and Dental Insurance",
        "Long and Short-Term Disability",
        "Vacation and Holiday Pay",
        "Training and Advancement opportunities",
        "Referral Program",
        "Team Building Events",
      ],
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-[#00BFB3] border-b-[#00BFB3] border-r-transparent border-l-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading career data...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 px-0 lg:px-20">
        {/* Header Section */}
        <div
          className="relative w-[100%] mx-auto h-72 bg-cover bg-center"
          style={{
            backgroundImage: `url(${CareerImg2})`,
          }}
        >
          <div className="absolute top-1/2 left-0 w-full h-32 bg-black/60 transform -translate-y-1/2 flex items-center justify-start pl-11">
            <h1 className="text-white text-5xl font-bold">
              Career
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto py-10">
          {careerData.sections.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10"
            >
              {/* Left Image */}
              <div className="h-[90%] w-[90%]">
                <img
                  src={CareerImg1}
                  alt={section.title}
                  className="rounded-sm shadow-lg ml-8"
                />
              </div>

              {/* Right Text */}
              <div>
                <h2 className="text-2xl mt-4 font-bold text-gray-800">
                  Theplacify
                </h2>
                <p className="text-[#00BFB3] text-2xl font-normal mt-4">{"Theplacify Provides Opportunity"}</p>
                <p className="text-gray-700 mt-4">
                  {"Theplacify provides a unique experience for consultants and contractors alike. Apart from care and feeding, we maintain the standard of our internal and field staff and provide opportunities that are unmatched by most IT Staffing and Services companies. Theplacify successfully delivers a wide array of solutions to our client base and our team members are able to gain experience and training not typically acquired from other firms. At Theplacify, we are committed to train and teach you the skills necessary to prepare you for your next role."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Position for our people */}
      <div className="w-[100%] mx-auto my-16 bg-gray-100 rounded-sm px-0 lg:px-16">
        {/* Buttons */}
        <div className="h-[3px] bg-[#00BFB3] w-full"></div>
        <div className="flex">
          <button
            className={`flex-1 py-2 text-lg font-normal ${
              selectedTab === "position"
                ? "bg-gray-100 text-gray-800"
                : "bg-[#00BFB3] text-white"
            }`}
            onClick={() => setSelectedTab("position")}
          >
            Specifically, we position our people for
          </button>
          <button
            className={`flex-1 py-2 text-lg font-normal ${
              selectedTab === "benefits"
                ? "bg-gray-100 text-gray-800"
                : "bg-[#00BFB3] text-white"
            }`}
            onClick={() => setSelectedTab("benefits")}
          >
            Theplacify Great Benefits
          </button>
        </div>

        {/* Content Section */}
        {/* <div className="bg-gray-100 mt-1 p-8 flex flex-col md:flex-row items-start shadow-sm">
          <div className="w-full md:w-1/2">
            <img
              // src={`https://api.theplacify.com/${careerData.headerImage.replace("\\", "/")}`}
              src={content[selectedTab].image}
              alt="Content"
              className="w-full rounded-sm shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 pl-6">
            <ul className="list-disc list-inside text-gray-700">
              {content[selectedTab].list.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        </div> */}
        <div className="bg-gray-100 mt-1 p-8 flex flex-col md:flex-row items-start shadow-sm">
  <div className="w-full md:w-1/2">
    <img
      src={content[selectedTab].image}
      alt="Content"
      className="w-full h-auto max-h-[300px] object-cover rounded-sm shadow-lg"
    />
  </div>
  <div className="w-full md:w-1/2 pl-6">
    <ul className="list-disc list-inside text-gray-700">
      {content[selectedTab].list.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </div>
</div>
      </div>

      {/* Jobs Section */}
      <div className="bg-gray-100 pt-10 pb-0 mb-0 px-0 lg:px-20">
        <div className="max-w-6xl pl-5 mb-8 mx-auto px-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Current Job Openings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <JobListing />
          </div>
        </div>
        {/* Commitment Section */}
       
        <SustainabilityPillars/>
      </div>
    </>
  );
}

export default Career;