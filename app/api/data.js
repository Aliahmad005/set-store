"use server";

import connectDB from "./db";
import Product from "./product";



const submitData = async (data) =>{
    try {

await connectDB();
await Product.create(data);

        return{status: 200 , message: "sent"}
    } catch (error) {
        return{status: "error" , message: "not sent"}
        
    }
}




export default submitData;