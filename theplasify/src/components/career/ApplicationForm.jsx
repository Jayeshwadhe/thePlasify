import axios from "axios";
import { useState } from "react";

const ApplicationForm = ({ jobId }) => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      formDataToSend.append('jobId', jobId);
  
      try {
        await axios.post('http://localhost:5000/api/applicationsroutes/add', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Application submitted successfully!');
      } catch (error) {
        console.error('Error submitting application:', error);
        alert('Error submitting application. Please try again.');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-6 border-t">
        <h3 className="text-xl font-semibold mb-4">Apply for this position</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
            <textarea
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="4"
              onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Resume</label>
            <input
              type="file"
              required
              accept=".pdf,.doc,.docx"
              className="mt-1 block w-full"
              onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </div>
      </form>
    );
  };

  export default ApplicationForm;