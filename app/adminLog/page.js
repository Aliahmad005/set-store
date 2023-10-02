"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminV = () => {
const [val , setVal] = useState()

const router = useRouter();

const log = async () =>{
    try{
        const res = await fetch(`/api/adminV/${val}`, {
            cache: "no-store",
          });

          if (res.status === 200) {
            router.push(`/admino`)
          }else if (res.status === 400) {
            console.log('login nhi gia hai');
             }
    }catch(err){

    }
}


  return (
    <div className='w-full h-[700px] flex justify-center pt-[100px]'>
      <div className=' shadow-lg w-2/4 h-[400px] text-center flex items-center justify-center '>
        <div>
        <h1>Are you Admin</h1>
        <input type="text" onChange={(e)=>setVal(e.target.value)} value={val} className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2' /> <br/>
        <button onClick={log} className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full mt-3'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AdminV;
