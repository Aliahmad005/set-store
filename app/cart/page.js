"use client"


import React , {useState , useEffect} from 'react';
import CartC from '@/components/CartC';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cartt = () => {
let [lenth , setLenth] = useState([])
    
const [data , setData] = useState([{title: 'Jordan Retro 6 G 1'},{title: 'Jordan Retro 6 G 1'},{title: 'Jordan Retro 6 G 1'},{title: 'Jordan Retro 6 G 1'}])
const router = useRouter();
let dispatch = useDispatch();


let cart = useSelector( (store)=>  store.productSection.cartList)

useEffect(() => {
  setLenth(cart)

}, [cart])

console.log("lenth" , lenth.length)



let [start , setStart] = useState(cart.subP);
let [disa , setDisa] = useState()

useEffect(()=>{
if (lenth.length === 0){
setDisa(true)
console.log("DISABLE" , disa)
}else{
setDisa(false)

}
} , [lenth])


console.log("chhh",start)


let [sum , setSum] = useState(0);
console.log("cartt",cart)
useEffect(()=>{
  let newSum = 0;
  {
    cart.map((data)=>{
      newSum += +data.subP
    })

  }
  setSum(newSum)
},[cart])



// send data to mongodgb

const order = async () => {
  toast.warn("In progress")
  setDisa(true)
  
 console.log('kkkkkk' , cart)
  try {
    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cart),
    });

    if (res.ok) {
      toast.success("Order placed successfuly")
     
      dispatch(
        {
            type:"OCOMPLETE",
            payload:{
              
            }
        }
      )
      router.push("/home");
    } else {
      throw new Error("Failed to create a topic");
    }
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className='mb-20'>
        <div className='w-full text-center mt-12'><p className='text-3xl font-semibold '>Shopping Cart</p></div>
  <div className='w-full pl-2 pr-2 tablet:pl-20 laptop:pl-40 desktop:pl-40 tablet:pr-20 laptop:pr-40 desktop:pr-40  laptop:flex'>
    {/* start left */}

    <div className='  w-full mb-10 tablet:mb-0 laptop:mb-0 desktop:mb-0 tablet:w-2/3 laptop:w-2/3 desktop:w-2/3 '>
        <p className='font-semibold'>Cart Items</p>
        {
            cart.map(function(data , i){
     return   <CartC key={i} cart={data}/>
        
            })
        }
    </div>
    {/* start right */}

    <div className=' ml-0 tablet:ml-5 laptop:ml-10 desktop:ml-10   laptop:w-1/4 '  >
        <p className='font-semibold'>Summary</p>
        <div className='p-3 rounded  bg-emerald-100'> 
            <div className='flex justify-between border-b-2 border-gray-300'>
            <p className='text-sm'>SUBTOTAL</p>
             <p className='text-sm'>Rs {sum}.00</p>
            </div>
            <p className='text-xs mt-3 antialiased tracking-wider text-black'>The SubTotal reflects the total price of Your order. Included dues and taxes. before any application discounts. It does not include delivery cost and international transection fee</p>
        </div>

        <div   > <button onClick={order} className='w-full bg-black mb-0 h-10 text-center  text-white   rounded-full mt-3' disabled={disa}>Checkout</button> </div>
        <ToastContainer />
    </div>
  </div>
  
    </div>
  )
}

export default Cartt