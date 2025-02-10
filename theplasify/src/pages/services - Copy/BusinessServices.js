// import React, { useEffect, useState } from 'react';

// const BusinessServices = () => {
//   const [businessData, setBusinessData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchBusinessData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/application/business/getAll');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setBusinessData(data[0]); // Assuming the API returns an array with one object
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBusinessData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Prepend the server URL to image paths
//   const headerImageUrl = `http://localhost:5000/${businessData.header.image.replace(/\\/g, '/')}`;
//   const contentImageUrl = `http://localhost:5000/${businessData.content.image.replace(/\\/g, '/')}`;

//   return (
//     <>
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="relative h-64 bg-gray-200">
//           <img
//             src={headerImageUrl} // Corrected dynamic header image URL
//             alt={businessData.header.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <h1 className="text-white text-3xl md:text-5xl font-bold">{businessData.header.title}</h1>
//           </div>
//         </div>
//         <div className="p-6 md:flex">
//           <div className="md:w-1/3">
//             <img
//               src={contentImageUrl} // Corrected dynamic content image URL
//               alt={businessData.content.title}
//               className="rounded-md shadow-md mb-4 md:mb-0"
//             />
//           </div>
//           <div className="md:w-2/3 md:pl-6">
//             <h2 className="text-2xl font-bold text-gray-800">{businessData.content.title}</h2>
//             <p className="mt-4 text-gray-600">
//               <strong>Theplacify Solutions</strong> is a leading consulting in Business services.
//             </p>
//             <p className="mt-4 text-gray-600">{businessData.content.description}</p>
//             <ul className="mt-4 text-gray-600 list-disc list-inside">
//               {businessData.features.map((feature, index) => (
//                 <li key={index}>{feature}</li> // Render dynamic features
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* Commitment Section */}
//       <div className="bg-[#00BFB3] text-white text-center py-8">
//         <p className="text-lg font-medium max-w-4xl mx-auto">
//           Theplacify demonstrates its commitment to quality and cost, not just by{' '}
//           <span className="font-bold italic">“words”</span>, but by actions and results.
//         </p>
//       </div>
//     </>
//   );
// };

// export default BusinessServices;

import React from "react";

const BusinessServices = () => {
  // Static data object to replace API data
  const staticData = {
    header: {
      title: "Business Services",
      image:
        "https://softstandard.com/wp-content/uploads/2016/05/Business-Services.jpg",
    },
    content: {
      title: "SoftStandard Solutions Business Services",
      image:
        "https://softstandard.com/wp-content/uploads/2016/05/business-service-main-page-banner.jpg",
      description: `SoftStandard Solutions is a leading consulting in Business services.
Soft Standard Services is well equipped to understand, anticipate and respond to your evolving staffing needs. We are constantly developing and optimizing innovative staffing solutions to help you weather economic fluctuations, control costs and improve productivity. Our unique strengths and extensive experience will benefit your business wherever it operates around the globe. You’ll find that your worldwide staffing success is not just our business – it is our promise.`,
    },
    features: [
      "Strategic Business Planning and Consultation",
      "Process Optimization and Efficiency Improvement",
      "Risk Management and Compliance Solutions",
      "Digital Transformation Services",
      "Market Analysis and Growth Strategies",
      "Financial Planning and Advisory Services",
    ],
  };

  return (
    <div className="px-8">
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
              <strong>Theplacify Solutions</strong> is a leading consulting in
              Business services.
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
      <div className="bg-[#00BFB3] text-white text-center py-16">
        <p className="text-3xl font-normal max-w-4xl mx-auto leading-relaxed">
          Theplacify demonstrates its commitment to quality and cost, not just
          by <span className="font-bold italic">"words"</span>, but by actions
          and results.
        </p>
      </div>
    </div>
  );
};

export default BusinessServices;
