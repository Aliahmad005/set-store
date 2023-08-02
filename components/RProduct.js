"use client"

import React , {useState , useEffect} from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';



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
 

const RProduct = () => {

  const router = useRouter();

  
  // getdata

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


    const nav =(e) => {
   
      router.push(`/select/${e}`)
    }

  return (
    <div className='mt-[50px] tablet:ml-20 laptop:ml-40 desktop:ml-40 tablet:mr-20 laptop:mr-40 desktop:mr-40 md:mt-[100px] mb-[100px] md:mb=0'>
        <div className='text-2xl font-bold ml-2 tablet:ml-0 laptop:ml-0 desktop:ml-0 mb-5'>You Might Also Like</div>
        <Carousel responsive={responsive}  containerClass='-mx-[10px]  ' itemClass="px-[10px]" >
          { topics.map((data , i)=>{

        
   return     <div key={i}  className=' w-fit '>
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
       
        
        
</Carousel>;
    </div>
  )
}

export default RProduct