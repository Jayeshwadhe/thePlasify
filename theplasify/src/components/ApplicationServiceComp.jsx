import ServiceSection from "../higherOrderComp/ServiceSection";
import ServiceImg from "../assest/applicationservice.jpg";

export const ApplicationServicesComp = () => {
    const content = {
      title: "SoftStandard Solutions Application Services",
      subtitle: "SoftStandard Solutions is a leading consulting in Application build, support and maintenance Projects.",
      description: "Technology Innovation is happening faster than ever before. Corporations are undergoing rapid changes with accelerated adoption of emerging technologies (e.g. Social, Mobile, Big Data and Cloud) which are disrupting traditional business models. SoftStandard Application Services bring together an industrialized, globally integrated approach to help companies strategically manage their application portfolios in support of business goals in this rapidly changing digital economy.",
      highlights: [
        `We deliver Application Services that help our clients create more value for the business, improve efficiency through IT Systems and reduce costs. We help drive business innovation by integrating next-generation technology into the enterprise IT landscape.

Soft Standard's expertise in Application Services helps enterprise improve their overall efficiency and effectiveness. SoftStandard offers flexible, innovative end to end solutions customized as per organizational needs.`
      ],
      imageSrc: ServiceImg
    };
  
    return <ServiceSection {...content} />;
  };