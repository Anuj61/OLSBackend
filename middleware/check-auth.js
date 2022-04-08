const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWTSECRET);
    req.userDataA = {
      email: decodedToken.email,
      password: decodedToken.password,
      id: decodedToken.id,
      role: decodedToken.role,
    };
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "You are not authenticated!!!",
    });
  }
};
