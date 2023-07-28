"use server";


import connectDB from "../db";
import Product from "../product";
import { NextResponse } from "next/server";




export async function GET() {
    await connectDB();
    const topics = await Product.find();
    return NextResponse.json({ topics }, { status: 200 });
  }
  


