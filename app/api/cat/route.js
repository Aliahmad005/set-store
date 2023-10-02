"use server";


import connectDB from "../db";
import Catagory from "../catagory";
import { NextResponse } from "next/server";




export async function GET() {
    await connectDB();
    const topics = await Catagory.find();
    return NextResponse.json({ topics }, { status: 200 });
  }
  
  