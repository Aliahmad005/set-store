

import mongoose, { Schema } from "mongoose";

const userKaSchema = new Schema(
  {
    cat:String,
    
  },
  {
    timestamps: true,
  }
);

const Catagory = mongoose.models.Catagory || mongoose.model("Catagory", userKaSchema);

export default Catagory;