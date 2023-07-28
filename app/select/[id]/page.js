"use client"

import React , {useState , useEffect} from 'react';
import {IoMdHeartEmpty} from "react-icons/io" ;  
import Image from 'next/image';
import RProduct from '@/components/RProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import {Skeleton} from 'antd';
import { checkout } from '@/components/Checkout';





const Select = ({ params }) => {

  const [loading , setLoading] = useState('true');

  const getTopicById = async (id) => {




    console.log("chul rhfa hai", id)
    try {
      const res = await fetch(`/api/get/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
      if(res.status === 200){
    setLoading(false)
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  



  let cart = useSelector( (store)=>  store.productSection.userlog)


  //get data
    const { id } = params;

const [topics, setTopics] = useState({});
const [image, setImage] = useState('');
const [num , setNum] = useState('');
const [sSize , setSSize] = useState('');
// const {productname} = topics
console.log('image', image)
console.log('size', sSize)

  const fetchData = async () => {
    try {
      const {topic}  = await getTopicById(id);
      console.log("topi", topic.productname);
      setTopics(topic);
      setImage(topic.img);
    } catch (error) {
      console.log("Error fetching topics:", error);
    }
    
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

// end data


//redux

let dispatch = useDispatch();
const router = useRouter();
function order(){
  dispatch(
    {
        type:"CARTSELECT",
        payload:{
            adId: topics._id,
            adName: topics.productname,
            mindet: topics.mindetail ,
            adP: topics.price,
            adPic: topics.img,
            adSize: sSize,
            adQ: 1,
            subP: 0,
            status: "Pending",
            userId:cart._id,
            userName:cart.name
            ,
        }
    }
  )
  router.push(`/cart`)
  
}



//clicked

const [size , setSize] = useState(['UK 6' , 'UK 6.5' , 'UK 7' , 'UK7.5' , 'UK 8' , 'UK 8.5' , 'UK 9', 'UK 9.5' , 'UK 10' , 'UK 10.5' , 'UK 11' , 'UK 11.5'])


  return (
   
    <div className='w-full pt-16 '>

      <div className=' flex-none tablet:flex-none laptop:flex desktop:flex w-3/4 m-auto '>

        <div className='flex w-full mb-8 tablet:mb-8 laptop:mb-0 desktop:mb-0 laptop:w-1/2 desktop:w-1/2 tablet:w-full'>
          <div className='  bg-green'> 
          { loading === false ?

           <Image 
          src={topics.img}
          width={100}
          height={100}
          alt="Picture of the author"
          onClick={()=>setImage(topics.img)}
        />:  
            <Image className='mt-2'
        src="/loading.png"
        width={100}
        height={100}
        alt="Picture of the author"
        onClick={()=>setImage(topics.imgTh)}
      /> }


        { loading === false ?
            <Image className='mt-2'
          src={topics.imgT}
          width={100}
          height={100}
          alt="Picture of the author"
          onClick={()=>setImage(topics.imgT)}
        /> :   
           <Image className='mt-2'
        src="/loading.png"
        width={100}
        height={100}
        alt="Picture of the author"
        onClick={()=>setImage(topics.imgTh)}
      />
}

{   loading === false ?
            <Image className='mt-2'
          src={topics.imgTh}
          width={100}
          height={100}
          alt="Picture of the author"
          onClick={()=>setImage(topics.imgTh)}
        />  : 
         <Image className='mt-2'
        src="/loading.png"
        width={100}
        height={100}
        alt="Picture of the author"
        onClick={()=>setImage(topics.imgTh)}
      />
       
} 

        </div>
          <div className='  ml-2 '> 
          { loading === false ?
           <Image className='m-auto'
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        /> :     
         <Image className='m-auto'
         src="/loading.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />     
      }
        </div>
        </div>

{/* right side */}

        <div className=' ml-0 tablet:ml-16 laptop:ml-16 desktop:ml-16  '>
          <div><p className='text-3xl font-semibold'>{topics.productname}</p></div>
          <div><p className='text-1xl font-semibold'>{topics.mindetail}</p></div>
          <div><p className='text-1xl font-semibold mb-0'>Price: Rs {topics.price}</p> 
          <p className='m-0 font-semibold text-slate-300'>incl of taxes</p>
          <p className='font-semibold text-slate-200'>(also incl all duty charges)</p></div>
          <div className='mt-16'>
            <div><p className='font-semibold'>Select Size</p></div>
            <div className='grid grid-cols-3 gap-2'>
              {
                size.map(function(size , i){
                     return       <p key={i}  onClick={()=>{
                      
                  setNum(i);

                  setSSize(size)


                     }} className={`border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ${num ===  i ? "bg-black text-white" : ''}`}>{size}</p>
                })
              }
            </div>
          </div>

          <div onClick={order} className=''><p className='w-full cursor-pointer bg-black mb-0 h-10 text-center text-white align-text-bottom pt-2 rounded-full mt-10'>Add to Cart</p></div>
          <div onClick={(()=>{
        checkout(
          {
            lineItems:[{price: topics.pay,quantity:1}]
          }
        )
       })}><p className='w-full  mt-2 h-10 text-center cursor-pointer align-text-bottom pt-2 rounded-full border-2 border-black '>Online payment</p></div>
          <div className='mt-10'>
            <p className='font-semibold'>product details</p>
            <p className='max-w-[300px]'>{topics.fulldetail}</p>
          </div>
        </div>
      </div>

  

      <RProduct/>
    </div>
  )
}

export default Select