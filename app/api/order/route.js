import connectDB from "../db";


import Order from "../orderr";
import { NextResponse } from "next/server";

export async function POST(request) {
   
  const cart = await request.json();
  console.log('server working' , cart );
  await connectDB();
  await Order.create(cart);
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}