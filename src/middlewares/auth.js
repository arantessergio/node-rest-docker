const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const User = require("../models/user");

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).send({ error: "You dont provided token." });
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err)
        return res.status(403).send({ error: "You are not authenticated" });
      if (decoded) {
        req.decoded = decoded;

        next();
      }
    });
  }
};

module.exports = { validateToken };
