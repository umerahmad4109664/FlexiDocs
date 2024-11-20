const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


exports.createAccount = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      name,
      password: hashedPassword
    });
    const savedUser = await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: "Failed" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body
  try {
    console.log(email)
    const user = await User.findOne({ email })
    if (!user) return res.status(404).send({ message: "Invalid Credentials" })

    const matchedPassword = await bcrypt.compare(password, user.password)
    if (!matchedPassword) return res.status(404).send({ message: "Invalid Credentials" })

    const userData = {email:user.email,name:user.name}
    const secretKey = process.env.SECRET_KEY

      const token = jwt.sign(userData, secretKey);

    return res.status(200).send(token)

  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: "Failed" });
  }
};