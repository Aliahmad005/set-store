"use server";


import connectDB from "../../db";
import Product from "../../product";
import { NextResponse } from "next/server";



  export async function GET(request, { params }) {
    const { id } = params
    let par = JSON.parse(id)
   const {idd , min , max} = par
    console.log('parms' , id)
    console.log('min' , min);
    console.log('idd' , idd);

    if(min){
      console.log('exist');
    }else if(!min){
      console.log("no exist");
    }

    await connectDB();
    if(!min && !max){
      console.log("no exist first");
    const topic = await Product.find({  catagory: idd } );
    return NextResponse.json({ topic }, { status: 200 });
    }else if(min && !max){
      // console.log("exist first");
      // console.log('min as number:', Number(min));
      const topic = await Product.find({ catagory: idd, price: { $gt: min } });

      // console.log('data extract' , topic);


    return NextResponse.json({ topic }, { status: 200 });
    }else if(!min && max){
      console.log("exist second");
      const topic = await Product.find({ catagory: idd, price: { $lte: max } });
      
    return NextResponse.json({ topic }, { status: 200 });
    }else if(min && max){
      console.log("exist second");
      const topic = await Product.find({ catagory: idd, price: { $lte: max , $gte : min } });
      
    return NextResponse.json({ topic }, { status: 200 });
    }
  }
