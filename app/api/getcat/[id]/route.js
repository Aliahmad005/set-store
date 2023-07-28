"use server";


import connectDB from "../../db";
import Product from "../../product";
import { NextResponse } from "next/server";



  export async function GET(request, { params }) {
    const { id } = params
    console.log('parms' , id)
    await connectDB();
    const topic = await Product.find({ catagory: id });
    return NextResponse.json({ topic }, { status: 200 });
  }