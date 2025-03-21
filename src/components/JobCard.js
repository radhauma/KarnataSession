import React, { useState } from "react";
import ApplyModal from "./ApplyModal";

const JobCard = ({ title, company, location, type }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>Company: {company}</p>
      <p>Location: {location}</p>
      <p>{type}</p>
      <button className="apply-btn" onClick={() => setShowModal(true)}>Apply Now</button>

      {showModal && <ApplyModal jobTitle={title} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default JobCard;

