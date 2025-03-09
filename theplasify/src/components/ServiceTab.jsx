

// import React, { useState } from 'react';

// const ServiceTabs = () => {
//   const [activeTab, setActiveTab] = useState('application');
  
//   const tabs = [
//     { id: 'application', label: 'Part-time jobs', color: 'bg-teal-500' },
//     { id: 'business', label: 'Full-time Jobs', color: 'bg-gray-100' },
//     { id: 'technology', label: 'Contract Basis', color: 'bg-teal-500' },
//     { id: 'staffing', label: 'Global Staffing', color: 'bg-teal-500' }
//   ];

//   const content = {
//     application: {
//       title: 'Part-time jobs',
//       description: `Theplacify Solutions is a leading consulting in Application Services. 
//       We provide comprehensive application development, maintenance, and modernization services. 
//       Our team of experts delivers innovative solutions tailored to your business needs, 
//       ensuring optimal performance and scalability. We specialize in custom software development, 
//       application integration, and digital transformation initiatives.`,
//       image: 'https://softstandard.com/wp-content/uploads/2016/05/application.jpg'
//     },
//     business: {
//       title: 'Full-time Jobs',
//       description: `Theplacify Solutions is a leading consulting in Business services.
//       Theplacify  Services is well equipped to understand, anticipate and respond to your evolving staffing needs. 
//       We are constantly developing and optimizing innovative staffing solutions to help you weather economic fluctuations, 
//       control costs and improve productivity. Our unique strengths and extensive experience will benefit your business 
//       wherever it operates around the globe. You'll find that your worldwide staffing success is not just our 
//       business – it's our promise.`,
//       image: 'https://softstandard.com/wp-content/uploads/2016/05/Application-service_application-development.jpg'
//     },
//     technology: {
//       title: 'Contract Basis',
//       description: `Enhance your team's capabilities with our comprehensive technology training programs. 
//       We offer specialized training in cutting-edge technologies, frameworks, and methodologies. 
//       Our expert-led training sessions are designed to accelerate skill development and keep your 
//       workforce updated with the latest industry trends. We provide both online and in-person 
//       training options with hands-on practical experience.`,
//       image: 'https://softstandard.com/wp-content/uploads/2016/05/technology-training.jpg'
//     },
//     staffing: {
//       title: 'Global Staffing',
//       description: `Our Global Staffing solutions connect you with top talent worldwide. 
//       We understand the challenges of international recruitment and provide comprehensive 
//       staffing services that bridge cultural and geographical gaps. Our extensive network 
//       and rigorous selection process ensure you get access to qualified professionals who 
//       can drive your business forward. We handle everything from talent acquisition to 
//       onboarding support.`,
//       image: 'https://softstandard.com/wp-content/uploads/2016/05/global-stafing.jpg'
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto py-4  lg:px-16 ">
//       {/* Tabs */}
//       <div className="grid grid-cols-4 gap-0 px-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`py-3 px-4 text-center text-xl transition-colors duration-200
//               ${tab.id === activeTab 
//                 ? 'bg-teal-500 text-white' 
//                 : 'bg-gray-100 text-gray-700 hover:bg-teal-100'}`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6">
//         {/* Image */}
//         <div className="relative">
//           <img
//             src={content[activeTab]?.image}
//             alt="Service illustration"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-semibold text-gray-800">
//             {content[activeTab]?.title}
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             {content[activeTab]?.description}
//           </p>
//           <button className="text-teal-600 font-medium hover:text-teal-700">
//             READ MORE →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceTabs;
















































import React, { useState } from 'react';
import Pen1Img from '../assest/pen1.jpg';

import Pen2Img from '../assest/pen2.jpg';
import Pen3Img from '../assest/pen3.jpg';
import Pen4Img from '../assest/pen4.jpg';
import { Link } from 'react-router-dom';
const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('application');
  
  const tabs = [
    { id: 'application', label: 'Part-time Jobs', color: 'bg-teal-500' },
    { id: 'business', label: 'Full-time Jobs', color: 'bg-gray-100' },
    { id: 'technology', label: 'Contract Basis', color: 'bg-teal-500' },
    { id: 'staffing', label: 'Global Staffing', color: 'bg-teal-500' }
  ];

  const content = {
    application: {
      title: 'Part-time Jobs',
      description: `Our IT recruitment agency specializes in connecting skilled professionals with part-time IT job opportunities. 
      Whether you're looking for flexible work schedules or short-term IT projects, we help match candidates with companies 
      that require specialized skills on a part-time basis. We understand the dynamic nature of the IT industry and provide 
      solutions that allow businesses to scale their workforce according to their needs while offering job seekers 
      a chance to gain valuable industry experience and maintain work-life balance.`,
      image: Pen1Img,
      path: '/part-time-jobs'
    },
    business: {
      title: 'Full-time Jobs',
      description: `We provide full-time IT recruitment services, ensuring businesses find the best tech talent for long-term success. 
      From software engineers to cybersecurity experts, we help organizations build strong IT teams that drive innovation 
      and efficiency. Our extensive network and deep industry knowledge allow us to identify top-tier candidates who not 
      only possess the necessary technical expertise but also align with a company's culture and vision. We support the 
      entire hiring process, from sourcing and screening to onboarding, ensuring a seamless experience for both employers 
      and job seekers.`,
      image: Pen2Img,
      path: '/full-time-jobs'
    },
    technology: {
      title: 'Contract Basis',
      description: `Our contract-based IT recruitment services offer businesses flexibility in hiring tech professionals for 
      project-based work. Whether you need developers, testers, or IT consultants for short-term engagements, we provide 
      highly skilled talent on demand. Our contract staffing solutions are ideal for companies looking to execute 
      time-sensitive projects without the long-term commitment of full-time hires. We handle all aspects of contract 
      employment, including payroll, compliance, and benefits, allowing businesses to focus on delivering exceptional 
      technology solutions while minimizing hiring risks.`,
      image: Pen3Img,
      path: '/contract-jobs'
    },
    staffing: {
      title: 'Global Staffing',
      description: `As a leading IT recruitment agency, we provide global staffing solutions to help companies hire top-tier 
      IT professionals worldwide. Our expertise in cross-border hiring, compliance, and onboarding makes international 
      recruitment seamless and hassle-free. We connect businesses with highly qualified IT specialists across different 
      regions, ensuring they have access to the best talent regardless of geographical boundaries. Our global recruitment 
      strategies are tailored to meet the evolving needs of multinational corporations and startups alike, offering 
      cost-effective, scalable, and reliable staffing solutions.`,
      image: Pen4Img,
      path: '/globalStaffing'
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-4  lg:px-16 ">
      {/* Tabs */}
      <div className="grid grid-cols-4 gap-0 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-4 text-center text-xl transition-colors duration-200
              ${tab.id === activeTab 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-teal-100'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6">
        {/* Image */}
        <div className="relative">
          <img
            src={content[activeTab]?.image}
            alt="Service illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {content[activeTab]?.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {content[activeTab]?.description}
          </p>
          <Link className="text-teal-600 font-medium hover:text-teal-700" to={content[activeTab]?.path}>
            READ MORE →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;
