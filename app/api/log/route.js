
// import connectDB from "../db";

// import User from "../user";


// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { email, password } = await request.json();
//   console.log("emaill" , email)
//   await connectDB();
//   await User.find({ email , password});
//   console.log("don")
//   return NextResponse.json({ message: "User Created" }, { status: 201 });
// }



import connectDB from "../db"; // Assuming you have a separate file for database connection
import User from "../user"; // Assuming you have a User model defined
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    console.log("email", email);
    
    await connectDB(); // Connect to the database
    
    // Find the user with the given email and password
    const user = await User.findOne({ email, password });
    
    if (user) {
      console.log("User found:", user);
      // return new Response(JSON.stringify(user), { status: 201, headers: { 'Content-Type': 'application/json' } });
      return NextResponse.json({ user }, { status: 201 });
   
   
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
