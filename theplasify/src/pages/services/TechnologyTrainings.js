
// const TechnologyTrainings = () => {
//   // Static data object to replace API data
//   const staticData = {
//     header: {
//       title: "Technology Trainings",
//       image: "https://softstandard.com/wp-content/uploads/2016/05/Technology-Trainings.jpg"
//     },
//     content: {
//       title: "Professional Technology Training Solutions",
//       image: "https://softstandard.com/wp-content/uploads/2016/05/technology-training_main-banner.jpg",
//       description: "We offer comprehensive technology training programs designed to equip individuals and organizations with cutting-edge skills. Our courses cover a wide range of technologies, from basic programming to advanced enterprise solutions, helping you stay ahead in the rapidly evolving tech landscape."
//     },
//     tabs: [
//       {
//         title: "Web Development",
//         content: "Master modern web development technologies including HTML5, CSS3, JavaScript, React, Node.js, and more. Build responsive and dynamic web applications with industry best practices.",
//         image: "/api/placeholder/600/400"
//       },
//       {
//         title: "Cloud Computing",
//         content: "Learn cloud platforms like AWS, Azure, and Google Cloud. Understand cloud architecture, deployment, security, and scalability principles for modern applications.",
//         image: "/api/placeholder/600/400"
//       },
//       {
//         title: "Data Science",
//         content: "Explore data analysis, machine learning, and statistical modeling. Work with tools like Python, R, TensorFlow, and learn to derive meaningful insights from data.",
//         image: "/api/placeholder/600/400"
//       },
//       {
//         title: "Cybersecurity",
//         content: "Develop expertise in network security, ethical hacking, threat detection, and security compliance. Learn to protect systems and data from cyber threats.",
//         image: "/api/placeholder/600/400"
//       }
//     ]
//   };

//   return (
//    <div className="px-0 lg:px-20 bg-[#f1f1f1]">
    
    
//     <div className=" w-[100%] mx-auto ">
//         <div className="relative h-72 bg-white">
//           <img
//             src={staticData.header.image}
//             alt={staticData.header.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute top-1/2 left-0 w-full h-32 bg-black/60 transform -translate-y-1/2 flex items-center justify-start pl-11">
//             <h1 className="text-white text-3xl md:text-5xl font-bold">
//               {staticData.header.title}
//             </h1>
//           </div>
//         </div>
//         <div className="p-6 md:flex bg-white">
//           <div className="md:w-1/3">
//             <img
//               src={staticData.content.image}
//               alt={staticData.content.title}
//               className="rounded-md shadow-md mb-4 md:mb-0"
//             />
//           </div>
//           <div className="md:w-2/3 md:pl-6">
//             <h2 className="text-2xl font-semibold text-[#00BFB3]">
//               {staticData.content.title}
//             </h2>
//             <p className="mt-4 text-gray-600">
//               {staticData.content.description}
//             </p>
//             <h3 className="mt-6 text-lg font-semibold text-[#00BFB3]">
//               Training Highlights
//             </h3>
//             <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
//               <li>We have state-of-the-art training centers in various locations.</li>
//               <li>Our Trainers are best in the industry with vast experience.</li>
//               <li>Extensive course material provided to all trainees.</li>
//               <li>Placement Assistance for students and professionals.</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Tabbed Content Section */}
//       {/* <TabbedContent tabs={staticData.tabs} /> */}
//       <TechnologyTabs/>

//       <SustainabilityPillars/>

//    </div>
//   );
// };

// export default TechnologyTrainings; 









































import React from "react";
import ContractJobImg from "../../assest/contact1.jpg";
import SustainabilityPillars from "../../components/SustainPiller";
//import JobTabs from "../../components/JobTabs";
//import TechnologyTabs from "./TabbedContent";
import TechnologyTabs from "./TabbedContent";
import ContractImg1 from '../../assest/contract1.jpg';
const ContractBasedJobs = () => {
  // Static data object for Contract-Based Jobs
  const staticData = {
    header: {
      title: "Contract-Based Jobs",
      image: ContractJobImg,
    },
    content: {
      title: "Find Flexible Contract-Based Job Opportunities",
      image: ContractImg1, // Replace with actual image URL
      description: `Explore a wide range of contract-based job opportunities that match your skills and expertise. Whether you're a freelancer, consultant, or professional looking for short-term assignments, we connect you with top employers seeking specialized talent on a contract basis.

Our contract jobs span industries such as IT, marketing, finance, healthcare, and more. Work on projects that align with your career goals, enjoy competitive pay, and gain valuable experience.`,
    },
    features: [
      "Flexible work durations from weeks to months",
      "Opportunities across multiple industries",
      "Higher earning potential with specialized skills",
      "Work remotely or on-site as per contract terms",
      "Expand your network and build your portfolio",
      "Seamless application process with verified employers",
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
              <strong>ThePlacify</strong> - Your trusted partner for contract-based job opportunities.
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

      {/* Job Categories Section */}
      {/* <JobTabs /> */}
      <TechnologyTabs/>

      {/* Commitment Section */}
      <SustainabilityPillars />
    </div>
  );
};

export default ContractBasedJobs;

























































