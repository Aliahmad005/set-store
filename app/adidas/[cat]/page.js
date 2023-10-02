"use client"

import React, { useState, useEffect, useRef } from 'react'
import PCard from '@/components/Card';
import { useRouter } from 'next/navigation';
import CardS from '@/components/CardS'
import {parse, stringify, toJSON, fromJSON} from 'flatted';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import "regenerator-runtime"

const getCat = async () => {
  console.log("checking")
  try {
    const res = await fetch("/api/cat", {
      cache: "no-store",
    });
    console.log("data chul rha hai", res)
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    if (res.status === 200) {

    }

    return res.json();
    console.log("data", data)
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


const Page = ({ params }) => {





  const [loading, setLoading] = useState("true");
  const [textResult, setTextResult] = useState('');

  const [doodle, setDoodle] = useState('0');


  const [adr, setAdr] = useState([{ name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }, { name: 1 },]);










  const min = useRef(null);
  const max = useRef(null);
  const sea = useRef(null);
  const { cat } = params;
  const router = useRouter();

  const [topics, setTopics] = useState([]);
  const [priceF, setPriceF] = useState([]);
  const [priceFA, setPriceFA] = useState([]);
  const [catt, setCatt] = useState([]);
  const [minChange, setMinChange] = useState(0);
  console.log("popop", minChange)
  console.log("price filter", priceF)


  const getTopics = async (e) => {
    console.log("checking", e)

   

    let objj = {idd : cat , min : min.current.value , max : max.current.value};
//  let jsonO = JSON.stringify(obj)
let jsonString = JSON.stringify(objj)

console.log('stringify' , jsonString);
    

    try {
      const res = await fetch(`/api/getcat/${jsonString}`, {
        cache: "no-store",
      });
      console.log("data chul rha hai", res)
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
      if (res.status === 200) {
        setLoading("false")
      }

      return res.json();
      console.log("data", data)
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

const minVal = () => {
  setMinChange(min.current.value)
}



  const fetchData = async () => {
    try {
      const { topic } = await getTopics(cat);
      console.log("topics", topic);
      setTopics(topic);
      setPriceF(topic)
    } catch (error) {
      console.log("Error fetching topics:", error);
    }

  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get cat

  const fetchCat = async () => {
    try {
      const { topics } = await getCat();
      console.log("topicsCat", topics);
      setCatt(topics);

    } catch (error) {
      console.log("Error fetching topics:", error);
    }

  };



  useEffect(() => {
    fetchCat();
  }, []);



  // filter

  function filter() {
    let minP = min.current.value
    let maxP = max.current.value

    console.log("minP", minP)
    console.log("maxP", maxP)

    const filterP = topics.filter(product => product.price >= minP && product.price <= maxP)
    setPriceF(filterP)
  }


  //search

  //   function search(){
  //     let val = sea.current.value
  //     const serchF = priceF.filter(product => product.productname.includes(val) )
  //     console.log("search",serchF)
  // setPriceFA(serchF)

  //   }


  const search = () => {

    let val = sea.current.value
    let minP = min.current.value
    let maxP = max.current.value
    // Filter the products based on the price range and search query
    const filtered = topics.filter((product) => {
      const isPriceInRange = (minP === '' || product.price >= minP) &&
        (maxP === '' || product.price <= maxP);
      const doesMatchSearch = product.productname.toLowerCase().includes(val.toLowerCase());
      return isPriceInRange && doesMatchSearch;
    });
    setPriceF(filtered);

  }


  // mice 

  function mice() {
    if (doodle === 0) {
      setDoodle(1)
    }
    if (doodle === 1) {
      setDoodle(0)
    }
  }

  return (
    <div >
      <div className='mt-10 flex justify-center'>

        <form className="flex items-center w-2/3">
          <label for="voice-search" className="sr-only">Search</label>
          <div className="relative w-full">

            <input type="text" id="voice-search" ref={sea} onChange={search} className=" border border-gray-900 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here" required />
            <button onClick={mice} type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
              </svg>
            </button>
          </div>
          <button type="submit" className="inline-flex items-center text-gray-900 py-2.5 px-3 ml-1 text-sm font-medium  rounded-lg    focus:ring-4 focus:outline-none focus:ring-blue-300   dark:focus:ring-blue-800">
            <svg className="w-5 h-5 mr-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </button>


        </form>

      </div>
      <div className='flex' >
        <div className='ml-16 w-1/4 hidden laptop:inline desktop:inline tablet:inline'>
          <div className='sidDash hidden laptop:inline desktop:inline tablet:inline'>

            <div className='productPageLCatMain'>
              <h5 className='productPageLCatHeading'>Brands </h5>


              {
                catt.map((data, i) => {
                  return <p key={i} onClick={() => router.push(`/adidas/${data.cat}`)} className='productPageLCatMenu' >{data.cat}</p>

                })
              }
            </div>

            <div className='productPageLCatMain'>
              <h5 className='productPageLCatHeading'>Price filter</h5>
              <p className='productPageLCatMenu' >min Price</p>
              <input type="number" id="voice-search" ref={min} onChange={minVal}  className=" border border-gray-900 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block ml-3 w-3/4  pl-10 p-2   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Min Price" required />

              <p className='productPageLCatMenu pt-3' >max Price</p>
              <input type="number" id="voice-search" ref={max} className=" border border-gray-900 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block ml-3 w-3/4  pl-10 p-2   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Min Price" required />


              <h5 onClick={()=>{
                fetchData()
                setLoading('true')
                } } className='productPageLCatHeading text-emerald-800 cursor-pointer'>Filter</h5>


            </div>

          </div>

        </div>

        <div className='  ml-0 tablet:ml-5 laptop:ml-5 desktop:ml-5 w-full'>
          <div className='mt-5 flex justify-between w-full' > <span className='flex'><p className=' text-2xl laptop:text-3xl desktop:text-3xl tablet:text-3xl font-semibold ml-10 '>{cat}</p> <p className='text-3xl text-slate-200 font-semibold ml-10 hidden laptop:inline desktop:inline tablet:inline '>Check our new product</p></span> </div>
          {loading === "false" ?
            <div className='grid grid-cols-2  laptop:grid-cols-4 tablet:grid-cols-2 desktop:grid-cols-4    mt-7   w-full pl-4 pr-4'>
              {priceF.map(function (data, i) {

                return <div key={i} className='flex justify-center mb-5 ml-1 mr-1'  >  <PCard data={data} /> </div>
              })
              }
            </div> :
            <div className='grid grid-cols-2  laptop:grid-cols-4 tablet:grid-cols-2 desktop:grid-cols-4    mt-7 pl-0 pr-0  w-full tablet:pl-4 laptop:pl-4 desktop:pl-4 tablet:pr-4 laptop:pr-4 desktop:pr-4'>
              {adr.map(function (data, i) {

                return <div key={i} className=' mb-5 ml-1 mr-1'  >  <CardS data={data} /> </div>
              })
              }
            </div>

          }
        </div>

      </div>
    </div>
  )
}

export default Page