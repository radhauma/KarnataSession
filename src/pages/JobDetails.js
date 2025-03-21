import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";

const jobData = [
  { id: "1", title: "Front-End Developer", company: "Google", description: "We are looking for a skilled Front-End Developer to join our team.", location: "Hyderabad, India", type: "Full-time" },
  { id: "2", title: "UX/UI Designer", company: "Microsoft", description: "Seeking a creative UX/UI Designer to design user-friendly interfaces.", location: "Washington, USA", type: "Part-time" },
  { id: "3", title: "Marketing Manager", company: "Amazon", description: "Looking for a Marketing Manager with a strong background in digital marketing.", location: "Sydney, Australia", type: "Contract" },
  { id: "4", title: "Software Engineer", company: "Facebook", description: "Join our team as a Software Engineer and build innovative products.", location: "San Francisco, USA", type: "Full-time" },
  { id: "5", title: "Data Scientist", company: "Netflix", description: "Seeking a Data Scientist with expertise in AI and Machine Learning.", location: "Toronto, Canada", type: "Full-time" },
  { id: "6", title: "Product Manager", company: "Apple", description: "Looking for an experienced Product Manager to lead our product teams.", location: "California, USA", type: "Full-time" },
  { id: "7", title: "Cybersecurity Analyst", company: "IBM", description: "We need a Cybersecurity Analyst to protect our digital infrastructure.", location: "New York, USA", type: "Remote" },
  { id: "8", title: "HR Specialist", company: "LinkedIn", description: "Join LinkedIn as an HR Specialist to manage employee engagement.", location: "London, UK", type: "Contract" },
  { id: "9", title: "DevOps Engineer", company: "Tesla", description: "Hiring a DevOps Engineer to streamline our cloud operations.", location: "Berlin, Germany", type: "Full-time" },
  { id: "10", title: "Graphic Designer", company: "Adobe", description: "We are looking for a talented Graphic Designer to create visual content.", location: "Los Angeles, USA", type: "Part-time" }
];

const JobDetails = () => {
  const { id } = useParams();
  const job = jobData.find((job) => job.id === id);

  if (!job) {
    return <div className="job-details">Job not found.</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
