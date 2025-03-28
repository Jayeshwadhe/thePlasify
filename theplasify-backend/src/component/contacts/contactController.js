const Contact = require('./contactModel');

// Get all contact data
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact data', error });
  }
};

// Get a single contact section by ID
exports.getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact section not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact section', error });
  }
};

// Create a new contact section
exports.createContact = async (req, res) => {
    try {
      console.log('Request Body:', req.body); // Debugging: Logs request body
      console.log('Uploaded Files:', req.files); // Debugging: Logs uploaded files
  
      const { header, addresses, phones, fax } = req.body;
  
      // Check if headerImage was uploaded
      const headerImage = req.files?.headerImage?.[0]?.path || null;
  
      // Parse JSON fields only if they are strings
      const parsedHeader = typeof header === 'string' ? JSON.parse(header) : header;
      const parsedAddresses = typeof addresses === 'string' ? JSON.parse(addresses) : addresses;
      const parsedPhones = typeof phones === 'string' ? JSON.parse(phones) : phones;
  
      // Validate required fields
      if (!parsedHeader || !parsedHeader.title || !parsedHeader.subtitle) {
        return res.status(400).json({ message: 'Header title and subtitle are required' });
      }
      if (!Array.isArray(parsedAddresses) || parsedAddresses.length === 0) {
        return res.status(400).json({ message: 'Addresses must be a valid array and cannot be empty' });
      }
      if (!Array.isArray(parsedPhones) || parsedPhones.length === 0) {
        return res.status(400).json({ message: 'Phones must be a valid array and cannot be empty' });
      }
      if (!fax) {
        return res.status(400).json({ message: 'Fax is required' });
      }
  
      // Create and save the contact data
      const contactData = new Contact({
        header: {
          ...parsedHeader,
          image: headerImage, // Add image only if uploaded
        },
        addresses: parsedAddresses,
        phones: parsedPhones,
        fax,
      });
  
      await contactData.save();
      res.status(201).json({ message: 'Contact section created successfully', contactData });
    } catch (error) {
      console.error('Error creating contact section:', error); // Debugging: Logs error details
      res.status(500).json({ message: 'Error creating contact section', error: error.message });
    }
  };
  
  
  

  const nodemailer = require('nodemailer')

  exports.contactController = async (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aks969014@gmail.com',
        pass: 'bdum wrys vbwn yuxq'
      }
    })

    const { name, email, website, message } = req.body;
    try {


      const adminMailOptions = {
        from: 'aks969014@gmail.com',
        to: 'ceo@theplacify.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };

      await transporter.sendMail(adminMailOptions);

      // Send auto-reply
      const autoReplyOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting us',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,</p>
          <p>The Theplacify Team</p>
        `
      };

      await transporter.sendMail(autoReplyOptions);

      res.status(200).json({
        success: true,
        message: 'Message sent successfully'
      });



    } catch (error) {
      
    }


  }
  
  
  
  
  
  

// Update a contact section
exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subtitle, addresses, phones, fax } = req.body;

    const updatedData = {
      header: {
        title,
        subtitle,
      },
      addresses: JSON.parse(addresses),
      phones: JSON.parse(phones),
      fax,
    };

    if (req.file) {
      updatedData.header.image = req.file.path; // Update image if provided
    }

    const contact = await Contact.findByIdAndUpdate(id, updatedData, { new: true });
    if (!contact) {
      return res.status(404).json({ message: 'Contact section not found' });
    }

    res.status(200).json({ message: 'Contact section updated successfully', contact });
  } catch (error) {
    res.status(500).json({ message: 'Error updating contact section', error });
  }
};

// Delete a contact section
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact section not found' });
    }
    res.status(200).json({ message: 'Contact section deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contact section', error });
  }
};




exports.sendMailContact = async (req, res) => {
 

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASSWORD // your email password or app-specific password
    }
  });


  const { fullName, email, phone, message } = req.body;



}