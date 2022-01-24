import mongoose from "mongoose";

const userShchema = mongoose.Schema({
  username: {
    type: String,

    index: true,
    maxlength: [20, "Length Should be less then 20"],
  },
  name: {
    type: "String",
    required: [true, "Please Provide Name"],
    maxlength: [20, "Length Should be less then 20"],
  },
  location: {
    type: "String",
    maxlength: [100, "Length Should be less then 20"],
  },
  website_url: {
    type: "String",
    maxlength: [100, "Length Should be less then 20"],
  },
  amazon_wishlist: {
    type: "String",
    maxlength: [100, "Length Should be less then 20"],
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please Enter Email"],
    match: [
      /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/,
      "Email is invalid",
    ],
    index: true,
  },
  bio: String,
  image: String,
  password: String,
});

export default mongoose.models.user || mongoose.model("user", userShchema);
