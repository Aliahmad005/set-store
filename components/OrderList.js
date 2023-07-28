"use Client"

import React,{useState , useEffect} from 'react';
import CartO from './CartO';
import { useDispatch, useSelector } from 'react-redux';


const getTopics = async () => {


    console.log("checking")
     try {
       const res = await fetch("/api/getorder", {
         cache: "no-store",
       });
       console.log("data chul rha hai" , res)
       if (!res.ok) {
         throw new Error("Failed to fetch topics");
       }
   
       return res.json();
      console.log("data" , data)
     } catch (error) {
       console.log("Error loading topics: ", error);
     }
   };
   

const OrderL = () => {
  let dispatch = useDispatch();
  let cart = useSelector( (store)=>  store.productSection.page)
  const [refresh , setRefresh] = useState(cart)


    const [topics, setTopics] = useState([]);

    
    const fetchData = async () => {
      try {
        const { topics } = await getTopics();
        console.log("topics", topics);
        setTopics(topics);
      } catch (error) {
        console.log("Error fetching topics:", error);
      }
      
    };
  
    useEffect(() => {
      console.log("resdfhh")
      if(refresh === 1){
      fetchData();
      dispatch(
        {
            type:"PAGE",
            payload:{
                page: 0,
             
            }
        }
      )
      }
    }, [refresh]);

    useEffect(() => {
     
      fetchData();
     
    }, []);
  


  return (
    <div>
          <div className='mt-[10px] flex justify-between' > <span className='flex'><p className='text-3xl  font-semibold ml-10 '>Pending Orders</p> </span> </div>

        {
            topics.map((data , i)=>{
        return   <CartO key={i} cart={data}/>
            })
        }
       
    </div>
  )
}

export default OrderL