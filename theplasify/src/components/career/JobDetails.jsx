// const JobDetails = ({ job, onClose }) => {
//     return (
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-4">
//           <h2 className="text-2xl font-bold">{job.title}</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             ×
//           </button>
//         </div>
//         <div className="mb-4">
//           <p className="text-gray-600">Job ID: {job._id}</p>
//           <p className="text-gray-600">Category: {job.category}</p>
        
//           <p className="text-gray-600">Type: {job.type}</p>
//         </div>
//         <div className="prose max-w-none">
//           <h3 className="text-xl font-semibold mb-2">Job Description</h3>
//           <p>{job.description}</p>
//         </div>
//       </div>
//     );
//   };

  
//   export default JobDetails


























































import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });
  const [loading, setLoading] = useState(true);
  const [submitStatus, setSubmitStatus] = useState({ status: '', message: '' });

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/job/${id}`);
      setJob(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching job details:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    formDataToSend.append('jobId', id);

    try {
      await axios.post('http://localhost:5000/api/applications', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSubmitStatus({ 
        status: 'success', 
        message: 'Application submitted successfully!' 
      });
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null
      });
    } catch (error) {
      setSubmitStatus({ 
        status: 'error', 
        message: 'Error submitting application. Please try again.' 
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Job not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/career')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} />
        Back to Jobs
      </button>

      {/* Job Details Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600">Category: {job.category}</p>
            <p className="text-gray-600">Type: {job.type}</p>
          </div>
          <div>
            <p className="text-gray-600">Job ID: {job._id}</p>
          </div>
        </div>
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="whitespace-pre-line">{job.description}</p>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Apply for this Position</h2>
        
        {submitStatus.message && (
          <div className={`p-4 rounded-lg mb-6 ${
            submitStatus.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter
            </label>
            <textarea
              required
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="6"
              value={formData.coverLetter}
              onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resume
            </label>
            <input
              type="file"
              required
              accept=".pdf,.doc,.docx"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;