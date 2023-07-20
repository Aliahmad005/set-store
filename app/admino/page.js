"use client"
import React, {useState} from 'react';
import OrderL from '@/components/OrderList';
import Dashbord from '@/components/Dashbord';
import { useDispatch, useSelector } from 'react-redux';
import DliverdO from '@/components/DliverdO';
import Allproduct from '@/components/AllProduct';
import UploadProduct from '@/components/UploadProduct';


const page = () => {



    const [pagee , setPagee] = useState(0)
    



function set(){
    setPagee(0)
}
function sett(){
    setPagee(1)
}
function dliverd(){
    setPagee(2)
}
function Allp(){
    setPagee(3)
}
function Createp(){
    setPagee(4)
}



  return (
    <div className='flex bg-zinc-100'>
        <div className='ml-16'>
          <div className='sidDash'>
                <div className='productPageLCatMain'>
                    <h5 className='productPageLCatHeading'>Dashbord</h5>
                    <p onClick={set} className='productPageLCatMenu'>Go to Dashboard</p>


                </div>
                <div className='productPageLCatMain'>
                    <h5  className='productPageLCatHeading'>Products</h5>
                    <p  onClick={Allp} className='productPageLCatMenu' >All Products</p>
                    <p className='productPageLCatMenu' >Live Products</p>
                    <p onClick={Createp} className='productPageLCatMenu' >Create Product</p>

                </div>

                <div className='productPageLCatMain'>
                    <h5 className='productPageLCatHeading'>Orders Details</h5>
                    <p onClick={sett} className='productPageLCatMenu' >Pending Orders</p>
                    <p onClick={dliverd} className='productPageLCatMenu' >Completed Orders</p>
                  

                    <h5 className='productPageLCatHeading'>About</h5>
                    <p className='productPageLCatMenu'>About Us</p>
                    <p className='productPageLCatMenu'>LogOut</p>

                </div>

            </div>

        </div>
       

    <div className='w-3/4 ml-10 mt-4 rounded-xl bg-white  shadow-lg shadow-neutral-600 p-3'>
        {
        pagee === 1 ? 
        
        <OrderL /> : ''
            
        }
         {
        pagee === 0 ? 
        <Dashbord/> : ''
            
        }
          {
        pagee === 2 ? 
        <DliverdO/> : ''
            
        }
           {
        pagee === 3 ? 
        <Allproduct/> : ''
            
        }
            {
        pagee === 4 ? 
        <UploadProduct/> : ''
            
        }
    </div>
    </div>
  )
}

export default page