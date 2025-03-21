const express = require("express");
const Job = require("../models/Job");  // Import the Job model
const router = express.Router();

// ✅ Create a Job (POST /api/jobs)
router.post("/", async (req, res) => {
    try {
        const newJob = new Job(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get All Jobs (GET /api/jobs)
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get a Single Job by ID (GET /api/jobs/:id)
router.get("/:id", async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: "Job not found" });
        res.json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Delete a Job by ID (DELETE /api/jobs/:id)
router.delete("/:id", async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.json({ message: "Job deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
