"use Client"

import React,{useState , useEffect} from 'react';
import BarComp from './BarComp';
import {Skeleton} from 'antd';
import moment from 'moment';
import OrderL from './OrderList';



const getTopics = async () => {
    console.log("checking")
     try {
       const res = await fetch("/api/getall", {
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


   

const Dashbord = () => {

    const [topics, setTopics] = useState([]);
    const [dtopics, setDTopics] = useState([]);
    const [len, setLen] = useState(0);
    const [dlen, setDLen] = useState(0);
    const [todayOrders, setTodayOrders] = useState(0);
    const [mounthOrders, setMounthOrders] = useState(0);
    const [yearOrders, setYearOrders] = useState(0);
    const [todayDO, setTodayDO] = useState(0);
    const [add, setAdd] = useState(0);
    const [mounthDO, setMounthDO] = useState(0);
    const [yearDO, setYearDO] = useState(0);
    const [mounthDR, setMounthDR] = useState(0);
    const [yearDR, setYearDR] = useState(0);
    const [todayDR, setTodayDR] = useState(0);

// get mounth

const today = moment().format('YYYY-MM-DD');
const Mounth = moment().format('YYYY-MM');
const year = moment().format('YYYY');


useEffect(()=>{
console.log("today",today)
},[today])


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
   

    useEffect(() => {
        
     setLen(topics.length)   ;
    //  setDLen(dtopics.length)   ;
    let plus = 0
    let plusD = 0
    let plusM = 0
    let plusY = 0
    let lenth = 0
    let lenthD = 0
    let lenthDD = 0
    let lenthDM = 0
    let lenthDY = 0
    let lenthM = 0
    let lenthY = 0
     
    {
       topics.map((data)=>{
        const timestamp = data.createdAt ;
        const parsedDate = moment(timestamp);
        const Oyear = parsedDate.format('YYYY');
        const Omounth = parsedDate.format('YYYY-MM');
        const Oday = parsedDate.format('YYYY-MM-DD');
       console.log("order date" , Oyear);
       console.log("tdate" , year);

       if(today === Oday){
     lenthD = lenthD += +1
      
       }
       if(Mounth === Omounth){
          lenthM = lenthM += +1
          
           }
           if(year === Oyear){
             lenthY = lenthY += +1
              
               }
               if(data.status === "Deliverd" && today === Oday ){
    

                
                  plusD = plusD += +data.subP,
                  lenthDD = lenthDD += +1
            
                   
               }
               if(data.status === "Deliverd" && Mounth === Omounth ){
    

                
                plusM = plusM += +data.subP,
                lenthDM = lenthDM += +1
          
                 
             }
             if(data.status === "Deliverd" && year === Oyear ){
    

                
              plusY = plusY += +data.subP,
              lenthDY = lenthDY += +1
        
               
           }
        
   if(data.status === "Deliverd"){
    

    return(
      plus = plus += +data.subP,
      lenth = lenth += +1

       )
   }
        })
    }
console.log("add", plus)
console.log("lin", lenthY)
    setAdd(plus)
    setDLen(lenth)
    setTodayOrders(lenthD)
    setMounthOrders(lenthM)
    setYearOrders(lenthY)
    setMounthDO(lenthDM)
    setYearDO(lenthDY)
    setTodayDO(lenthDD)
    setMounthDR(plusM)
    setYearDR(plusY)
    setTodayDR(plusD)
      }, [topics]);

   
    


  return (
    <div>
          <div className='dashboard'>
                <div className='dashbordMain'>
                    <div className='dashbordDis'>
                        <div className="dashDisMin">
                            <div className='dashDisImg'>
                                <img className='dasImg' src='/totalS.png' alt="" />
                            </div>
                            <div className='dashDisH'>
                                <h3 className='hB'>{len}</h3>
                                <p className='hM'>Tottal Orders</p>
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className="dashDisMin">
                        <div className='dashDisImg'>
                                <img className='dasImg' src='/comp2.png' alt="" />
                            </div>
                            <div className='dashDisH'>
                                <h3 className='hB'>{dlen}</h3>
                                <p className='hM'>Completed Orders</p>
                            </div>
                        </div>
                        <div className='line'></div>

                        <div className="dashDisMin">
                        <div className='dashDisImg'>
                                <img className='dasImg' src='/dollor.png' alt="" />
                            </div>
                            <div className='dashDisH'>
                                <h3 className='hB'>{add}</h3>
                                <p className='hM'>Tottal Reveneu</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashGraph'>
                      {/* <BarComp/> */}
                 
                <div className='w-full flex justify-between '>

                  <div className='w-1/4 '>
                  <p className='font-extrabold'>Orders</p>
                
                  <div className='flex justify-between  '><p className='font-semibold text-gray-500 mb-0'>Year  </p> <p className='font-semibold text-gray-500'>{yearOrders} orders</p></div>
                  <div className='flex justify-between '><p className='font-semibold text-gray-500'>Today </p> <p className='font-semibold text-gray-500'>{todayOrders} orders</p></div>
                  <div className='flex justify-between '><p className='font-semibold text-gray-500'>Mounthly </p> <p className='font-semibold text-gray-500'>{mounthOrders} orders</p></div>
                  </div>

<div className='w-[1px] bg-gray-400'></div>

                  <div className='w-1/4 '>
                    <div className='flex '>
                    <img className='dasImgM' src='/dollor.png' alt="" />
                  <p className='font-extrabold align-middle h-full'>Reveneu</p>
                  </div>
                  <div className='flex justify-between  '><p className='font-semibold mb-0 text-gray-500'>Year  </p> <p className='font-semibold text-gray-500'>{yearDR} Rs</p></div>
                  <div className='flex justify-between '><p className='font-semibold text-gray-500'>Today </p> <p className='font-semibold text-gray-500'>{todayDR} Rs</p></div>
                  <div className='flex justify-between '><p className='font-semibold text-gray-500'>Mounthly </p> <p className='font-semibold text-gray-500'>{mounthDR} Rs</p></div>
                  </div>

                  <div className='w-[1px] bg-gray-400'></div>

                  
                <div className='w-1/4 '>
                  <p className='font-extrabold'>Completed Orders</p>
                
                  <div className='flex justify-between  '><p className='font-semibold text-gray-500 mb-0'>Year  </p> <p className='font-semibold text-gray-500'>{yearDO} Orders</p></div>
                  <div className='flex justify-between '><p className='font-semibold text-gray-500'>Today </p> <p className='font-semibold text-gray-500'>{todayDO} orders</p></div>
                  <div className='flex justify-between '><p className='font-semibold text-gray-500'>Mounthly </p> <p className='font-semibold text-gray-500'>{mounthDO} orders</p></div>
                  </div>
              

                </div>


                </div>
                <OrderL/>
            </div>
    </div>
  )
}

export default Dashbord