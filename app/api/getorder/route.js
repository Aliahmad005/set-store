"use server";


import connectDB from "../db";

import Order from "../orderr";
import { NextResponse } from "next/server";

import { revalidatePath } from "next/cache";

export async function GET() {
    await connectDB();
    const topics = await Order.find({status:"Pending"});

//To dynamically get the path
const path = request.nextUrl.searchParams.get("path") || "/";

revalidatePath(path);

    console.log('par' , topics)
    return NextResponse.json({ topics } , {status:200});
  }
  
