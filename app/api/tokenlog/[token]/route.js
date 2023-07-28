"use server";



import connectDB from "../../db";
import User from "../../user";
import { NextResponse } from "next/server";
let tokenWali = require('jsonwebtoken');





export async function GET(request, { params }) {
    const { token } = params
  let dec =  tokenWali.verify(token, "apple sweet",)
    console.log('parms' , token)
    console.log('decrip' , dec.userKiId)
    await connectDB();
    const topic = await User.findOne({ _id: dec.userKiId });
    console.log("topics" , topic)
    return NextResponse.json({ topic }, { status: 200 });
  }
