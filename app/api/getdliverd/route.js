"use server";


import connectDB from "../db";

import Order from "../orderr";
import { NextResponse } from "next/server";




export async function GET() {
    await connectDB();
    const topics = await Order.find({ status:"Deliverd" });
    return NextResponse.json({ topics });
  }
  
