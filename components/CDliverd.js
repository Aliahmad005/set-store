"use client"
import Image from 'next/image';
import React,{useEffect, useState} from 'react';
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';



const CartCd = (props) => {
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
           <p className='text-slate-900 text-sm mb-2'> Price : {props.cart.subP} Rs</p>
            </div>

            <div className='flex justify-between'>
                <div>
            <p className='text-slate-500 text-sm mb-2'>{props.cart.mindet}</p>
           
           
             <span className='flex'><p className='text-slate-500 text-sm'>Size: {props.cart.adSize}</p> <p className='text-slate-500 text-sm ml-20'>Quantity: {props.cart.adQ}</p></span>
           
             </div>

             <div >{props.cart.status === "Deliverd" ? <p  className=' font-semibold hover:text-gray-950 border-2 border-green-400 text-green-400 cursor-pointer rounded p-1'>Completed</p> : <p  className=' font-semibold hover:text-gray-950 border-2 border-yellow-400 text-yellow-400 cursor-pointer rounded p-1'>Pending</p>}</div>
            </div>
        </div>
        
    </div>
  )
}

export default CartCd