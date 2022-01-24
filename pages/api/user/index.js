import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
const jwt = require("jsonwebtoken");
const encrypt = require("bcryptjs");

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const pets = await User.find({});
        res.status(200).json({ success: true, data: pets });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { name, email, password } = req.body;
        if (!(name && email && password)) {
          return res.status(400).json({ error: "Please Enter All fields" });
        }

        const checkEmail = await User.findOne({ email });

        console.log(checkEmail);

        if (checkEmail) {
          return res.status(400).json({ error: "User Already Exist" });
        }

        const pass = await encrypt.hash(password, 10);

        const user = await User.create({
          name,
          email,
          password: pass,
        });

        const token = await jwt.sign(
          {
            user_Id: user._id,
            email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "8 days" }
        );

        user.password = undefined;

        res.status(201).json({ success: true, data: user, token: token });
      } catch (error) {
        res.status(400).json({ success: false, error: "Post Not working" });
      }
      break;
    default:
      res.status(400).json({ success: false, error: "Route Not working" });
      break;
  }
}
