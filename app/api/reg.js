"use server";

import connectDB from "./db";

import User from "./user";
import { NextResponse } from "next/server";



const submitUser = async (data) =>{
    console.log("chulling" , data)
    try {

await connectDB();
await User.create(data);

        return{status: 200 , message: "sent"}
       
    } catch (error) {
        return{status: "error" , message: "not sent"}
        
    }
}




export default submitUser;