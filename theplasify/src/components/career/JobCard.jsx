const JobCard = ({ job, onClick }) => {
    return (
      <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-bold mb-2">{job.title}</h2>
        <p className="text-gray-600 mb-2">{job.category}</p>
        <p className="text-gray-600 mb-2">{job.description}</p>
        <p className="text-gray-600 mb-4">{job.type}</p>
        <button
          onClick={onClick}
          className="text-blue-600 hover:text-blue-800"
        >
          More Details →
        </button>
      </div>
    );
  };

  export default JobCard;
