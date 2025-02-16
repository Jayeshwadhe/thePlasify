const express = require('express');
const router = express.Router();
const jobController = require('../controllers/JobControllers');

router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.post('/seed', jobController.seedJobs);

module.exports = router;