"use server";


import connectDB from "../../db";

import Order from "../../orderr";
import { NextResponse } from "next/server";




export async function GET(request, { params }) {
  console.log('parms' )

  const { id } = params
  console.log('parms' , id)

    await connectDB();
    const topics = await Order.find({ status:"Pending" , userId:id });
   
    console.log('par' , topics)
    return NextResponse.json({ topics }, { status: 200 });
  }
  
