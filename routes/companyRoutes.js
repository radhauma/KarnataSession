const express = require("express");
const router = express.Router();
const Company = require("../models/Company"); // Ensure the path is correct

// GET /api/companies - Fetch all companies
router.get("/", async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        console.error("Error fetching companies:", error);
        res.status(500).json({ error: "Failed to fetch companies" });
    }
});

module.exports = router;
