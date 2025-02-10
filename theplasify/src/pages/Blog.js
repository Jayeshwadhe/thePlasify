// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Blog() {
//   const [blogs, setBlogs] = useState([]); // State to store blog data
//   const API_URL = "http://localhost:5000/api/blog/getAll"; // Backend API URL

//   // Fetch blogs from API
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setBlogs(response.data); // Store fetched blogs in state
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Render a loading state until data is fetched
//   if (!blogs.length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="bg-gray-100 min-h-screen">
//         {/* Blog Header Section */}
//         <div className="relative h-64 bg-gray-900 text-white">
//           <img
//             src={`http://localhost:5000/${blogs[0].header.image.replace("\\", "/")}`} // Dynamic header image
//             alt="Blog Background"
//             className="absolute inset-0 w-full h-full object-cover opacity-50"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-4xl font-bold">{blogs[0].header.title}</h1>
//           </div>
//         </div>

//         {/* Blog Content Section */}
//         <div className="max-w-5xl mx-auto px-4 py-10">
//           {blogs.map((blog) => (
//             <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//               {/* Blog Image */}
//               <img
//                 src={`http://localhost:5000/${blog.image.replace("\\", "/")}`} // Dynamic blog image
//                 alt={blog.title}
//                 className="w-full h-64 object-cover"
//               />

//               {/* Blog Text Content */}
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                   {blog.title.replace(/"/g, "")}
//                 </h2>
//                 <p className="text-gray-600 mb-4">{blog.content.replace(/"/g, "")}</p>

//                 {/* Blog Meta Info */}
//                 <div className="text-sm text-gray-500 mb-4">
//                   By <span className="font-semibold">{blog.author.replace(/"/g, "")}</span> |{" "}
//                   {new Date(blog.publishedDate).toLocaleDateString()} |{" "}
//                   <span className="font-semibold">{blog.category.replace(/"/g, "")}</span> |{" "}
//                   <span>{blog.metaInfo.comments.replace(/"/g, "")}</span>
//                 </div>

//                 {/* Read More Link */}
//                 <a href="#" className="text-teal-500 font-semibold hover:underline">
//                   Read More →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Commitment Section */}
//       <div className="bg-[#00BFB3] text-white text-center py-8">
//         <p className="text-lg font-medium max-w-4xl mx-auto">
//           Theplacify demonstrates its commitment to quality and cost, not
//           just by <span className="font-bold italic">“words”</span>, but by
//           actions and results.
//         </p>
//       </div>
//     </>
//   );
// }

// export default Blog;










































import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const BlogCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const blogData = {
    title: "Top IT Trends In 2019",
    date: "February 25th, 2019",
    author: "admin",
    category: "Uncategorized",
    shortDescription: "As entrepreneurs in the industry are aware, 2018 was a big year for innovation in tech. That trend is expected to continue in 2019. For entrepreneurs, this presents many opportunities — but also possible pitfalls. Yours may be the company that creates cutting-edge tech or is one of the earliest to implement it.",
    fullDescription: `As entrepreneurs in the industry are aware, 2018 was a big year for innovation in tech. That trend is expected to continue in 2019. For entrepreneurs, this presents many opportunities — but also possible pitfalls. Yours may be the company that creates cutting-edge tech or is one of the earliest to implement it.

    The tech industry continues to evolve rapidly, bringing new innovations and challenges. Companies need to stay ahead of these trends to remain competitive in the market. This includes understanding emerging technologies, adapting to changing consumer needs, and implementing robust security measures.

    Key areas of focus include artificial intelligence, cloud computing, cybersecurity, and digital transformation. Each of these domains presents unique opportunities for growth and innovation.`
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {!showDetails ? (
        // Blog Card View
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 bg-gray-800">
            <img 
              src="https://softstandard.com/wp-content/uploads/2016/05/ipad.jpg"
              alt="Blog header"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">{blogData.title}</h2>
            <p className="text-gray-600 mb-4">{blogData.shortDescription}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex space-x-4">
                <span>By {blogData.author}</span>
                <span>{blogData.date}</span>
                <span>{blogData.category}</span>
              </div>
              <button 
                onClick={() => setShowDetails(true)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Detailed View
        <div className="bg-white rounded-lg shadow-lg p-6">
          <button 
            onClick={() => setShowDetails(false)}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
          <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>
          <div className="flex space-x-4 text-sm text-gray-500 mb-6">
            <span>By {blogData.author}</span>
            <span>{blogData.date}</span>
            <span>{blogData.category}</span>
          </div>
          <div className="prose max-w-none">
            {blogData.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;