const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const applicationController = require('../controllers/ApplicationControllers');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'temp-uploads/'); // Temporary storage directory
  },
  filename: (req, file, cb) => {
    // Add timestamp to filename to prevent duplicates
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter to allow only specific file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.pdf', '.doc', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'));
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});


router.post('/add', upload.single('resume'), applicationController.submitApplication);
//router.get('/job/:jobId', applicationController.getApplicationsByJob);

module.exports = router;