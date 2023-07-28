"use client"

import React,{useEffect, useState} from 'react';
import CartCd from '@/components/CDliverd';
import { useDispatch, useSelector } from 'react-redux';



const getTopicById = async (e) => {


    console.log("checking", e)
     try {
       const res = await fetch(`/api/getdc/${e}`);
      
       if (!res.ok) {
         throw new Error("Failed to fetch topics");
       }
     
       return res.json();
     
     } catch (error) {
       console.log("Error loading topics: ", error);
     }
   };
   


const Page = () => {

    const [topics, setTopics] = useState([]);
 console.log("chick ", topics)
    let cart = useSelector( (store)=>  store.productSection.userlog)

    const fetchData = async () => {
        try {
          const {topics}  = await getTopicById(cart._id);
          console.log("topi", topics);
          setTopics(topics);
          
        } catch (error) {
          console.log("Error fetching topics:", error);
        }
        
      };
    
      useEffect(() => {
        console.log("chk cart", cart._id)
        fetchData();
      }, [cart]);
    
    


  return (
    <div className='min-h-[400px] p-10'>
        
        {
            topics.map((data)=>{
        return   <CartCd cart={data}/>
            })
        }
    </div>
  )
}

export default Page