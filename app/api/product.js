// let mongoose = require('mongoose');

// let userKaSchema = mongoose.Schema({
//     productname:String,
//     mindetail:String,
//     fulldetail:String,
//     catagory: String,
//     price: String,
//     qunty: String,
   

// });

// let Product =  mongoose.model('Product', userKaSchema);

// module.exports = Product;



import mongoose, { Schema } from "mongoose";

const userKaSchema = new Schema(
  {
    productname:String,
        mindetail:String,
        fulldetail:String,
   catagory: String,
     price: String,
    qunty: String,
    img: String,
    imgT: String,
    imgTh: String,
    pay: String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", userKaSchema);

export default Product;