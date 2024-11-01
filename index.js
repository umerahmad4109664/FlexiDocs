const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('./database/database');
const userRouter = require('./routes/user.routes')
dotenv.config(); 
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev')); 
app.use(cors()); 

//routes
app.use("/api",userRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 