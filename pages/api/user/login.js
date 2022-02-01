import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
const jwt = require("jsonwebtoken");
const encrypt = require("bcryptjs");

export default async function handler(req, res) {
  await dbConnect();

  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json({ error: "Please Enter All fields" });
    }

    const user = await User.findOne({ email });

    if (user) {
      const token = await jwt.sign(
        {
          user_Id: user._id,
          email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "8 days" }
      );

      const pass = user.password;

      const passMatch = await encrypt.compare(password, pass);

      console.log(passMatch);

      user.password = undefined;
      if (passMatch) {
        res.status(200).json({
          success: true,
          results: user,
          token: token,
        });
      } else {
        res.status(400).json({
          success: false,
          error: "Please Enter correct password",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        error: "User not found",
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: "Post Not working" });
  }
}
