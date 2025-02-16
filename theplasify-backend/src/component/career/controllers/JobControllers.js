// server/controllers/jobController.js
const Job = require('../modals/Job');

const jobController = {
  










































  getAllJobs: async (req, res) => {
    try {
















      const sampleJobs = [
        {
          id: 1,
          title: "Senior Frontend Developer",
          location: "Remote",
          type: "Full-time",
          experience: "5+ years",
          department: "Engineering",
          description: "We are seeking a talented Senior Frontend Developer...",
          skills: [
            "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3",
            "Git", "REST APIs", "Responsive Design"
          ]
        },
        {
          id: 2,
          title: "UX/UI Designer",
          location: "San Francisco",
          type: "Full-time",
          experience: "3+ years",
          department: "Design",
          description: "Join our design team to create intuitive UI...",
          skills: [
            "Figma", "Adobe XD", "User Research", "Wireframing",
            "Prototyping", "Design Systems", "UI Design", "UX Design"
          ]
        },
        {
          id: 3,
          title: "Digital Marketing Manager",
          location: "New York",
          type: "Full-time",
          experience: "4+ years",
          department: "Marketing",
          description: "We're looking for a Digital Marketing Manager...",
          skills: [
            "SEO", "Google Analytics", "Content Strategy", 
            "Social Media Marketing", "Email Marketing", "A/B Testing", "Marketing Automation"
          ]
        },
        {
          id: 4,
          title: "Sales Development Representative",
          location: "London",
          type: "Full-time",
          experience: "1-3 years",
          department: "Sales",
          description: "Join our growing sales team...",
          skills: [
            "B2B Sales", "CRM Software", "Lead Generation",
            "Cold Calling", "Email Prospecting", "Sales Pipeline Management"
          ]
        },
        {
          id: 5,
          title: "DevOps Engineer",
          location: "Remote",
          type: "Full-time",
          experience: "3+ years",
          department: "Engineering",
          description: "We are looking for a DevOps Engineer...",
          skills: [
            "AWS", "Docker", "Kubernetes", "Jenkins",
            "Terraform", "Linux", "Shell Scripting", "Monitoring Tools"
          ]
        },
        {
          id: 6,
          title: "HR Business Partner",
          location: "New York",
          type: "Full-time",
          experience: "5+ years",
          department: "HR",
          description: "We're seeking an experienced HR Business Partner...",
          skills: [
            "Employee Relations", "Performance Management",
            "Talent Development", "Compensation & Benefits",
            "Recruitment", "HR Policies", "Employment Law"
          ]
        },
        {
          id: 7,
          title: "Product Manager",
          location: "San Francisco",
          type: "Full-time",
          experience: "4+ years",
          department: "Engineering",
          description: "Join our product team...",
          skills: [
            "Product Strategy", "Agile Methodologies", "User Stories",
            "Product Analytics", "Stakeholder Management", "Market Research",
            "Technical Background"
          ]
        },
        {
          id: 8,
          title: "Content Writer",
          location: "Remote",
          type: "Part-time",
          experience: "2+ years",
          department: "Marketing",
          description: "We're looking for a talented Content Writer...",
          skills: [
            "Content Writing", "SEO Writing", "Copywriting",
            "Content Strategy", "Editorial Calendar Management",
            "WordPress", "Research Skills"
          ]
        }
      ];
    
    
    
    
    
    
    
    
    
    
    
    
    












      const jobs = await Job.find();
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getJobById: async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.json(job);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  seedJobs: async (req, res) => {
    try {
      const sampleJobs = [
        {
          title: 'Hadoop Administrator',
          category: 'admin',
          type: 'Full Time',
          description: 'We are looking for an experienced Hadoop Administrator...',
        },
        {
          title: 'Hadoop Administrator1',
          category: 'admin',
          type: 'Full Time',
          description: 'Join our team as a Hadoop Administrator...',
        },
        {
          title: 'Kafka Administrator',
          category: 'admin',
          type: 'Full Time',
          description: 'Seeking a skilled Kafka Administrator...',
        },
        {
          title: 'Software Engineer-Kafka',
          category: 'Engineer',
          type: 'Full Time',
          description: 'Join our engineering team working with Kafka...',
        },
        {
          title: 'Software Developer',
          category: 'Developer',
          type: 'Full Time',
          description: 'Looking for a passionate Software Developer...',
        },
        {
          title: 'Software Engineer (Kafka)',
          category: 'Engineer',
          type: 'Full Time',
          description: 'Experience with Kafka required...',
        },
      ];

      await Job.insertMany(sampleJobs);
      res.json({ message: 'Sample jobs inserted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = jobController;