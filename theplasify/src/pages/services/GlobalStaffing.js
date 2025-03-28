import React, { useState } from "react";
import SustainabilityPillars from "../../components/SustainPiller";
function GlobalStaffing() {
  const [activeTab, setActiveTab] = useState("Contract Staffing");

  const tabs = [
    { name: "Contract Staffing" },
    { name: "Direct Hire Placement" },
    { name: "Payroll Services" },
    { name: "Specialties we service" },
  ];
  return (
    <div className="px-0 lg:px-20 bg-[#f1f1f1]">



      <div className="container w-full mx-auto bg-white ">
        {/* Header Section */}
        <div
          className="relative h-72 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/Global-Staffing.jpg')", // Replacement of CDN Link and this image is stored in the public folder
          }}
        >
          <div className="absolute top-1/2 left-0 w-full h-32 bg-black/60 transform -translate-y-1/2 flex items-center justify-start pl-11">
            <h1 className="text-white text-5xl font-semibold">Global Staffing</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Left Image */}
          <div className="pl-10">
            <img
              src="/global-stafing-main-page-banner.jpg" //  Replacement of CDN Link and this image is stored in the public folder
              alt="Theplacify Solutions"
              className="rounded-sm shadow-md w-[90%]"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Theplacify Solutions Business Services
            </h2>
            <p className="text-[#00BFB3] font-semibold mb-4">
              Theplacify Solutions is a leader in STAFFING Solutions servicing various clients across the globe.
            </p>
            <p className="text-gray-700 mb-4">
              As the business landscape continues to rapidly evolve, so do your workforce needs. With this in mind,
              Theplacify aims to gather in-depth comprehension of your business requirements and staffing needs in
              order to source top talent for your team. As your comprehensive recruiting partner, Theplacify delivers
              an array of flexible, end-to-end talent solutions within a number of industries.
            </p>
            <p className="text-gray-700 mb-4">
              We recruit for Contract, Contract to hire, and Permanent positions in all skills from Entry level to Top
              Management for a broad range of clients across all industry verticals.
            </p>
            <p className="text-gray-700">
              We have a dedicated team who follow the best hiring practices and use the latest AI and Machine Learning
              tools to search candidates and automate the process for our clients in the least possible time.
            </p>
          </div>
        </div>

        {/* AI Driven Processes Section */}
        <div className="mt-16 w-[90%] mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Some of the AI driven process we use to find the best talent:
          </h2>
          <ul className="list-inside space-y-4 text-gray-700 list-none">
            <li>Process #1: Automated Screening via Email/Phone</li>
            <li>Process #2: Conversational BOT with candidates</li>
            <li>Process #3: Video Screening with identity check</li>
            <li>Process #4: Improve the Job Description by internal software</li>
            <li>Process #5: Increase referrals by our existing pool of candidates</li>
            <li>Process #6: Schedule Interviews with AI assistant</li>
            <li>Process #7: Use AI engine to match the potential candidates</li>
            <li>
              Process #8: Managing pool of valid internal and external candidates with our database and engaging them
              always
            </li>
          </ul>
        </div>

        {/* Service Offerings Section */}
        <div className="mt-16 w-[90%] mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Service offerings:</h2>
          <ul className="list-inside space-y-4 text-gray-700 list-none">
            <li>VMS staffing services</li>
            <li>MSP staffing services</li>
            <li>RPO services</li>
            <li>IT staffing services</li>
            <li>Non-IT staffing services</li>
            <li>Engineering staffing services</li>
            <li>Staff augmentation services</li>
            <li>Project based staffing services</li>
            <li>Contract based staffing services</li>
            <li>ITAR third-party contracting HR services</li>
          </ul>

          <p className="text-gray-700 mt-6">
            We implement our metric-driven processes to offer a unique mix of cost-effective staffing solutions to our
            clients that include – temporary, temporary to permanent, and permanent staffing of professionals. We
            distinguish ourselves with our “high-touch” approach and offer lasting relationships by consistently
            delivering high value to our clients. This is based on our global delivery capability, deep technical and
            domain expertise – all harnessed by our adaptive quality processes and strong recruiting methodologies.
          </p>

          <p className="text-gray-700 mt-4">
            Few of our recruitment positions which have been filled recently are shown as below:
          </p>

          {/* Recruitment Positions */}
          <div className="mt-6 w-[100%] mx-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-4">IT</h3>
            <p className="text-gray-700">
              Program Directors, Project Managers, Web Developer/Admin, Architects, Support Specialists, Programmers,
              DBA, Software Developers, Software Architects/Admins, System Developers, Analysts, Quality Assurance,
              Network & System Engineers/Admins, BigData Professionals/Engineers/Developers/Architects, Cloud
              Engineers/Developers/Admins, Infrastructure, Tools Developers/Admins, Tech Services, Helpdesk & Desktop
              Support, etc.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Non-IT</h3>
            <p className="text-gray-700">
              Admin/Clerical, Banking, Finance, Insurance, Audit, Professional, Scientific, Compliance, Regulatory,
              Pharmacy, Technical, Finance, Accounting, Procurement, Supply Chain, Operations, Logistics, Sales,
              Creative, Marketing, Business Support, Customer Support, Tech Support, Corporate Relations, Collections,
              Healthcare & Customer Service, HR, Legal, Tax, etc.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Engineering</h3>
            <p className="text-gray-700">
              Aerospace, Automotive, Electrical, Electronics, Hi-Tech, Semiconductor, Embedded, LF, HF, SI, PI, EMI,
              EMC, Environmental, Industrial, Mechanical, Systems, Materials, Structural, Design, Stress, Analysis,
              Simulation, Validation, Verification, Testing, RMS, Performance, Thermal, Compressor, UI, QC/QA, Tech
              Support, Manufacturing Operations, Infrastructure, Documentation Specialists, etc.
            </p>
          </div>
        </div>
      </div>

      <div className="container  py-8 w-[100%] mx-auto">
        {/* Tabs Section */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-6 py-3 text-xl font-medium ${activeTab === tab.name
                  ? "text-white bg-teal-500"
                  : "text-gray-800 bg-gray-100"
                } hover:bg-teal-400 hover:text-white border border-gray-200`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6">
          {/* Left Content (Image) */}
          <div>
            <img
              src="https://softstandard.com/wp-content/uploads/2016/05/global-stafing-main-page-banner.jpg"
              alt="Staffing Services"
              className="w-full rounded-md shadow-md"
            />
          </div>

          {/* Right Content (Description) */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">{activeTab}</h2>
            <p className="text-gray-700">
              When you need to supplement your core team of employees, an
              individual or team of consultants can be hired through Theplacify
              on an hourly basis to execute critical projects and optimize
              workforce performance.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#00BFB3] text-white text-center w-[100%] mx-auto py-16">
        <p className="text-3xl font-normal max-w-4xl mx-auto leading-relaxed">
          Theplacify demonstrates its commitment to quality and cost, not
          just by <span className="font-bold italic">“words”</span>, but by
          actions and results.
        </p>
      </div> */}
      <SustainabilityPillars/>







    </div>
  );
}

export default GlobalStaffing;
