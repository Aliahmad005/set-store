import connectDB from "../../db";
import Order from "../../orderr";

import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    console.log("id" , params)
  const { id } = params;
 
  await connectDB();
  await Order.findByIdAndUpdate(id, { status:"Deliverd" });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}