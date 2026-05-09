const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }, // In a real app, we would hash this!
    loginAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);