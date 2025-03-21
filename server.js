require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const jobRoutes = require("./routes/jobRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Define Company Schema
const companySchema = new mongoose.Schema({
    name: String,
    industry: String,
    location: String,
    description: String,
});

const Company = mongoose.model("Company", companySchema);

// Define Job Application Schema
const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    job: String,
    resume: String,
    appliedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model("Application", applicationSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// API Route to Fetch Companies
app.get("/api/companies", async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        console.error("Error fetching companies:", error);
        res.status(500).json({ error: "Failed to fetch companies" });
    }
});

// API Route for Job Applications
app.post("/api/apply", upload.single("resume"), async (req, res) => {
    try {
        console.log("Received request body:", req.body);  
        console.log("Uploaded file:", req.file);  

        const { name, email, job } = req.body; 
        const resumePath = req.file ? req.file.path : "";

        const newApplication = new Application({ 
            name, 
            email, 
            job,  
            resume: resumePath 
        });

        console.log("New Application Data:", newApplication);  

        await newApplication.save();
        res.status(201).json({ message: "Application submitted successfully!" });
    } catch (error) {
        console.error("Error saving application:", error);
        res.status(500).json({ error: "Failed to submit application" });
    }
});



// API Routes
app.use("/api/jobs", jobRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});


const companyRoutes = require("./routes/companyRoutes"); // Import the company routes

// Use company routes
app.use("/api/companies", companyRoutes);




