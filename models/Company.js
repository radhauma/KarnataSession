const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: String,
    industry: String,
    location: String,
    description: String
});

// Prevent re-compiling the model
const Company = mongoose.models.Company || mongoose.model("Company", companySchema);

module.exports = Company;
