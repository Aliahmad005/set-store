"use server";

import connectDB from "./db";

import Catagory from "./catagory";
import { NextResponse } from "next/server";



const submitCat = async (data) =>{
 
    try {

await connectDB();
await Catagory.create(data);

        return{status: 200 , message: "sent"}
       
    } catch (error) {
        return{status: "error" , message: "not sent"}
        
    }
}




export default submitCat;