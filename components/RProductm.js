"use client"

import React , {useState , useEffect} from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import CardS from './CardS';





const RProductm = () => {


  
  // getdata

  const [topics, setTopics] = useState([]);
const [loading , setLoading] = useState('true');

const [ard , setard] = useState([{title: 'shoe1'}, {title: 'shoe2'},{title:' shoe3'},{title: 'shoe4'},{title: 'shoe5'},{title: 'shoe1'},{title: 'shoe1'}])


const getTopics = async () => {

    console.log("checking")
     try {
       const res = await fetch("/api/get", {
         cache: "no-store",
       });
       console.log("data chul rha hai" , res)
       if (res.status === 200) {
        setLoading("false")
       }
   
       return res.json();
      console.log("data" , data)
     } catch (error) {
       console.log("Error loading topics: ", error);
     }
   };
   


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <div className='mt-[70px] tablet:ml-20 laptop:ml-4 desktop:ml-4 tablet:mr-2 laptop:mr-4 desktop:mr-4 md:mt-[100px]  md:mb=0'>
        <div className='text-xl   md:text-4xl lg:text-4xl xl:text-4xl font-semibold ml-2 tablet:ml-0 laptop:ml-10 desktop:ml-10 mb-5'>By Adidas</div>
       
       { loading === "false" ?
        <Carousel responsive={responsive}  containerClass='-mx-[10px]  ' itemClass="px-[10px]" >
          { topics.map((data , i)=>{

        
   return     <div key={i} className=' w-fit '>
            <Image className='m-auto'
          src={data.img}
          width={400}
          height={300}
          alt="Picture of the author"
        />
       
          <p className='font-semibold mt-2 ml-2 mb-0'>{data.productname}</p>
          <div className='flex justify-between ml-2 mr-2'>
          <p>Rs : {data.price}</p>
          <p className='text-green-400'>12.50% off</p>
          </div>
        

            </div>
              })
          }
       
        
        
</Carousel> :
<Carousel responsive={responsive}  containerClass='-mx-[10px]  ' itemClass="px-[10px]" >
{   ard.map(function(data , i){
 
    return  <div key={i} className=' mb-5 mx-1'  >  <CardS  data={data}/> </div>
 })
 }
       
        
        
</Carousel> 


}
    </div>
  )
}

export default RProductm