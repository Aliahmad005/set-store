"use server";


import { NextResponse } from "next/server";


export async function GET(request , {params}){
    const {id} = params
    console.log('working');
    console.log('id' , id );
  if(id === 'aliahmad051999@gmail.com'){
    console.log('match');
    return NextResponse.json( { status: 200 });
  }else if(!id === 'aliahmad051999@gmail.com'){
    console.log('match not');
    return NextResponse.json( { status: 400 });
  }
}