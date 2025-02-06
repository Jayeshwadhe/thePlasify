// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Directory to store uploaded images
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// // Multer file filter configuration
// const fileFilter = (req, file, cb) => {
//   const fileTypes = /jpeg|jpg|png|gif/;
//   const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimeType = fileTypes.test(file.mimetype);

//   if (extName && mimeType) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only images are allowed!'));
//   }
// };

// // Multer middleware for multiple fields
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
// }).fields([
//   { name: 'image', maxCount: 1 },
//   { name: 'bannerBackgroundImage', maxCount: 1 },
// ]);

// const {
//   getProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } = require('./productController');
// const {
//   getTabs,
//   getTabById,
//   createTab,
//   updateTab,
//   deleteTab,
// } = require('./tabController');
// // CRUD Routes
// router.get('/getAll', getProducts); // Get all products
// router.get('/getByID/:id', getProductById); // Get a single product by ID
// router.post('/add', upload, createProduct); // Create a new product
// router.put('/update/:id', upload, updateProduct); // Update a product
// router.delete('/delete/:id', deleteProduct); // Delete a product

// // CRUD Routes
// router.get('/tabGetAll', getTabs); // Get all tabs
// router.get('/tabGetById/:id', getTabById); // Get a single tab by ID
// router.post('/tabAdd', createTab); // Create a new tab
// router.put('/tabUpdate/:id', updateTab); // Update a tab
// router.delete('/tabDelete/:id', deleteTab); // Delete a tab

// module.exports = router;
























































const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// Multer file filter configuration
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif|webp/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'), false);
  }
};

// Updated multer middleware to handle multiple and single file uploads
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Middleware to handle multiple file upload scenarios
const handleFileUpload = (req, res, next) => {
  // Use array upload to handle multiple possible file fields
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'bannerBackgroundImage', maxCount: 1 },
    { name: 'tabImages', maxCount: 10 },
    { name: 'images', maxCount: 10 } // Added to catch potential different field names
  ])(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.status(400).json({ 
        message: 'File upload error', 
        error: err.message 
      });
    } else if (err) {
      // An unknown error occurred when uploading.
      return res.status(500).json({ 
        message: 'Unknown upload error', 
        error: err.message 
      });
    }
    
    // Log incoming files for debugging
    console.log('Uploaded files:', req.files);
    
    next();
  });
};

// Import controllers
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./productController');

const {
  getTabs,
  getTabById,
  createTab,
  updateTab,
  deleteTab,
} = require('./tabController');

// Product CRUD Routes
router.get('/getAll', getProducts);
router.get('/getByID/:id', getProductById);
router.post('/add', handleFileUpload, createProduct);
router.put('/update/:id', handleFileUpload, updateProduct);
router.delete('/delete/:id', deleteProduct);

// Tab CRUD Routes
router.get('/tabGetAll', getTabs);
router.get('/tabGetById/:id', getTabById);
router.post('/tabAdd', handleFileUpload, createTab);
router.put('/tabUpdate/:id', handleFileUpload, updateTab);
router.delete('/tabDelete/:id', deleteTab);

module.exports = router;