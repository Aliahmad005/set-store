

import connectDB from "../db"; // Assuming you have a separate file for database connection
import User from "../user"; // Assuming you have a User model defined
import { NextResponse } from "next/server";
let tokenWali = require('jsonwebtoken');

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    console.log("email", email);
    
    await connectDB(); // Connect to the database
    
    // Find the user with the given email and password
    const user = await User.findOne({ email, password });
    
    if (user) {
      console.log("User found:", user);
     let token = tokenWali.sign({ userKiId: user._id }, "apple sweet", { expiresIn: "2d" },);
   console.log("token" , token)
      // return new Response(JSON.stringify(user), { status: 201, headers: { 'Content-Type': 'application/json' } });
      return NextResponse.json({ user , token }, { status: 201 });
   
   
    } else {
      console.log("User not found");
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.log("Error:", error);
    return new Response(JSON.stringify({ message: "An error occurred" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
