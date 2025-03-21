import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobList from "./pages/JobList";  
import Companies from "./pages/Companies";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chatbot />
    </Router>
  );
}

export default App;
