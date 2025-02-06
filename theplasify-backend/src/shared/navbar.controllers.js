// // File: controllers/navbarController.js
// const Header = require('../shared/navbar.model');
// const upload = require('../../uploads/multer');

// // Get All Header Data
// exports.getAllHeaders = async (req, res) => {
//   try {
//     const headers = await Header.find();
//     res.status(200).json(headers);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching headers', error });
//   }
// };

// // Get Single Header by ID
// exports.getHeaderById = async (req, res) => {
//   try {
//     const header = await Header.findById(req.params.id);
//     if (!header) {
//       return res.status(404).json({ message: 'Header not found' });
//     }
//     res.status(200).json(header);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching header', error });
//   }
// };

// // Create a New Header
// exports.createHeader = [
//   upload.single('logo'), // Middleware to handle file upload
//   async (req, res) => {
//     try {
//       const headerData = {
//         ...req.body,
//         logo: req.file ? `/uploads/${req.file.filename}` : undefined, // Save logo path if uploaded
//       };

//       const header = new Header(headerData);
//       await header.save();
//       res.status(201).json({ message: 'Header created successfully', header });
//     } catch (error) {
//       res.status(500).json({ message: 'Error creating header', error });
//     }
//   },
// ];


// // Update an Existing Header by ID
// exports.updateHeader = async (req, res) => {
//   try {
//     const header = await Header.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!header) {
//       return res.status(404).json({ message: 'Header not found' });
//     }
//     res.status(200).json({ message: 'Header updated successfully', header });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating header', error });
//   }
// };

// // Delete a Header by ID
// exports.deleteHeader = async (req, res) => {
//   try {
//     const header = await Header.findByIdAndDelete(req.params.id);
//     if (!header) {
//       return res.status(404).json({ message: 'Header not found' });
//     }
//     res.status(200).json({ message: 'Header deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting header', error });
//   }
// };


































const Navbar = require('../shared/navbar.model');
const upload = require('../../uploads/multer');

// Get All Header Data
exports.getAllHeaders = async (req, res) => {
  try {
    const headers = await Navbar.find();
    res.status(200).json(headers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching headers', error });
  }
};

// Get Single Header by ID
exports.getHeaderById = async (req, res) => {
  try {
    const header = await Navbar.findById(req.params.id);
    if (!header) {
      return res.status(404).json({ message: 'Header not found' });
    }
    res.status(200).json(header);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching header', error });
  }
};

// Create a New Header
exports.createHeader = [
  upload.fields([{ name: 'logo' }, { name: 'icon' }]), // Handle both logo and icon uploads
  async (req, res) => {
    try {
      const headerData = {
        tollFree: req.body.tollFree,
        socialLinks: req.body.socialLinks,
        services: req.body.services,
        otherLinks: req.body.otherLinks,
        logo: req.files['logo'] ? `/uploads/${req.files['logo'][0].filename}` : undefined,
        icon: req.files['icon'] ? `/uploads/${req.files['icon'][0].filename}` : undefined,
      };

      const header = new Navbar(headerData);
      await header.save();
      res.status(201).json({ message: 'Header created successfully', header });
    } catch (error) {
      res.status(500).json({ message: 'Error creating header', error });
    }
  },
];

// Update an Existing Header by ID
exports.updateHeader = [
  upload.fields([{ name: 'logo' }, { name: 'icon' }]), // Handle file updates
  async (req, res) => {
    try {
      const existingHeader = await Navbar.findById(req.params.id);
      if (!existingHeader) {
        return res.status(404).json({ message: 'Header not found' });
      }

      const updatedData = {
        tollFree: req.body.tollFree,
        socialLinks: req.body.socialLinks,
        services: req.body.services,
        otherLinks: req.body.otherLinks,
        logo: req.files['logo'] ? `/uploads/${req.files['logo'][0].filename}` : existingHeader.logo,
        icon: req.files['icon'] ? `/uploads/${req.files['icon'][0].filename}` : existingHeader.icon,
      };

      const updatedHeader = await Navbar.findByIdAndUpdate(req.params.id, updatedData, { new: true });
      res.status(200).json({ message: 'Header updated successfully', updatedHeader });
    } catch (error) {
      res.status(500).json({ message: 'Error updating header', error });
    }
  },
];

// Delete a Header by ID
exports.deleteHeader = async (req, res) => {
  try {
    const header = await Navbar.findByIdAndDelete(req.params.id);
    if (!header) {
      return res.status(404).json({ message: 'Header not found' });
    }
    res.status(200).json({ message: 'Header deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting header', error });
  }
};
