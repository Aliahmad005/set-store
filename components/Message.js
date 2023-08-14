"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';
const Cus = () => {
  return (
    <div>
      <p>customer chat</p>
       <FacebookProvider appId="520007723625300" chatSupport>
        <CustomChat pageId="122099752832010620" minimized={false}/>
      </FacebookProvider>  
    </div>
  )
}

export default Cus