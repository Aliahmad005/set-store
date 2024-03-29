"use server";


import connectDB from "../db";

import Order from "../orderr";
import {NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";



export async function GET(request) {
    await connectDB();
    const topics = await Order.find({ status:"Deliverd" });

    //To dynamically get the path
 const path = request.nextUrl.searchParams.get("path") || "/";

 revalidatePath(path);


    return NextResponse.json({ topics });
  }
  
