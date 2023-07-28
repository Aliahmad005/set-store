"use client"
import React, {useState , useEffect} from 'react'
import ACard from './APCard';



const getTopics = async () => {
  console.log("checking")
   try {
     const res = await fetch("/api/get", {
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
 

const Allproduct = () => {

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
    fetchData();
  }, []);


    const [ard , setard] = useState([{title: 'shoe1'}, {title: 'shoe2'},{title:' shoe3'},{title: 'shoe4'},{title: 'shoe5'},{title: 'shoe1'},{title: 'shoe1'}])
  return (
    <div>
    <div className='mt-[10px] flex justify-between' > <span className='flex'><p className='text-4xl font-semibold ml-10 '>--Product</p> </span> </div>

    <div className='grid  laptop:grid-cols-4 tablet:grid-cols-2 desktop:grid-cols-4    mt-7   w-full pl-4 pr-4'>
    {   topics.map(function(data , i){

          return  <div key={i} className='flex justify-center mb-5'  >  <ACard  data={data}/> </div>
       })
       }
    </div>

    </div>
  )
}

export default Allproduct