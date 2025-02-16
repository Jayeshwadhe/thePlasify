// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Career() {
//   const [careerData, setCareerData] = useState(null); // State to hold career data
//   const API_URL = "http://localhost:5000/api/careers/getAll";

//   useEffect(() => {
//     const fetchCareerData = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setCareerData(response.data[0]); // Assuming the first object is relevant
//       } catch (error) {
//         console.error("Error fetching career data:", error);
//       }
//     };

//     fetchCareerData();
//   }, []);

//   if (!careerData) {
//     return <div>Loading...</div>; // Loading state
//   }

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100">
//         {/* Header Section */}
//         <div className="relative h-64 bg-gray-900 text-white">
//           <img
//             src={`http://localhost:5000/${careerData.headerImage.replace("\\", "/")}`}
//             alt="Background"
//             className="absolute inset-0 w-full h-full object-cover opacity-40"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-4xl font-bold">{careerData.title.replace(/"/g, "")}</h1>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="max-w-6xl mx-auto px-4 py-10">
//           {careerData.sections.map((section, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10"
//             >
//               {/* Left Image */}
//               <div>
//                 <img
//                   src={`http://localhost:5000/${section.image.replace("\\", "/")}`}
//                   alt={section.title}
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>

//               {/* Right Text */}
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
//                 <p className="text-gray-700 mt-4">{section.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Jobs Section */}
//       <div className="bg-gray-100 py-10">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-lg font-semibold text-gray-800 mb-6">Current Job Openings</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {careerData.jobs.map((job, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-300 rounded-lg bg-white p-4 shadow-md hover:shadow-lg"
//               >
//                 <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
//                 <p className="text-sm text-gray-500">{job.category}</p>
//                 <p className="text-sm text-gray-500">{job.type}</p>
//                 <p className="text-sm text-gray-500">{job.location}</p>
//                 <p className="text-sm text-gray-500">{job.salary}</p>
//                 <a
//                   href="#"
//                   className="text-teal-500 mt-2 block hover:underline"
//                 >
//                   More Details →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Commitment Section */}
//       <div className="bg-[#00BFB3] text-white text-center py-8">
//         <p className="text-lg font-medium max-w-4xl mx-auto">
//           Theplacify demonstrates its commitment to quality and cost, not
//           just by <span className="font-bold italic">“words”</span>, but by
//           actions and results.
//         </p>
//       </div>
//     </>
//   );
// }

// export default Career;





























































































































































































import React, { useState, useEffect } from "react";
import axios from "axios";
import JobListing from "../components/career/JobListing";

function Career() {
  const [careerData, setCareerData] = useState(null); // State to hold career data
  const [selectedTab, setSelectedTab] = useState("position"); // States for the *Position for our people* section
  const API_URL = "http://localhost:5000/api/careers/getAll";

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const response = await axios.get(API_URL);
        setCareerData(response.data[0]); // Assuming the first object is relevant
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };

    fetchCareerData();
  }, []);

  if (!careerData) {
    return <div>Loading...</div>; // Loading state
  }

  // Static Data for *Position for our people* section
  const content = {
    position: {
      title: "Specifically, we position our people for",
      image: "career_specially-we-position.jpg",
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
      image: "career_soft-standard-offers-great-benefit.jpg",
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
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header Section */}
        {/* <div className="relative h-72 text-white">
          <img
            src={`http://localhost:5000/${careerData.headerImage.replace("\\", "/")}`}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold">{careerData.title.replace(/"/g, "")}</h1>
          </div>
        </div> */}
        <div
          className="relative w-[87%] mx-auto h-72 bg-cover bg-center"
          style={{
            backgroundImage: `url('http://localhost:5000/${careerData.headerImage.replace(
              "\\",
              "/"
            )}')`,
          }}
        >
          <div className="absolute top-1/2 left-0 w-full h-32 bg-black/60 transform -translate-y-1/2 flex items-center justify-start pl-11">
            <h1 className="text-white text-5xl font-bold">
              {/* {careerData.title.replace(/"/g, "")} */}
              Career
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          {careerData.sections.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10"
            >
              {/* Left Image */}
              <div className="h-[90%] w-[90%]">
                <img
                  // src={`http://localhost:5000/${section.image.replace(
                  //   "\\",
                  //   "/"
                  // )}`}
                  src={`http://localhost:5000/${section.image.replace("\\", "/")}`}
                  alt={section.title}
                  className="rounded-sm shadow-lg ml-8"
                />
              </div>

              {/* Right Text */}
              <div>
                <h2 className="text-2xl mt-4 font-bold text-gray-800">
                  {/* {section.title} */}
                  Theplacify
                </h2>
                <p className="text-[#00BFB3] text-2xl font-normal mt-4"> {"Soft Standard Provides Opportunity"}</p>
                <p className="text-gray-700 mt-4">
                {"Theplacify provides a unique experience for consultants and contractors alike. Apart from care and feeding, we maintain the standard of our internal and field staff and provide opportunities that are unmatched by most IT Staffing and Services companies. Theplacify successfully delivers a wide array of solutions to our client base and our team members are able to gain experience and training not typically acquired from other firms. At Soft Standard, we are committed to train and teach you the skills necessary to prepare you for your next role."}
                </p> {/* Replace this API {section.content} with the hard content */}
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* Position for our people */}
    <div className="w-[80%] mx-auto my-16 bg-gray-100 rounded-sm">
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
    <div className="bg-gray-100 mt-1 p-8 flex flex-col md:flex-row items-start shadow-sm">
      <div className="w-full md:w-1/2">
        <img
          // src={content[selectedTab].image}
          src={`http://localhost:5000/${careerData.headerImage.replace("\\", "/")}`}
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
    </div>
  </div>
  

      {/* Jobs Section */}
      <div className="bg-gray-100 pt-10 pb-0 mb-0">
        <div className="max-w-6xl pl-5 mb-8 mx-auto px-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Current Job Openings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <JobListing/>
            {/* {careerData.jobs.map((job, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg bg-white p-4 shadow-md hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.category}</p>
                <p className="text-sm text-gray-500">{job.type}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-sm text-gray-500">{job.salary}</p>
                <a
                  href="#"
                  className="text-teal-500 mt-2 block hover:underline"
                >
                  More Details →
                </a>
              </div>
            ))} */}
          </div>
        </div>
        {/* Commitment Section */}
      <div className="bg-[#00BFB3] w-[87.5%] mx-auto text-white text-center py-16">
        <p className="text-3xl font-normal max-w-4xl mx-auto leading-relaxed">
          Theplacify demonstrates its commitment to quality and cost, not just
          by <span className="font-bold italic">“words”</span>, but by actions
          and results.
        </p>
      </div>
      </div>

      
    </>
  );
}

export default Career;
