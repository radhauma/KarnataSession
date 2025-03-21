import React, { useState } from "react";
import JobCard from "../components/JobCard";
import "../styles.css";

const jobData = [
  { title: "Front-End Developer", company: "Google", location: "Hyderabad, India", type: "Full-time", category: "Software Development" },
  { title: "UX/UI Designer", company: "Microsoft", location: "Washington, USA", type: "Part-time", category: "Design" },
  { title: "Marketing Manager", company: "Amazon", location: "Sydney, Australia", type: "Contract", category: "Marketing" },
  { title: "Software Engineer", company: "Facebook", location: "San Francisco, USA", type: "Full-time", category: "Software Development" },
  { title: "Data Scientist", company: "Netflix", location: "Toronto, Canada", type: "Full-time", category: "Data Science" },
  { title: "Product Manager", company: "Apple", location: "California, USA", type: "Full-time", category: "Product Management" },
  { title: "Cybersecurity Analyst", company: "IBM", location: "New York, USA", type: "Remote", category: "Cybersecurity" },
  { title: "HR Specialist", company: "LinkedIn", location: "London, UK", type: "Contract", category: "Human Resources" },
  { title: "DevOps Engineer", company: "Tesla", location: "Berlin, Germany", type: "Full-time", category: "Software Development" },
  { title: "Graphic Designer", company: "Adobe", location: "Los Angeles, USA", type: "Part-time", category: "Design" }
];

// Extract unique locations & categories
const uniqueLocations = [...new Set(jobData.map(job => job.location))];
const uniqueCategories = [...new Set(jobData.map(job => job.category))];

const Home = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [search, setSearch] = useState("");

  // Handle search input
  const handleSearch = (query) => {
    setSearch(query);
    const results = jobData.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(results);
  };

  return (
    <div>
      {/* Beautiful Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for jobs..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Filters Section */}
      <section className="filters">
        <div className="filter-item">
          <label htmlFor="location">Location</label>
          <select id="location">
            {uniqueLocations.map((location, index) => (
              <option key={index}>{location}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-item">
          <label htmlFor="category">Category</label>
          <select id="category">
            {uniqueCategories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Job Listings */}
      <section className="job-listings">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </section>
    </div>
  );
};

export default Home;
