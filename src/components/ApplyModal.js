import React, { useState } from "react";
import "../styles.css";

const ApplyModal = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    job: jobTitle,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${jobTitle}`);
    onClose(); // Close modal after submission
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to handle file uploads
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("job", jobTitle);
    formDataToSend.append("resume", formData.resume);

    try {
        const response = await fetch("http://localhost:5000/api/apply", {
            method: "POST",
            body: formDataToSend, 
        });

        // Check if the response is okay
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to submit application");
        }

        alert(`Application submitted successfully for ${jobTitle}`);
        onClose(); // Close modal after successful submission
    } catch (error) {
        console.error("API Error:", error);
        alert(`Application submission failed: ${error.message}`);
    }
};


  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Apply for {jobTitle}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" required onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" required onChange={handleChange} />
          
          <label>Upload Resume:</label>
          <input type="file" name="resume" accept=".pdf,.docx" required onChange={handleFileChange} />

          <button type="submit">Submit Application</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ApplyModal;
