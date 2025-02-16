const Application = require('../modals/Application');

const applicationController = {
  submitApplication: async (req, res) => {
    try {
      const application = new Application({
        jobId: req.body.jobId,
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        coverLetter: req.body.coverLetter,
        resumePath: req.file.path,
      });

      await application.save();
      res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getApplicationsByJob: async (req, res) => {
    try {
      const applications = await Application.find({ jobId: req.params.jobId })
        .populate('jobId');
      res.json(applications);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = applicationController;