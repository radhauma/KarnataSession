import React, { useEffect, useState } from "react";
import "../styles.css";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/companies")  // Make sure the URL matches your backend
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  return (
    <div className="companies-page">
      <h2>Partner Companies</h2>
      <br />
      <br />
      <div className="company-list">
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <div key={index} className="company-card">
              <h3>{company.name}</h3>
              <p><strong>Industry:</strong> {company.industry}</p>
              <p><strong>Location:</strong> {company.location}</p>
              <p>{company.description}</p>
            </div>
          ))
        ) : (
          <p>Loading companies...</p>
        )}
      </div>
    </div>
  );
};

export default Companies;
