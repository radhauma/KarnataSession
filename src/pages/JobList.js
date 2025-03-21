import React, { useState } from "react";
import "../styles.css";

const jobs = [
  { id: "1", title: "Front-End Developer", company: "Google", location: "Hyderabad, India", type: "Full-time" },
  { id: "2", title: "UX/UI Designer", company: "Microsoft", location: "Washington, USA", type: "Part-time" },
  { id: "3", title: "Marketing Manager", company: "Amazon", location: "Sydney, Australia", type: "Contract" },
  { id: "4", title: "Software Engineer", company: "Facebook", location: "San Francisco, USA", type: "Full-time" },
  { id: "5", title: "Data Scientist", company: "Netflix", location: "Toronto, Canada", type: "Full-time" },
  { id: "6", title: "Product Manager", company: "Apple", location: "California, USA", type: "Full-time" },
  { id: "7", title: "Cybersecurity Analyst", company: "IBM", location: "New York, USA", type: "Remote" },
  { id: "8", title: "HR Specialist", company: "LinkedIn", location: "London, UK", type: "Contract" },
  { id: "9", title: "DevOps Engineer", company: "Tesla", location: "Berlin, Germany", type: "Full-time" },
  { id: "10", title: "Graphic Designer", company: "Adobe", location: "Los Angeles, USA", type: "Part-time" }
];

const JobList = () => {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="job-list">
      <h2>Explore Job Opportunities</h2>

      {/* Enhanced Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="job-container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
