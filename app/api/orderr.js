
import mongoose, { Schema } from "mongoose";

const orderKaSchema = new Schema(
  {
    adName:String,
    adId:String,
    subP: String,
    adQ: String,
    adSize: String,
    status: String,
    userId: String,
    userName: String,
    adPic: String

  
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderKaSchema);

export default Order;