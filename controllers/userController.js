const User = require('../models/user.model');
const bcrypt = require('bcrypt');


exports.createAccount = async (req, res) => {
    const {name,email,password} = req.body
    try {
      const existUser = await User.findOne({ email });

      if(existUser){
        return res.status(409).json({ message: "User already exists" });
      }
      
      const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
          email,
          name,
          password:hashedPassword
        });
        const savedUser = await user.save();
        res.status(200).send(user);
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: "Failed" });
    }
  };