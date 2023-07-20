"use client"
import React, {useState , useEffect} from 'react'
import PCard from './Card';
import CardS from './CardS';





const Product = () => {


const [loading , setLoading] = useState('true')


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
       if(res.status === 200){
  setLoading("false")
       }
   
       return res.json();
      console.log("data" , data)
     } catch (error) {
       console.log("Error loading topics: ", error);
     }
   };
   



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
 
 // infnite scrolling


 
    return (
    <div>
    <div className='mt-[70px] flex justify-between' > <span className='flex'><p className='text-4xl font-semibold ml-10 '>--Product</p> <p className='text-3xl text-slate-200 font-semibold ml-10 '>Check our new product</p></span> <p className='text-1xl font-semibold mr-10 hover:text-white hover:bg-black cursor-pointer h-fit '>VIEW ALL</p></div>
{  loading === "false" ?
    <div className='grid  laptop:grid-cols-4 tablet:grid-cols-2 desktop:grid-cols-4    mt-7   w-full pl-4 pr-4'>
    {   topics.map(function(data){

          return  <div className='flex justify-center mb-5'  >  <PCard  data={data}/> </div>
       })
       }
    </div>:
     <div className='grid  laptop:grid-cols-4 tablet:grid-cols-2 desktop:grid-cols-4    mt-7   w-full pl-4 pr-4'>
     {   ard.map(function(data){
 
           return  <div className='flex justify-center mb-5'  >  <CardS  data={data}/> </div>
        })
        }
     </div>
}
    </div>
  )
}

export default Product