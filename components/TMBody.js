'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const TMBody = () => {
  const router = useRouter();


   function nav (){
    router.push(`/adidas/Addidas`)

   }
   function navNike (){
    router.push(`/adidas/Nike`)

   }

   function navBata (){
    router.push(`/adidas/Bata`)

   }

   function navService (){
    router.push(`/adidas/Service`)

   }

  return (
   
          <div className=' grid grid-cols-4 laptop:grid-cols-4 tablet:grid-cols-4 desktop:grid-cols-4 gap-2 mt-7   w-full pl-4 pr-4'  >
       <div className='bColor ' >
        <Image className='m-auto'
          src="/shoe.avif"
          width={200}
          height={200}
          layout='responsive'
          alt="Picture of the author"
        />
        <div className='flex justify-center cursor-pointer'>
        <p onClick={nav} className='text-xl font-semibold hover:text-white hover:bg-black w-fit'>Adidas</p>
        </div>
        </div>
       <div className='bColor'>
       <Image className='m-auto'
          src="/shoe2.avif"
          width={200}
          height={200}
          layout='responsive'
          alt="Picture of the author"
        />
        <div className='flex justify-center cursor-pointer'>
        <p onClick={navNike} className='text-xl font-semibold hover:text-white hover:bg-black w-fit'>Nike</p>
        </div>
        </div>
       <div className='bColor'>
       <Image className='m-auto'
          src="/shoe3.avif"
          width={200}
          height={200}
          layout='responsive'
          alt="Picture of the author"
        />
       <div className='flex justify-center cursor-pointer'>
        <p onClick={navBata} className='text-xl font-semibold hover:text-white hover:bg-black w-fit'>Bata</p>
        </div>
        </div>
       <div className='bColor'>
       <Image className='m-auto'
          src="/shoe.avif"
          width={200}
          height={200}
          layout='responsive'
          alt="Picture of the author"
        />
        <div className='flex justify-center cursor-pointer'>
        <p onClick={navService} className='text-xl font-semibold hover:text-white hover:bg-black w-fit'>Service</p>
        </div>
      </div>
    
    </div>
    
  )
}

export default TMBody