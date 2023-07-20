"use client"
import React from 'react';
import { checkout } from '@/components/Checkout';

const page = () => {
  return (
    <div    onClick={(()=>{
        checkout(
          {
            lineItems:[{price:"price_1NVABkCU5RaAZNMDuMkRhf3s",quantity:1}]
          }
        )
       })}>page</div>
  )
}

export default page