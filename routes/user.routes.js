const { createAccount, signIn } = require('../controllers/userController');

const userRouter = require('express').Router();


userRouter.post("/createaccount",createAccount);
userRouter.post("/signIn",signIn);

module.exports = userRouter
