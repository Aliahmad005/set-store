"use server";


import connectDB from "../db";
import Product from "../product";
import { NextResponse } from "next/server";


// export default async function handler(req , res){
//     if(req.method !== "GET"){
//         res.status(405).send({msg: "Only get req"});

//         return;
//     }
//     try {
//          await connectDB();
//          const tasks = await Product.find();
//           res.status(200).send(tasks);
//     } catch (error) {
//         console.log(error);
//         res.status(400).send({error,msg:"some issue"})
//     }
// }


export async function GET() {
    await connectDB();
    const topics = await Product.find();
    return NextResponse.json({ topics }, { status: 200 });
  }
  



// export default async function handler(req, res) {
//   const db = await connectDB();
//   const collection = db.collection('Product'); // Replace 'yourCollection' with the name of your MongoDB collection

//   const data = await collection.find().toArray();

//   res.status(200).json(data);
// }
