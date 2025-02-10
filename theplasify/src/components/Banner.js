// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Banner() {
//   const [bannerData, setBannerData] = useState(null); // State to hold banner data
//   const API_URL = 'http://localhost:5000/api/banner/getAll'; // Backend API endpoint

//   // Fetch banner data from the API
//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         if (response.data && response.data.length > 0) {
//           setBannerData(response.data[0]); // Use the first banner in the array
//         }
//       } catch (error) {
//         console.error('Error fetching banner data:', error);
//       }
//     };

//     fetchBanner();
//   }, []);

//   // Render a loading state until data is fetched
//   if (!bannerData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='px-16'>
//       {/* Banner Section */}
//       <section
//         className="relative h-64 bg-cover bg-center flex items-center"
//         style={{
//           backgroundImage: `url('http://localhost:5000/${bannerData.backgroundImage.replace(
//             '\\',
//             '/'
//           )}')`, // Use the dynamic background image
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         {/* Text Content */}
//         <div className="relative z-10 text-white px-4 w-full text-center">
//           <h1 className="text-3xl font-bold">{bannerData.title.replace(/"/g, '')}</h1>
//         </div>
//       </section>

//       {/* About Us Content */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap gap-8">
//           {/* Left Image */}
//           <div className="w-full lg:w-1/2">
//             <img
//               src={`http://localhost:5000/${bannerData.backgroundImage.replace(
//                 '\\',
//                 '/'
//               )}`} // Use the same background image for featured image
//               alt="About Us"
//               className="rounded-lg shadow-md w-full h-80"
//             />
//           </div>

//           {/* Right Content */}
//           <div className="w-full lg:w-1/2 space-y-4">
//             <h2 className="text-2xl font-bold">{bannerData.subTitle.replace(/"/g, '')}</h2>
//             <p className="text-[#00BFB3] font-medium">{bannerData.description.replace(/"/g, '')}</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Banner;









































import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);
  const API_URL = 'http://localhost:5000/api/banner/getAll';

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data && response.data.length > 0) {
          setBannerData(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchBanner();
  }, []);

  if (!bannerData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00BFB3]"></div>
      </div>
    );
  }

  return (
    <div className="w-full px-8">
      {/* Banner Section */}
      <section 
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: `url('http://localhost:5000/${bannerData.backgroundImage.replace('\\', '/')}')`
        }}
      >
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
        <div className="absolute top-1/2 left-0 w-full h-32 bg-black/60 transform -translate-y-1/2"></div>
        
        {/* Banner Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-white text-5xl font-bold">
              {bannerData.title.replace(/"/g, '')}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 mb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Image */}
            <div className="w-full lg:w-1/2">
              <img
                // src={`http://localhost:5000/${bannerData.backgroundImage.replace('\\', '/')}`}
                src="/Left-content-about-us.jpg"
                alt="About Us"
                className="w-full h-[330px] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                {bannerData.subTitle.replace(/"/g, '')}
              </h2>
              
              <p className="text-[#00BFB3] text-lg font-medium">
                {bannerData.description.replace(/"/g, '')}
              </p>

              <p className="text-gray-600 leading-relaxed">
                SoftStandard Solutions offers a broad range of IT services such as global IT staffing, 
                professional consulting, systems analysis & development, systems integration, and 
                support or application maintenance services. With solid, broad-based experience, 
                we are confident in our ability to help our customers grow and improve their businesses. 
                More than likely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;