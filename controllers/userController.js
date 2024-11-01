const {user} = require('../models/user.model')

exports.createAccount = async (req, res) => {
    const {name,email,password} = req.body
    try {
        console.log(name,email,password)
    } catch (error) {
      return res.status(200).send({ message: "Failed" });
    }
  };