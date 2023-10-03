

import mongoose, { Schema } from "mongoose";

const userKaSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zip: String,

  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userKaSchema);

export default User;