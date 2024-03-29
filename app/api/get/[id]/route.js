"use server";



import connectDB from "../../db";
import Product from "../../product";
import { NextResponse } from "next/server";






  export async function GET(request, {params}){

try{
  if(!params || !params.id){
    throw new Error("missing product id")
  }

  await connectDB();
  const topic = await Product.findOne({ _id: params.id});
  if(!topic){
    throw new Error("topic dont finde")
  }
return NextResponse.json({topic}, {status:200})
}catch (error){
console.error(error)
return NextResponse.json({error : error.message} ,{status : 400})
}



  }