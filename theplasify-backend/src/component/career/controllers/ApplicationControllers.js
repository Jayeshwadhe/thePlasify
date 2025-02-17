const Application = require('../modals/Application');
const Job = require('../modals/Job');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Configure email transporter


const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can change this to your preferred email service
  auth: {
    user: 'aks969014@gmail.com', // Replace with your email
    pass: 'bdum wrys vbwn yuxq'     // Replace with your app password
  }
});


const applicationController = {





  submitApplication: async (req, res) => {
    try {
      const {
        jobId,
        fullName,
        email,
        phone,
        coverLetter
      } = req.body;

      // Get the job details (assuming you have a Job model)
      const job = await Job.findById(jobId);
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }

      // Prepare email HTML content
      const emailContent = `
        <h2>New Job Application Received</h2>
        <h3>Position Details:</h3>
        <p><strong>Job Title:</strong> ${job.title}</p>
        <p><strong>Job ID:</strong> ${jobId}</p>
        
        <h3>Applicant Information:</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Cover Letter:</h3>
        <p>${coverLetter.replace(/\n/g, '<br>')}</p>
      `;

      // Email options
      const mailOptions = {
        from: 'aks969014@gmail.com',     // Replace with your email
        to: 'info@theplacify.com',         // Replace with HR email
        cc: email,                        // Send copy to applicant
        subject: `New Application: ${job.title} - ${fullName}`,
        html: emailContent,
        attachments: [
          {
            filename: req.file.originalname,
            path: req.file.path
          }
        ]
      };

      // Send email
      await transporter.sendMail(mailOptions);

      // Delete the uploaded file after sending
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });

      res.status(200).json({ 
        message: 'Application submitted successfully. You will receive a confirmation email shortly.' 
      });

    } catch (error) {
      console.error('Error sending application:', error);
      res.status(500).json({ 
        message: 'Error submitting application. Please try again.' 
      });
    }
  }








};

module.exports = applicationController;