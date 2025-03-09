


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Job Category');
  const [type, setType] = useState('All Job Type');
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('https://api.theplacify.com/api/job');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All Job Category' || job.category === category;
    const matchesType = type === 'All Job Type' || job.type === type;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-8">Open Positions</h1>
      
      {/* Search and Filter Section */}
      <div className="flex flex-wrap gap-4 mb-8">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded-lg flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-2 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All Job Category</option>
          <option>admin</option>
          <option>Engineer</option>
          <option>Developer</option>
        </select>
        <select
          className="border p-2 rounded-lg"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>All Job Type</option>
          <option>Full Time</option>
          <option>Part Time</option>
        </select>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div 
            key={job._id}
            className="border rounded-lg p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/job/${job._id}`)}
          >
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.category}</p>
            <p className="text-gray-600 mb-4">{job.type}</p>
            <button className="text-blue-600 hover:text-blue-800">
              More Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
