import mongoose from "mongoose";

const userShchema = mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, "Please Provide Name"],
    index: true,
    maxlength: [20, "Length Should be less then 20"],
  },

  email: {
    type: String,
    unique: true,
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

// UserSchema.methods.setPassword = function (password) {
//   this.salt = crypto.randomBytes(16).toString("hex");
//   this.hash = crypto
//     .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
//     .toString("hex");
// };

// UserSchema.methods.validPassword = function (password) {
//   var hash = crypto
//     .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
//     .toString("hex");
//   return this.hash === hash;
// };

export default mongoose.models.userShchema ||
  mongoose.model("User", userShchema);
