import mongoose, { model } from "mongoose";

const userSchima = mongoose.Schema({
      email: { type: String, required: true, unique: true },
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      name: { type: String, required: true },
      location: String,
});

const User = mongoose.model("user", userSchima);

export default User;
