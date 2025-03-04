// import React, { useState } from 'react';

// const ServicePageTemplate = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   // Data structure for tabs and their content
//   const tabsData = [
//     {
//       name: "Application Modernization",
//       image: "https://softstandard.com/wp-content/uploads/2016/05/application-service.jpg",
//       description: `At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€" Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

//       Modernization is no small task. You have a lot riding on your applications and can't afford to waste time or money. That's why businesses turn to the experts at SoftStandard.

//       We've helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
//       Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
//     },
//     {
//       name: "Application Development",
//       image: "https://softstandard.com/wp-content/uploads/2016/05/Application-service_application-modrenization.jpg",
//       description: `At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€" Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

//       Modernization is no small task. You have a lot riding on your applications and can't afford to waste time or money. That's why businesses turn to the experts at SoftStandard.

//       We've helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
//       Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
//     },
//     {
//       name: "Application Maintenance",
//       image: "https://softstandard.com/wp-content/uploads/2016/05/Application-service_application-development-1.jpg",
//       description: `At SoftStandard Solutions we enable you to address issues in the legacy system such as multiple technology platforms, high cost of maintenance, unsupported systems, shrinking employee expertise, lack of integration and Web capabilities. The services provide a metrics-based framework to help you choose from different modernization methods â€" Web enabling, re-engineering, re-hosting, componentization, and new development. They are delivered using the global delivery model.

//       Modernization is no small task. You have a lot riding on your applications and can't afford to waste time or money. That's why businesses turn to the experts at SoftStandard.

//       We've helped customers improve performance, realizing up to a 25 percent increase in productivity. And cut applications operating, maintenance and development costs by as much as half.
//       Our strategic planning expertise, innovative visualization technologies; patent-pending tools and IP help you enter the modern era where business and technology work in sync.`
//     }
//   ];

//   return (
//     <div className="w-full bg-white">
//       {/* Tabs Navigation */}
//       <div className="flex text-center">
//         {tabsData.map((tab, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`flex-1 py-4 cursor-pointer transition-colors ${
//               index === activeTab 
//                 ? 'bg-[#00BFB3] text-white text-xl' 
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             {tab.name}
//           </div>
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="flex p-8">
//         {/* Left Column - Image */}
//         <div className="w-1/2 pr-8">
//           <img
//             src={tabsData[activeTab].image}
//             alt={`${tabsData[activeTab].name} illustration`}
//             className="w-full h-[500px] object-cover"
//           />
//         </div>

//         {/* Right Column - Description */}
//         <div className="w-1/2 pl-8">
//           <h2 className="text-2xl font-semibold mb-4">
//             {tabsData[activeTab].name}
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             {tabsData[activeTab].description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicePageTemplate; 




















































import React, { useState } from 'react';
import PartTimeImg1 from '../assest/part1.jpg';
import PartTimeImg2 from '../assest/part2.jpg';
import PartTimeImg3 from '../assest/part3.jpg';

const ServicePageTemplate = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data structure for tabs and their content
  const tabsData = [
    {
      name: "Remote Part-Time Jobs",
      image: PartTimeImg2,
      description: `ThePlacify helps professionals find remote part-time jobs that fit their skills and schedule. Whether you are a student, a freelancer, or someone looking for extra income, we provide flexible job opportunities in web development, IT support, digital marketing, and more.

      Our remote jobs allow you to work from anywhere while maintaining a healthy work-life balance. Join ThePlacify today and explore exciting remote work opportunities with top companies.`
    },
    {
      name: "Freelancing Opportunities",
      image: PartTimeImg1,
      description: `Freelancing is a great way to build experience, work independently, and earn income on your terms. ThePlacify connects skilled professionals with companies looking for freelancers in fields such as web development, software testing, content writing, and UI/UX design.

      We ensure that freelancers find projects that match their expertise, helping them grow their careers while maintaining flexibility. Start your freelancing journey with ThePlacify today.`
    },
    {
      name: "Internship & Training Programs",
      image: PartTimeImg3,
      description: `Looking to kickstart your IT career? ThePlacify offers internship and training programs that provide hands-on experience with real-world projects. Our programs help students and freshers develop technical and soft skills needed for the industry.

      Gain valuable experience, work on live projects, and get mentorship from industry experts. Whether you're looking for short-term or long-term internships, ThePlacify has the right opportunity for you.`
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Tabs Navigation */}
      <div className="flex text-center">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-4 cursor-pointer transition-colors ${
              index === activeTab 
                ? 'bg-[#00BFB3] text-white text-xl' 
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
