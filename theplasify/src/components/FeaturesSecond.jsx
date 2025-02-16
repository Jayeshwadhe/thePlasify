// import React from 'react';

// const FeaturesSecond = () => {
//   // Static features data
//   const features = [
//     {
//       id: 1,
//       title: "Feature One",
//       description: "Experience cutting-edge technology with our innovative solutions designed to enhance your workflow.",
//       bgImage: "https://softstandard.com/wp-content/uploads/2016/05/bg1.jpg"
//     },
//     {
//       id: 2,
//       title: "Feature Two",
//       description: "Transform your business with powerful tools and seamless integration capabilities.",
//       bgImage: "https://softstandard.com/wp-content/uploads/2016/05/bg1.jpg"
//     },
//     {
//       id: 3,
//       title: "Feature Three",
//       description: "Stay ahead of the competition with our advanced analytics and reporting features.",
//       bgImage: "https://softstandard.com/wp-content/uploads/2016/05/bg1.jpg"
//     },
//     {
//       id: 4,
//       title: "Feature Four",
//       description: "Maximize efficiency with our user-friendly interface and automated processes.",
//       bgImage: "https://softstandard.com/wp-content/uploads/2016/05/bg1.jpg"
//     }
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {features.map((feature) => (
//           <FeatureCard
//             key={feature.id}
//             title={feature.title}
//             description={feature.description}
//             bgImage={feature.bgImage}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({ title, description, bgImage }) => {
//   return (
//     <div
//       className="relative bg-cover bg-center text-white rounded-md shadow-md overflow-hidden"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         height: '200px'
//       }}
//     >
//       <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-between p-4">
//         <div>
//           <h2 className="text-sm font-bold">{title}</h2>
//           <p className="text-xs">{description}</p>
//         </div>
//         <div className="mt-auto">
//           <button className="text-xs font-bold text-[#00BFB3] hover:text-[#008F86]">
//             READ MORE &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesSecond;




























































import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Feature One",
      description: "Experience cutting-edge technology with our innovative solutions designed to enhance your workflow.",
      bgImage: "https://softstandard.com/wp-content/uploads/2016/05/bg1.jpg"
    },
    {
      id: 2,
      title: "Feature Two",
      description: "Transform your business with powerful tools and seamless integration capabilities.",
      bgImage: "https://softstandard.com/wp-content/uploads/2016/05/bg1.jpg"
    },
    {
      id: 3,
      title: "Feature Three",
      description: "Stay ahead of the competition with our advanced analytics and reporting features.",
      bgImage: "https://softstandard.com/wp-content/uploads/2016/05/bg1.jpg"
    },
    {
      id: 4,
      title: "Feature Four",
      description: "Maximize efficiency with our user-friendly interface and automated processes.",
      bgImage: "https://softstandard.com/wp-content/uploads/2016/05/bg1.jpg"
    }
  ];

  return (
    <div className='px-16'>
      <div className="container    py-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            bgImage={feature.bgImage}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

const FeatureCard = ({ title, description, bgImage }) => {
  return (
    <div
      className="relative bg-cover bg-center text-white rounded-md shadow-md overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: '200px'
      }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-between p-4">
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="mt-auto">
          <button className="text-xs font-bold text-[#00BFB3] hover:text-[#008F86]">
            READ MORE &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;