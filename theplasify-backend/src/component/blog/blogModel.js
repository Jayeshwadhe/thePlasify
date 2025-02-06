// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema(
//   {
//     header: {
//       title: { type: String, required: true }, // Header title
//       subtitle: { type: String, required: true }, // Header subtitle
//       image: { type: String, required: true }, // Header image URL or path
//     },
//     title: { type: String, required: true }, // Blog title
//     content: { type: String, required: true }, // Blog content
//     image: { type: String, required: true }, // Blog image URL or path
//     author: { type: String, required: true }, // Author's name
//     category: { type: String, required: true }, // Blog category
//     publishedDate: { type: Date, required: true }, // Publish date
//     metaInfo: {
//       comments: { type: String, required: true }, // Comments information
//     },
//   },
//   { timestamps: true } // Automatically adds createdAt and updatedAt fields
// );

// module.exports = mongoose.model('Blog', blogSchema);




























const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
   {
     header: {
       title: { type: String, required: true },
       subtitle: { type: String, default: '' },
       image: { type: String, default: '' } // Make image optional
     },
     title: { type: String, required: true },
     content: { type: String, required: true },
     image: { type: String, default: '' }, // Make image optional
     author: { type: String, required: true },
     category: { type: String, required: true },
     publishedDate: { type: Date, required: true },
     metaInfo: {
       keywords: { type: String, default: '' },
       description: { type: String, default: '' },
       tags: { type: [String], default: [] },
       comments: { type: String, default: '' } // Change to optional with default
     },
   },
   { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);