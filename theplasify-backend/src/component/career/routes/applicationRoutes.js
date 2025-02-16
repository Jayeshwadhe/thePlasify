const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const applicationController = require('../controllers/ApplicationControllers');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post('/', upload.single('resume'), applicationController.submitApplication);
router.get('/job/:jobId', applicationController.getApplicationsByJob);

module.exports = router;