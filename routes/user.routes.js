const { createAccount } = require('../controllers/userController');

const userRouter = require('express').Router();


userRouter.post("/createaccount",createAccount);

module.exports = userRouter
