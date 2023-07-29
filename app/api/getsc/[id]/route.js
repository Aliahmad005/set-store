"use server";


import connectDB from "../../db";
import Product from "../../product";
import { NextResponse } from "next/server";




export async function GET(request , {params}) {
const {id}  = params ; 
   const number = parseInt(id)
    await connectDB();
    const topics = await Product.find().skip((number - 1) * 10).limit(10);
    console.log("topicw",topics)
    return NextResponse.json({ topics }, { status: 200 });
  }
  


