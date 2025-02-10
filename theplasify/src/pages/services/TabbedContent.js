// // import React from 'react';

// // const TabbedContent = ({ tabs }) => {
// //     return (
// //         <div className="max-w-6xl mx-auto px-4 py-10">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                 {tabs.map((tab, index) => (
// //                     <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
// //                         <img
// //                             src={`http://localhost:5000/${tab.image}`}
// //                             alt={tab.title}
// //                             className="w-full h-40 object-cover"
// //                         />
// //                         <div className="p-6">
// //                             <h3 className="text-xl font-semibold text-gray-800">{tab.title}</h3>
// //                             <p className="mt-4 text-gray-600">{tab.content}</p>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default TabbedContent;





































// import React from 'react';

// const TabbedContent = ({ tabs }) => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {tabs.map((tab, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img
//               src={tab.image}
//               alt={tab.title}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">{tab.title}</h3>
//               <p className="mt-4 text-gray-600">{tab.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default TabbedContent;




































// import React, { useState } from 'react';

// const TechnologyTabs = () => {
//   // State for active tab
//   const [activeTab, setActiveTab] = useState('microsoft');

//   // Tab data structure
//   const tabsData = {
//     row1: [
//       { id: 'microsoft', label: 'Application Modernization', color: 'bg-gray-100 text-gray-800' },
//       { id: 'java', label: 'JAVA', color: 'bg-[#00BFB3]' },
//       { id: 'administration', label: 'Administration', color: 'bg-[#00BFB3]' },
//       { id: 'datawarehouse', label: 'Data warehousing', color: 'bg-[#00BFB3]' }
//     ],
//     row2: [
//       { id: 'hyperion', label: 'Hyperion', color: 'bg-[#00BFB3]' },
//       { id: 'salesforce', label: 'Salesforce', color: 'bg-[#00BFB3]' },
//       { id: 'erp', label: 'ERP', color: 'bg-[#00BFB3]' },
//       { id: 'bigdata', label: 'BigData', color: 'bg-[#00BFB3]' }
//     ]
//   };

//   // Content for each tab
//   const tabContent = {
//     microsoft: {
//       image: "/Technology-Trainings_Microsoft-training.jpg",
//       text: "C#, ASP.NET, VB.NET, Advanced.NET, WPF, WCF, Ajax, SharePoint 2007, SharePoint 2010, SharePoint Administration SQL server, SQL Tuning, SQL server DBA, SQL Server BI(SSRS,SSAS,SSIS), Microsoft Dynamics, Silverlight3.0, BizTalk server."
//     },
//     java: {
//       image: "/Technology-Trainings_Java.jpg",
//       text: "Core Java, Advanced Java, Spring Framework, Hibernate, J2EE Technologies, Web Services, Angular, React."
//     },
//     administration: {
//       image: "/Technology-Trainings_Administration.jpg",
//       text: "Windows Server Administration, Linux Administration, Cloud Administration, Network Administration."
//     },
//     datawarehouse: {
//       image: "/Technology-Trainings_Datawarehousing.jpg",
//       text: "Data Warehouse concepts, ETL processes, Data Modeling, Business Intelligence tools."
//     },
//     hyperion: {
//       image: "/Technology-Trainings_Hyperion.jpg",
//       text: "Hyperion Financial Management, Hyperion Planning, Essbase, Smart View."
//     },
//     salesforce: {
//       image: "/Technology-Trainings_salesforce.jpg",
//       text: "Salesforce Administration, Apex Programming, Lightning Components, Salesforce Integration."
//     },
//     erp: {
//       image: "/Technology-Trainings_ERP.jpg",
//       text: "SAP, Oracle EBS, Microsoft Dynamics, PeopleSoft."
//     },
//     bigdata: {
//       image: "/Technology-Trainings_Bigdata-1.jpg",
//       text: "Hadoop, Spark, NoSQL databases, Data Lakes, Machine Learning."
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {/* Tab Buttons - Row 1 */}
//       <div className="grid grid-cols-4 gap-0.5 mb-0.5">
//         {tabsData.row1.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`${
//               activeTab === tab.id ? 'bg-gray-100 text-gray-800' : tab.color
//             } py-3 px-4 text-center font-medium transition-colors duration-200 text-white hover:opacity-90`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tab Buttons - Row 2 */}
//       <div className="grid grid-cols-4 gap-0.5">
//         {tabsData.row2.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`${
//               activeTab === tab.id ? 'bg-gray-100 text-gray-800' : tab.color
//             } py-3 px-4 text-center font-medium transition-colors duration-200 text-white hover:opacity-90`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="mt-6 bg-gray-100 p-6 rounded-lg">
//         <div className="md:flex gap-6">
//           <div className="md:w-1/3 mb-4 md:mb-0">
//             <img
//               src={tabContent[activeTab].image}
//               alt={`${activeTab} illustration`}
//               className="w-full rounded-lg shadow-md"
//             />
//           </div>
//           <div className="md:w-2/3">
//             <p className="text-gray-700 leading-relaxed">
//               {tabContent[activeTab].text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechnologyTabs;


















































































import React, { useState } from 'react';

const TechnologyTabs = () => {
  const [activeTab, setActiveTab] = useState('microsoft');

  const tabsData = [
    [
      { id: 'microsoft', label: 'Microsoft Technologies' },
      { id: 'java', label: 'JAVA' },
      { id: 'administration', label: 'Administration' },
      { id: 'datawarehouse', label: 'Data warehousing' }
    ],
    [
      { id: 'hyperion', label: 'Hyperion' },
      { id: 'salesforce', label: 'Salesforce' },
      { id: 'erp', label: 'ERP' },
      { id: 'bigdata', label: 'BigData' }
    ]
  ];

  const tabContent = {
    microsoft: {
      image: "/Technology-Trainings_Microsoft-training.jpg",
      text: "C#, ASP.NET, VB.NET, Advanced.NET, WPF, WCF, Ajax, SharePoint 2007, SharePoint 2010, SharePoint Administration SQL server, SQL Tuning, SQL server DBA, SQL Server BI(SSRS,SSAS,SSIS), Microsoft Dynamics, Silverlight3.0, BizTalk server."
    },
    java: {
      image: "/Technology-Trainings_Java.jpg",
      text: "Core Java, Advanced Java, Spring Framework, Hibernate, J2EE Technologies, Web Services, Angular, React."
    },
    administration: {
      image: "/Technology-Trainings_Administration.jpg",
      text: "Windows Server Administration, Linux Administration, Cloud Administration, Network Administration."
    },
    datawarehouse: {
      image: "/Technology-Trainings_Datawarehousing.jpg",
      text: "Data Warehouse concepts, ETL processes, Data Modeling, Business Intelligence tools."
    },
    hyperion: {
      image: "/Technology-Trainings_Hyperion.jpg",
      text: "Hyperion Financial Management, Hyperion Planning, Essbase, Smart View."
    },
    salesforce: {
      image: "/Technology-Trainings_salesforce.jpg",
      text: "Salesforce Administration, Apex Programming, Lightning Components, Salesforce Integration."
    },
    erp: {
      image: "/Technology-Trainings_ERP.jpg",
      text: "SAP, Oracle EBS, Microsoft Dynamics, PeopleSoft."
    },
    bigdata: {
      image: "/Technology-Trainings_Bigdata-1.jpg",
      text: "Hadoop, Spark, NoSQL databases, Data Lakes, Machine Learning."
    }
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="grid grid-cols-4 text-center">
        {tabsData.flat().map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 cursor-pointer transition-colors ${
              activeTab === tab.id 
                ? 'bg-[#00BFB3] text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex p-8">
        {/* Left Column - Image */}
        <div className="w-1/2 pr-8">
          <img
            src={tabContent[activeTab].image}
            alt={`${activeTab} illustration`}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Right Column - Description */}
        <div className="w-1/2 pl-8">
          <p className="text-gray-700 leading-relaxed">
            {tabContent[activeTab].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyTabs;