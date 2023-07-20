"use client"
import React, {useState , useEffect} from 'react'
import PCard from './Card';
import CardS from './CardS';





const ProductS = () => {


const [loading , setLoading] = useState('true');
const [loadingg , setLoadingg] = useState(true);
const [page , setPage] = useState(1);


    const getTopics = async (e) => {
        console.log("checking")
         try {
           const res = await fetch(`/api/getsc/${e}`, {
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
      const { topics } = await getTopics(page);
      console.log("topics", topics);
     const  newTopics = topics;
      setTopics((prevTopics)=>[...prevTopics, ...newTopics]);
    } catch (error) {
      console.log("Error fetching topics:", error);
    }
    
  };

  useEffect(() => {
    fetchData();
    setLoading('true')
  }, [page]);


    const [ard , setard] = useState([{title: 'shoe1'}, {title: 'shoe2'},{title:' shoe3'},{title: 'shoe4'},{title: 'shoe5'},{title: 'shoe1'},{title: 'shoe1'}])
 
 // infnite scrolling


 

 const handelInfiniteScroll =  () => {
//   console.log("scrollHeight" + document.documentElement.scrollHeight);
//   console.log("innerHeight" + window.innerHeight);
//   console.log("scrollTop" + document.documentElement.scrollTop);
 
  try {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight 
    ) {
      
      setLoadingg(true);
      setPage((prev) => prev + 1);
      
    }
  } catch (error) {
    console.log(error);
  }

};



  useEffect(() => {
   
  window.addEventListener("scroll", handelInfiniteScroll);
    
  return () => window.removeEventListener("scroll", handelInfiniteScroll);
}, []);

 
 
 
 
    return (
    <div>
    <div className='mt-[30px] flex justify-between' > <span className='flex'><p className=' text-xl   md:text-4xl lg:text-4xl xl:text-4xl font-semibold ml-10 '>--Product</p> <p className="text-3xl text-slate-200 font-semibold ml-10 hidden  tablet:inline laptop:inline desktop:inline">Check our new product</p></span> <p className='text-1xl font-semibold mr-10 hover:text-white hover:bg-black cursor-pointer h-fit '>VIEW ALL</p></div>

    <div className='grid grid-cols-2  laptop:grid-cols-4 tablet:grid-cols-2 desktop:grid-cols-4    mt-7   w-full pl-4 pr-4'>
    {   topics.map(function(data){

          return  <div className='flex justify-center mb-5 ml-1 mr-1'>  <PCard  data={data}/> </div>
       })
       }
    </div>
    {  loading === "true" ?
     <div className='grid grid-cols-2  laptop:grid-cols-4 tablet:grid-cols-2 desktop:grid-cols-4    mt-7   w-full pl-4 pr-4'>
     {   ard.map(function(data){
 
           return  <div className=' mb-5 mx-1'  >  <CardS  data={data}/> </div>
        })
        }
     </div> : ''
}
    </div>
  )
}

export default ProductS