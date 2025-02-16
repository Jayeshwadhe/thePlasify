import React from 'react';

const BannerBlog = () => {
  // Static data instead of API fetch
  const bannerData = {
    title: "Welcome to SoftStandard Solutions",
    subTitle: "Your Trusted Technology Partner",
    description: "Empowering businesses with innovative IT solutions and professional services",
    backgroundImage: "https://softstandard.com/wp-content/uploads/2016/05/hand.jpg"  // You'll need to place this image in your public folder
  };

  return (
    <div className="w-full bg-white">
      {/* Banner Section */}
      <section 
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerData.backgroundImage})`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute top-1/2 left-0 w-full h-32 bg-black/60 transform -translate-y-1/2"></div>
        
        {/* Banner Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-white text-5xl font-bold">
              {bannerData.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */} 





{/* 
      <section className="py-16 mb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
            <div className="w-full lg:w-1/2">
              <img
                src="/Left-content-about-us.jpg"
                alt="About Us"
                className="w-full h-[330px] object-cover rounded-lg shadow-md"
              />
            </div>

          
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
                {bannerData.subTitle}
              </h2>
              
              <p className="text-[#00BFB3] text-lg font-medium">
                {bannerData.description}
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
      </section>   */}









    </div>
  );
};

export default BannerBlog;