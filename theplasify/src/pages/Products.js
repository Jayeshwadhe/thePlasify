// import React, { useState, useEffect } from "react";
// import TabSection from "../components/TabSection";
// import axios from "axios";
// import ProductTab from "../components/ProductTab";
// import SustainabilityPillars from "../components/SustainPiller";

// function Products() {
//   const [products, setProducts] = useState([]); // State to hold products data
//   const [banner, setBanner] = useState(null); // State to hold banner data
//   const API_URL = "https://api.theplacify.com/api/products/getAll"; // Backend API endpoint

//   // Fetch products from the API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(API_URL);

//         // Set products data
//         setProducts(response.data);

//         // Set banner data (assuming first product has the banner data)
//         const firstProductWithBanner = response.data.find(
//           (product) => product.banner
//         );
//         if (firstProductWithBanner) {
//           setBanner(firstProductWithBanner.banner);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Render a loading state until data is fetched
//   if (!products.length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="px-0 lg:px-20">
//       {/* Banner Section */}
//       {banner && (
//         <section
//           className="relative h-72 w-[100%] mx-auto bg-cover bg-center flex items-center"
//           style={{
//             backgroundImage: `url('https://api.theplacify.com/${banner.backgroundImage.replace(
//               "\\",
//               "/"
//             )}')`,
//           }}
//         >
//           <div className="absolute top-1/2 left-0 h-32 bg-black/60 transform -translate-y-1/2 flex items-center justify-start w-full"></div>
//           <div className="relative z-10 text-white font-bold text-start pl-11">
//             <h1 className="text-5xl font-bold">
//               {/* {banner.title.replace(/"/g, "")} */}
//               {"Products"}
//             </h1>
//           </div>
//         </section>
//       )}

//       {/* Products Content */}

    
// {/* Products Content */}
// <div className="p-3 space-y-8 w-[100%] mb-16 mx-auto">
//   {Array.isArray(products) && products.length > 0 ? (
//     products.map((product) => (
//       <div key={product?._id} className="md:flex items-center gap-6">
//         {/* Left Image Section */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src={`https://api.theplacify.com/${product?.image?.replace("\\", "/")}`}
//             alt={product?.title || "Product Image"}
//             className="rounded-md shadow-md w-full mr-3 h-auto"
//           />
//         </div>

//         {/* Right Text Content Section */}
//         <div className="w-full mt-4 md:w-1/2">
//           <h2 className="text-2xl font-semibold text-black-800">
//             {product?.title?.replace(/"/g, "") || "No Title"}
//           </h2>
//           <h3 className="text-lg text-[#00BFB3] font-normal mt-4 mb-2">
//             {product?.subtitle?.replace(/"/g, "") || "No Subtitle"}
//           </h3>
//           <p className="mt-4 text-gray-600">
//             {product?.description?.replace(/"/g, "") ||
//               "No Description Available"}
//           </p>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p className="text-center text-gray-500">No products available</p>
//   )}
// </div>


//       {/* Tab Section */}
//       {/* <TabSection /> */}
//       <ProductTab />

//       {/* Commitment Section */}
    
//       <SustainabilityPillars/>
//     </div>
//   );
// }

// export default Products;










































import React, { useState, useEffect } from "react";
import TabSection from "../components/TabSection";
import axios from "axios";
import ProductTab from "../components/ProductTab";
import SustainabilityPillars from "../components/SustainPiller";

function Products() {
  const [products, setProducts] = useState([]); // State to hold products data
  const [banner, setBanner] = useState(null); // State to hold banner data
  const [loading, setLoading] = useState(true); // State to track loading status
  const API_URL = "https://api.theplacify.com/api/products/getAll"; // Backend API endpoint

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);

        // Set products data
        setProducts(response.data);

        // Set banner data (assuming first product has the banner data)
        const firstProductWithBanner = response.data.find(
          (product) => product.banner
        );
        if (firstProductWithBanner) {
          setBanner(firstProductWithBanner.banner);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Custom loader component
  const Loader = () => (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#00BFB3]"></div>
      <p className="ml-4 text-gray-600 font-medium">Loading products...</p>
    </div>
  );

  // Render the loader while data is being fetched
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="px-0 lg:px-20">
      {/* Banner Section */}
      {banner && (
        <section
          className="relative h-72 w-[100%] mx-auto bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url('https://api.theplacify.com/${banner.backgroundImage.replace(
              "\\",
              "/"
            )}')`,
          }}
        >
          <div className="absolute top-1/2 left-0 h-32 bg-black/60 transform -translate-y-1/2 flex items-center justify-start w-full"></div>
          <div className="relative z-10 text-white font-bold text-start pl-11">
            <h1 className="text-5xl font-bold">
              {/* {banner.title.replace(/"/g, "")} */}
              {"Products"}
            </h1>
          </div>
        </section>
      )}

      {/* Products Content */}
      <div className="p-3 space-y-8 w-[100%] mb-16 mx-auto">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product?._id} className="md:flex items-center gap-6">
              {/* Left Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={`https://api.theplacify.com/${product?.image?.replace("\\", "/")}`}
                  alt={product?.title || "Product Image"}
                  className="rounded-md shadow-md w-full mr-3 h-auto"
                />
              </div>

              {/* Right Text Content Section */}
              <div className="w-full mt-4 md:w-1/2">
                <h2 className="text-2xl font-semibold text-black-800">
                  {product?.title?.replace(/"/g, "") || "No Title"}
                </h2>
                <h3 className="text-lg text-[#00BFB3] font-normal mt-4 mb-2">
                  {product?.subtitle?.replace(/"/g, "") || "No Subtitle"}
                </h3>
                <p className="mt-4 text-gray-600">
                  {product?.description?.replace(/"/g, "") ||
                    "No Description Available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>

      {/* Tab Section */}
      {/* <TabSection /> */}
      <ProductTab />

      {/* Commitment Section */}
      <SustainabilityPillars/>
    </div>
  );
}

export default Products;