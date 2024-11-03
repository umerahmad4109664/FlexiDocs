// models/User.js
const mongoose = require('mongoose');

// Define the schema for a User
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    password:{
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
