// import ServicePageTemplate from "../higherOrderComp/ServicePageTemplate";

// export const ApplicationTemplate = () => {
//     const tabsData = {
//       primaryTabs: [
//         "Microsoft Technologies",
//         "JAVA",
//         "Administration",
//         "Data warehousing"
//       ],
//       secondaryTabs: [
//         "Hyperion",
//         "Salesforce",
//         "ERP",
//         "BigData"
//       ]
//     };

//     const serviceContent = {
//       imageSrc: "/path/to/hyperion-image.jpg",
//       content: (
//         <>
//           <p className="text-gray-600 leading-relaxed">
//             Hyperion ESS Base, Hyperion Planning, Hyperion Financial Management 
//             (HFM) Hyperion Financial Reporting (HFR), Hyperion Interactive 
//             Reporting (Brio) Hyperion Web Analysis, Hyperion Spread Services, 
//             Hyperion Master Data Management (HMDM)
//           </p>
//         </>
//       )
//     };

//     return <ServicePageTemplate 
//       tabsData={tabsData} 
//       serviceContent={serviceContent}
//       selectedTabIndex={0}  // Set to show Hyperion tab as active
//     />;
//   };
























// import React, { useState } from 'react';

// const ServicePageTemplate = () => {
//   const [activeMainTab, setActiveMainTab] = useState(0);
//   const [activeSubTab, setActiveSubTab] = useState(0);

//   // Data structure for all tabs and their content
//   const tabsData = {
//     mainTabs: [
//       {
//         name: "Application Modernization",
//         subTabs: [
//           {
//             name: "Hyperion",
//             content: {
//               image: "https://softstandard.com/wp-content/uploads/2016/05/application-service.jpg",
//               description: `At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€“ Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

//             Modernization is no small task. You have a lot riding on your applications and can’t afford to waste time or money. That’s why businesses turn to the experts at SoftStandard.

//               We’ve helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
//               Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
//             }
//           },
//           {
//             name: "Application Development",
//             content: {
//               image: "https://softstandard.com/wp-content/uploads/2016/05/Application-service_application-modrenization.jpg",
//               description: `At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€“ Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

// Modernization is no small task. You have a lot riding on your applications and can’t afford to waste time or money. That’s why businesses turn to the experts at SoftStandard.

// We’ve helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
// Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
//             }
//           }
//           // Add more Microsoft technology sub-tabs as needed
//         ]
//       },
//       {
//         name: "Application Maintenance",
//         subTabs: [
//           {
//             name: "Application Maintenance",
//             content: {
//               image: "https://softstandard.com/wp-content/uploads/2016/05/Application-service_application-development-1.jpg",
//               description: `At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€“ Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

// Modernization is no small task. You have a lot riding on your applications and can’t afford to waste time or money. That’s why businesses turn to the experts at SoftStandard.

// We’ve helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
// Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
//             }
//           },
//           //           {
//           //             name: "Spring Boot",
//           //             content: {
//           //               image: "/path/to/spring-image.jpg",
//           //               description:`At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€“ Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

//           // Modernization is no small task. You have a lot riding on your applications and can’t afford to waste time or money. That’s why businesses turn to the experts at SoftStandard.

//           // We’ve helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
//           // Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
//           //             }
//           //           }

//         ]
//       },

//     ]
//   };

//   // Get current content based on selected tabs
//   const currentMainTab = tabsData.mainTabs[activeMainTab];
//   const currentContent = currentMainTab.subTabs[activeSubTab].content;

//   return (
//     <><div className="w-full px-16">
//     {/* Main Tabs */}
//     <div className="grid grid-cols-4 text-center">
//       {tabsData.mainTabs.map((tab, index) => (
//         <div
//           key={index}
//           onClick={() => {
//             setActiveMainTab(index);
//             setActiveSubTab(0); // Reset sub-tab when main tab changes
//           }}
//           className={`py-4 px-2 cursor-pointer transition-colors ${index === activeMainTab
//               ? 'bg-[#00BFB3] text-white'
//               : 'bg-[#00BFB3] text-white opacity-90 hover:opacity-100'
//             }`}
//         >
//           {tab.name}
//         </div>
//       ))}
//     </div>

//     {/* Sub Tabs */}
//     <div className="grid grid-cols-4 text-center border-b">
//       {currentMainTab.subTabs.map((subTab, index) => (
//         <div
//           key={index}
//           onClick={() => setActiveSubTab(index)}
//           className={`py-4 px-2 cursor-pointer transition-colors ${index === activeSubTab
//               ? 'bg-[#00BFB3] text-white'
//               : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//             }`}
//         >
//           {subTab.name}
//         </div>
//       ))}
//     </div>

//     {/* Content Section */}
//     <section className="py-16">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
//           {/* Left Column - Image */}
//           <div className="w-full lg:w-1/2">
//             <img
//               src={currentContent.image}
//               alt={`${currentMainTab.subTabs[activeSubTab].name} illustration`}
//               className="w-full h-[400px] object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Right Column - Content */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <h2 className="text-2xl font-semibold text-gray-800">
//               {currentMainTab.subTabs[activeSubTab].name}
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               {currentContent.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
//   <section className="bg-[#00BFB3] text-white text-center w-[95%] mx-auto py-14">
//         <p className="text-3xl font-normal max-w-4xl mx-auto leading-relaxed">
//           Theplacify demonstrates its commitment to quality and cost, not just by{' '}
//           <span className="font-bold italic">"words"</span>, but by actions and results.
//         </p>
//       </section>
//   </>
    
//   );
// };

// export default ServicePageTemplate;






































































































import React, { useState } from 'react';

const ServicePageTemplate = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data structure for tabs and their content
  const tabsData = [
    {
      name: "Application Modernization",
      image: "https://softstandard.com/wp-content/uploads/2016/05/application-service.jpg",
      description: `At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€" Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

      Modernization is no small task. You have a lot riding on your applications and can't afford to waste time or money. That's why businesses turn to the experts at SoftStandard.

      We've helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
      Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
    },
    {
      name: "Application Development",
      image: "https://softstandard.com/wp-content/uploads/2016/05/Application-service_application-modrenization.jpg",
      description: `At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€" Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

      Modernization is no small task. You have a lot riding on your applications and can't afford to waste time or money. That's why businesses turn to the experts at SoftStandard.

      We've helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
      Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
    },
    {
      name: "Application Maintenance",
      image: "https://softstandard.com/wp-content/uploads/2016/05/Application-service_application-development-1.jpg",
      description: `At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€" Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

      Modernization is no small task. You have a lot riding on your applications and can't afford to waste time or money. That's why businesses turn to the experts at SoftStandard.

      We've helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
      Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
    }
  ];

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex text-center">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-4 cursor-pointer transition-colors ${
              index === activeTab 
                ? 'bg-[#00BFB3] text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.name}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex p-8">
        {/* Left Column - Image */}
        <div className="w-1/2 pr-8">
          <img
            src={tabsData[activeTab].image}
            alt={`${tabsData[activeTab].name} illustration`}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Right Column - Description */}
        <div className="w-1/2 pl-8">
          <h2 className="text-2xl font-semibold mb-4">
            {tabsData[activeTab].name}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {tabsData[activeTab].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePageTemplate;