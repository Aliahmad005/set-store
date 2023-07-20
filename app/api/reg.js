"use server";

import connectDB from "./db";

import User from "./user";



const submitUser = async (data) =>{
    try {

await connectDB();
await User.create(data);

        return{status: "ok" , message: "sent"}
    } catch (error) {
        return{status: "error" , message: "not sent"}
        
    }
}




export default submitUser;