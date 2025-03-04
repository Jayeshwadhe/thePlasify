// import ServiceSection from "../higherOrderComp/ServiceSection";
// import ServiceImg from "../assest/applicationservice.jpg";

// export const ApplicationServicesComp = () => {
//     const content = {
//       title: "SoftStandard Solutions Application Services",
//       subtitle: "SoftStandard Solutions is a leading consulting in Application build, support and maintenance Projects.",
//       description: "Technology Innovation is happening faster than ever before. Corporations are undergoing rapid changes with accelerated adoption of emerging technologies (e.g. Social, Mobile, Big Data and Cloud) which are disrupting traditional business models. SoftStandard Application Services bring together an industrialized, globally integrated approach to help companies strategically manage their application portfolios in support of business goals in this rapidly changing digital economy.",
//       highlights: [
//         `We deliver Application Services that help our clients create more value for the business, improve efficiency through IT Systems and reduce costs. We help drive business innovation by integrating next-generation technology into the enterprise IT landscape.

// Soft Standard's expertise in Application Services helps enterprise improve their overall efficiency and effectiveness. SoftStandard offers flexible, innovative end to end solutions customized as per organizational needs.`
//       ],
//       imageSrc: ServiceImg
//     };
  
//     return <ServiceSection {...content} />;
//   };
































import ServiceSection from "../higherOrderComp/ServiceSection";
import ServiceImg from "../assest/applicationservice.jpg";

export const ApplicationServicesComp = () => {
    const content = {
      title: "Part-Time IT Job Opportunities",
      subtitle: "Connecting IT Professionals with Flexible Part-Time Roles",
      description: "ThePlacify specializes in IT recruitment for part-time roles, helping businesses find skilled professionals who seek flexible work opportunities. Whether you are a student, freelancer, or experienced IT professional looking for additional work, our part-time job solutions provide the perfect fit for your career goals.",
      highlights: [
        `Our part-time IT job recruitment services cater to various industries, offering positions in software development, IT support, cybersecurity, data analysis, and more. We collaborate with leading companies to provide professionals with roles that offer work-life balance, skill development, and career growth.
        
        ThePlacify ensures a seamless hiring process, matching the right talent with the right job opportunities. Whether you prefer remote work or on-site engagements, we provide personalized job recommendations that align with your skills and preferences.`
      ],
      imageSrc: ServiceImg
    };
  
    return <ServiceSection {...content} />;
};
