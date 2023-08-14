"use server";

import connectDB from "./db";
import Product from "./product";

import Catagory from "./catagory";
import { NextResponse } from "next/server";



const submitDis = async (data) =>{

    console.log(data)
 
//     try {

// await connectDB();
// await Catagory.create(data);

//         return{status: 200 , message: "sent"}
       
//     } catch (error) {
//         return{status: "error" , message: "not sent"}
        
//     }

 try{
 await connectDB();
 await Product.updateMany({"catagory": data.catagory} , {"dis": data.dis} );

         return{status: 200 , message: "sent"}

 } catch (error) {
        return{status: "error" , message: "not sent"}

 }
}




export default submitDis;