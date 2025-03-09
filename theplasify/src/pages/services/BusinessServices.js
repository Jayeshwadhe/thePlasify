





import React from "react";
import FullTimeImg from "../../assest/fulltime.jpg";
import SustainabilityPillars from "../../components/SustainPiller";
import FullTimeImg1 from '../../assest/full1.jpg';

const FullTimeJobs = () => {
  // Static data object for Full-Time Jobs
  const staticData = {
    header: {
      title: "Full-Time Jobs",
      image: FullTimeImg,
    },
    content: {
      title: "ThePlacify - Secure Your Future with Full-Time Opportunities",
      image:
       FullTimeImg1, // Replace with actual image URL
      description: `At ThePlacify, we specialize in connecting talented individuals with rewarding full-time job opportunities. Whether you're starting your career, looking for a job change, or seeking stability in your professional journey, we provide tailored job listings to match your skills and goals.

Our full-time jobs span various industries, including IT, healthcare, finance, marketing, and more. We ensure that you get the best opportunities with long-term benefits, job security, and career growth prospects.`,
    },
    features: [
      "Competitive salary and benefits",
      "Long-term job security and stability",
      "Opportunities across diverse industries",
      "Career growth and professional development",
      "Work with reputable and verified employers",
      "Easy application process with dedicated support",
    ],
  };

  return (
    <div className="px-0 lg:px-20 bg-[#f1f1f1]">
      <div className="bg-white shadow-md overflow-hidden">
        <div className="relative h-72 bg-gray-200">
          <img
            src={staticData.header.image}
            alt={staticData.header.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay fix */}
          <div className="absolute top-1/2 left-0 w-full h-32 bg-black/60 transform -translate-y-1/2 flex items-center justify-start pl-11">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              {staticData.header.title}
            </h1>
          </div>
        </div>
        <div className="p-6 md:flex">
          <div className="md:w-1/3">
            <img
              src={staticData.content.image}
              alt={staticData.content.title}
              className="rounded-md shadow-md mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h2 className="text-2xl font-normal text-gray-950">
              {staticData.content.title}
            </h2>
            <p className="mt-4 text-[#00BFB3]">
              <strong>ThePlacify</strong> - Secure your future with the right full-time job.
            </p>
            <p className="mt-4 text-gray-600">
              {staticData.content.description}
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              {staticData.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <SustainabilityPillars />
    </div>
  );
};

export default FullTimeJobs;
