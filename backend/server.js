require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors()); // Allows your HTML to talk to this server
app.use(express.json()); // Allows the server to read JSON data

// Debugging: Check if .env is working
console.log("Checking Connection...");
const uri = process.env.MONGO_URI;

if (!uri) {
    console.error("❌ ERROR: MONGO_URI is missing from .env file!");
} else {
    console.log("✅ URI found, attempting to connect...");
}

// Database Connection
mongoose.connect(uri)
    .then(() => console.log("🚀 Success: MongoDB Atlas Connected!"))
    .catch(err => console.error("❌ Connection Error:", err));

// Route to record Sign-In/Registration
app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Create a new user entry
        const newUser = new User({ email, password });
        await newUser.save();
        
        console.log(`👤 New access recorded: ${email}`);
        res.status(201).json({ message: "Access recorded in database" });
    } catch (err) {
        console.error("Save Error:", err);
        res.status(500).json({ error: "Failed to save to database" });
    }
});

// Basic Health Check
app.get('/', (req, res) => {
    res.send("Campus Library Backend is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`📡 Server active on http://localhost:${PORT}`);
});