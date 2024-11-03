const User = require('../models/user.model');


exports.createAccount = async (req, res) => {
    const {name,email,password} = req.body
    try {
        console.log(name,email,password)
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(200).json(savedUser);
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: "Failed" });
    }
  };