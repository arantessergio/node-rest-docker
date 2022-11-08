const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const generateToken = (email) =>
  jwt.sign({ email }, secret, { expiresIn: "48h" });

exports.create = async (req, res) => {
  try {
    const result = await User.create(req.body);
    const token = generateToken(req.body.email);
    res.send({ ...result.toJSON(), token });
  } catch (error) {
    res.send(error);
  }
};

exports.auth = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exists = await User.exists({ email });

    if (exists) {
      const user = await User.findOne({ email, password }).exec();
      console.log(user);
      if (user && user._id) {
        const token = generateToken(email);
        return res.send({ ...user.toJSON(), token });
      }
    }
    return res.status(404).send();
  } catch (error) {
    res.send(error);
  }
};
