"use client"

import React , {useEffect} from 'react'
import TopBody from '@/components/TopBody'
import TMBody from '@/components/TMBody'
import Product from '@/components/Product'
import ProductS from '@/components/ProductS'
import RProductm from '@/components/RProductm'
import Cus from '@/components/Message'
// import {Skeleton } from "antd";





const home =  () => {

 
 
  return (
    <div>
      <TopBody/>
      <TMBody/>
      <RProductm/>
      <ProductS/>
      <Cus/>
      {/* <Product/> */}
    </div>
  )
}

export default home