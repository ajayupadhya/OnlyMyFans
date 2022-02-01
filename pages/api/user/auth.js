import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
const jwt = require("jsonwebtoken");
const encrypt = require("bcryptjs");

export default async function handler(req, res) {
  const { token } = req.body;

  try {
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decode.user_Id);
    if (!user) {
      res.status(400).json({
        success: false,
        error: "Invalid token",
      });
    }
    user.password = undefined;
    res.status(200).json({
      success: true,

      results: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Invalid token",
    });
  }
}
