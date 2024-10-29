// database.js
const mongoose = require('mongoose');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/flexidocs';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB with Mongoose'))
    .catch(err => console.error('Could not connect to MongoDB', err));

module.exports = mongoose;
