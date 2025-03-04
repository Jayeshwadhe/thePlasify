import React, { useState, useEffect } from "react";
import TabSection from "../components/TabSection";
import axios from "axios";
import ProductTab from "../components/ProductTab";
import SustainabilityPillars from "../components/SustainPiller";

function Products() {
  const [products, setProducts] = useState([]); // State to hold products data
  const [banner, setBanner] = useState(null); // State to hold banner data
  const API_URL = "http://localhost:5000/api/products/getAll"; // Backend API endpoint

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Render a loading state until data is fetched
  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-0 lg:px-20">
      {/* Banner Section */}
      {banner && (
        <section
          className="relative h-72 w-[100%] mx-auto bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url('http://localhost:5000/${banner.backgroundImage.replace(
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

      {/* <section className="py-16 bg-white">
        <div className=" max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
            >
              <img
                src={`http://localhost:5000/${product.image.replace('\\', '/')}`} // Dynamic image URL
                alt={product.title}
                className="rounded-md w-full h-40 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">
                {product.title.replace(/"/g, '')}
              </h2>
              <h3 className="text-lg text-[#00BFB3] font-medium mb-2">
                {product.subtitle.replace(/"/g, '')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description.replace(/"/g, '')}
              </p>
            </div>
          ))}
        </div>
      </section> */}
      
{/* Products Content */}
<div className="p-3 space-y-8 w-[100%] mb-16 mx-auto">
  {Array.isArray(products) && products.length > 0 ? (
    products.map((product) => (
      <div key={product?._id} className="md:flex items-center gap-6">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={`http://localhost:5000/${product?.image?.replace("\\", "/")}`}
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
      {/* <div className="bg-[#00BFB3] text-white text-center  py-16">
        <p className="text-3xl font-normal max-w-4xl mx-auto leading-relaxed">
          Theplacify demonstrates its commitment to quality and cost, not just
          by <span className="font-bold italic">“words”</span>, but by actions
          and results.
        </p>
      </div> */}
      <SustainabilityPillars/>
    </div>
  );
}

export default Products;
