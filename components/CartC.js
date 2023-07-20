"use client"
import Image from 'next/image';
import React,{useEffect, useState} from 'react';
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';



const CartC = (props) => {
  let dispatch = useDispatch();
  //delete cart

  function delet(){
    console.log("idF" ,props.cart.adId )
  dispatch(
    {
        type:"DELETE",
        payload:{
            adId: props.cart.adId,
        }
    }
  )
 
  
}
  


const [qunt , setQunt] = useState(props.cart.adQ);
const [price , setPrice] = useState(props.cart.subP);

console.log('priceee' , price)
useEffect(()=>{
setQunt(props.cart.adQ)
},[props.cart])

useEffect(()=>{
 let pr = props.cart.adP * qunt;
  console.log("use chulling")
  dispatch(
    {
        type:"PRICE",
        payload:{
            adId: props.cart.adId,
            adName: props.cart.adName,
            mindet: props.cart.mindetail ,
            adP: props.cart.adP,
            adPic: props.cart.adPic,
            adSize: props.cart.adSize,
        
            subP: pr
            
        }
    }
  )
  setPrice(pr)
},[qunt])


  return (
    <div className='flex border-b-2 border-gray-300 mb-1 '>
   <Image className='m-2'
          src={props.cart.adPic}
          width={90}
          height={90}
          alt="Picture of the author"
        />
        <div className='mt-2 ml-2 w-full'>
            <div className='flex justify-between w-full '>
            <p className='text-xl font-semibold tracking-wider mb-0  subpixel-antialiased'>{props.cart.adName}</p>
           <p className='text-slate-900 text-sm mb-2'> Price : {price} Rs</p>
            </div>

            <div className='flex justify-between'>
                <div>
            <p className='text-slate-500 text-sm mb-2'>{props.cart.mindet}</p>
           
           
             <span className='flex'><p className='text-slate-500 text-sm'>Size: {props.cart.adSize}</p> <p className='text-slate-500 text-sm ml-20'>Quantity: <input className='w-16' onChange={(e)=>{
              
              if(e.target.value != 0){
              setQunt(e.target.value )
              }
           
            dispatch(
              {
                  type:"QUNT",
                  payload:{
                      adId: props.cart.adId,
                      adQ: e.target.value ,
                      
                  }
              }
            )
            
            
            }} value={qunt} type="number" /></p></span>
           
             </div>

             <div ><BsTrash onClick={delet} className='mt-3 text-lg'/></div>
            </div>
        </div>
        
    </div>
  )
}

export default CartC