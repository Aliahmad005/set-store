"use server";


import connectDB from "../db";

import Order from "../orderr";
import { NextResponse } from "next/server";




export const revalidate = 1;
export async function GET() {
    await connectDB();
    const topics = await Order.find();
    return NextResponse.json({ topics } , {status : 200});
  }
  
