const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Company = require("./models/Company");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

const companies = [
    { name: "Google", industry: "Technology", location: "Hyderabad, India", description: "A multinational technology company specializing in Internet services and AI." },
    { name: "Microsoft", industry: "Software", location: "Washington, USA", description: "Leading company in software development and cloud computing." },
    { name: "Amazon", industry: "E-Commerce", location: "Sydney, Australia", description: "A global leader in e-commerce, cloud computing, and digital streaming services." },
    { name: "Facebook", industry: "Social Media", location: "San Francisco, USA", description: "The world's leading social networking service connecting billions of users." },
    { name: "Netflix", industry: "Entertainment", location: "Toronto, Canada", description: "A streaming service providing high-quality movies and TV shows globally." },
    { name: "Apple", industry: "Technology", location: "California, USA", description: "Innovative consumer electronics and software company, known for iPhone and MacBooks." },
    { name: "IBM", industry: "Cybersecurity & Cloud", location: "New York, USA", description: "A global technology leader in cybersecurity, AI, and enterprise cloud solutions." },
    { name: "LinkedIn", industry: "Professional Networking", location: "London, UK", description: "A social network for professionals connecting job seekers and employers." },
    { name: "Tesla", industry: "Automotive & AI", location: "Berlin, Germany", description: "Pioneering the future of electric vehicles and autonomous driving technology." },
    { name: "Adobe", industry: "Design & Creativity", location: "Los Angeles, USA", description: "Industry leader in creative software, including Photoshop and Illustrator." },
    { name: "SpaceX", industry: "Aerospace", location: "Texas, USA", description: "Revolutionizing space travel with reusable rockets and interplanetary missions." },
    { name: "Salesforce", industry: "CRM & Cloud", location: "San Francisco, USA", description: "The world's leading customer relationship management (CRM) platform." },
    { name: "Tata Consultancy Services", industry: "IT Services", location: "Mumbai, India", description: "One of the largest global IT consulting and business solutions companies." },
    { name: "Infosys", industry: "IT & Business Consulting", location: "Bangalore, India", description: "An Indian multinational providing IT consulting and outsourcing solutions." },
    { name: "Airbnb", industry: "Hospitality & Travel", location: "California, USA", description: "A global marketplace for home rentals and unique travel experiences." }
];

// Insert Data into Database
const seedDatabase = async () => {
    try {
        await Company.deleteMany(); // Clear existing data
        await Company.insertMany(companies);
        console.log("✅ Companies seeded successfully");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error seeding database:", error);
        mongoose.connection.close();
    }
};

seedDatabase();

