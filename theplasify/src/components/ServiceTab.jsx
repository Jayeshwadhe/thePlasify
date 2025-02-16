// import React, { useState } from 'react';

// const ServiceTabs = () => {
//   const [activeTab, setActiveTab] = useState('application');
  
//   const tabs = [
//     { id: 'application', label: 'Application Services', color: 'bg-teal-500' },
//     { id: 'business', label: 'Business Services', color: 'bg-gray-100' },
//     { id: 'technology', label: 'Technology Trainings', color: 'bg-teal-500' },
//     { id: 'staffing', label: 'Global Staffing', color: 'bg-teal-500' }
//   ];

//   const content = {
//     application: {
//       title: 'SoftStandard Solutions',
//       description: `SoftStandard Solutions is a leading consulting in Business services. 
//       Soft Standard Services is well equipped to understand, anticipate and respond to your evolving staffing needs. 
//       We are constantly developing and optimizing innovative staffing solutions to help you weather economic fluctuations, 
//       control costs and improve productivity.`,
//       image: 'https://softstandard.com/wp-content/uploads/2016/05/application.jpg'
//     },   
//     application: {
//         title: 'SoftStandard Solutions',
//         description: `SoftStandard Solutions is a leading consulting in Business services. 
//         Soft Standard Services is well equipped to understand, anticipate and respond to your evolving staffing needs. 
//         We are constantly developing and optimizing innovative staffing solutions to help you weather economic fluctuations, 
//         control costs and improve productivity.`,
//         image: 'https://softstandard.com/wp-content/uploads/2016/05/application.jpg'
//       }, 
//       application: {
//         title: 'Business Services',
//         description: `SoftStandard Solutions is a leading consulting in Business services.
// Soft Standard Services is well equipped to understand, anticipate and respond to your evolving staffing needs. We are constantly developing and optimizing innovative staffing solutions to help you weather economic fluctuations, control costs and improve productivity.Our unique strengths and extensive experience will benefit your business wherever it operates around the globe. You’ll find that your worldwide staffing success is not just our business – it’s our promise. Soft Standard’s key strengths and values include….`,
//         image: 'https://softstandard.com/wp-content/uploads/2016/05/application.jpg'
//       }, 
//       application: {
//         title: 'SoftStandard Solutions',
//         description: `SoftStandard Solutions is a leading consulting in Business services. 
//         Soft Standard Services is well equipped to understand, anticipate and respond to your evolving staffing needs. 
//         We are constantly developing and optimizing innovative staffing solutions to help you weather economic fluctuations, 
//         control costs and improve productivity.`,
//         image: 'https://softstandard.com/wp-content/uploads/2016/05/application.jpg'
//       }, 
  
 
//     // Add content for other tabs as needed
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {/* Tabs */}
//       <div className="grid grid-cols-4 gap-0">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`py-3 px-4 text-center transition-colors duration-200
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
//             alt="Person typing on keyboard"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-semibold text-gray-800">
//             {content[activeTab]?.title || 'SoftStandard Solutions'}
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             {content[activeTab]?.description || `SoftStandard Solutions is a leading consulting in Business services. 
//             Our unique strengths and extensive experience will benefit your business wherever it operates around the globe. 
//             You'll find that your worldwide staffing success is not just our business – it's our promise.`}
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

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('application');
  
  const tabs = [
    { id: 'application', label: 'Application Services', color: 'bg-teal-500' },
    { id: 'business', label: 'Business Services', color: 'bg-gray-100' },
    { id: 'technology', label: 'Technology Trainings', color: 'bg-teal-500' },
    { id: 'staffing', label: 'Global Staffing', color: 'bg-teal-500' }
  ];

  const content = {
    application: {
      title: 'Application Services',
      description: `Theplacify Solutions is a leading consulting in Application Services. 
      We provide comprehensive application development, maintenance, and modernization services. 
      Our team of experts delivers innovative solutions tailored to your business needs, 
      ensuring optimal performance and scalability. We specialize in custom software development, 
      application integration, and digital transformation initiatives.`,
      image: 'https://softstandard.com/wp-content/uploads/2016/05/application.jpg'
    },
    business: {
      title: 'Business Services',
      description: `Theplacify Solutions is a leading consulting in Business services.
      Theplacify  Services is well equipped to understand, anticipate and respond to your evolving staffing needs. 
      We are constantly developing and optimizing innovative staffing solutions to help you weather economic fluctuations, 
      control costs and improve productivity. Our unique strengths and extensive experience will benefit your business 
      wherever it operates around the globe. You'll find that your worldwide staffing success is not just our 
      business – it's our promise.`,
      image: 'https://softstandard.com/wp-content/uploads/2016/05/Application-service_application-development.jpg'
    },
    technology: {
      title: 'Technology Trainings',
      description: `Enhance your team's capabilities with our comprehensive technology training programs. 
      We offer specialized training in cutting-edge technologies, frameworks, and methodologies. 
      Our expert-led training sessions are designed to accelerate skill development and keep your 
      workforce updated with the latest industry trends. We provide both online and in-person 
      training options with hands-on practical experience.`,
      image: 'https://softstandard.com/wp-content/uploads/2016/05/technology-training.jpg'
    },
    staffing: {
      title: 'Global Staffing',
      description: `Our Global Staffing solutions connect you with top talent worldwide. 
      We understand the challenges of international recruitment and provide comprehensive 
      staffing services that bridge cultural and geographical gaps. Our extensive network 
      and rigorous selection process ensure you get access to qualified professionals who 
      can drive your business forward. We handle everything from talent acquisition to 
      onboarding support.`,
      image: 'https://softstandard.com/wp-content/uploads/2016/05/global-stafing.jpg'
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-4  ">
      {/* Tabs */}
      <div className="grid grid-cols-4 gap-0 ">
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
          <button className="text-teal-600 font-medium hover:text-teal-700">
            READ MORE →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;