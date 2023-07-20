"use Client"
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';





const CartO = (props) => {
  let dispatch = useDispatch();
  const router = useRouter();
  const getTopicById = async (id) => {
    console.log("checking")
   
    try {
      const res = await fetch(`/api/getorder/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
      
      });
    
      if (res.ok) {
        dispatch(
          {
              type:"PAGE",
              payload:{
                  page: 1,
               
              }
          }
        )
        console.log("ho gia hai")
        // router.push(`/admino`)
       
      }
    
      
    } catch (error) {
      console.log(error);
    }
     
   };


  const [topic , setTopic] = useState();


const deliver = async () => {
 let  id = props.cart._id
  await getTopicById(id);
}


    console.log("props" , props.cart.adName)
  return (
    <div>  <div className='flex border-b-2 bg-white border-gray-300 mb-1 '>
 
         <div className='mt-2 ml-2 w-full'>
             <div className='flex justify-between w-full '>
             <p className='text-xl font-semibold tracking-wider mb-0  subpixel-antialiased'>{props.cart.adName
             }</p>
            <p className='text-slate-900 text-sm mb-2'> Price : {props.cart.subP} Rs</p>
             </div>
 
             <div className='flex justify-between'>
                 <div>
             <p className='text-slate-500 text-sm mb-2'>explani</p>
            
            
              <span className='flex'><p className='text-slate-500 text-sm'>Size: {props.cart.adSize}</p> <p className='text-slate-500 text-sm ml-20'>Quantity: {props.cart.adQ}</p></span>
            
              </div>
 
              <div ><p onClick={deliver} className=' font-semibold hover:text-gray-950 text-green-400 cursor-pointer rounded p-1'>is Deliverd</p></div>
             </div>
         </div>
         
     </div></div>
  )
}

export default CartO