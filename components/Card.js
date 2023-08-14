'use client'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';


function PCard(props) {
  const router = useRouter();

  const [disPrice , setDisPrice] = useState()

  // discount 
useEffect(()=>{
  if(props.data.dis != "0"){
    const percentResult = (+props.data.price/100 )* +props.data.dis;
    const discount = +props.data.price - percentResult
   setDisPrice( discount)

   console.log("per" , percentResult)
   console.log("discount" , disPrice)
  }
},[])
  


  let id = props.data._id;
  let dispatch = useDispatch();

  const nav =() => {
    dispatch({
      type: "SLECT_CART",
      payload: id
    })
    router.push(`/select/${props.data._id}`)
  }

  return (
    <Card onClick={nav} className='border-0 shadow-sm mx-1 p-0 mb-3 cursor-pointer bg-white rounded hover:zoom'>
      <Card.Img className='' variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.productname}</Card.Title>
        <Card.Text>
       {  props.data.mindetail}
        </Card.Text>
        { props.data.dis === "0" ?
        <Card.Text className='hover:animate-pulse text-red-500 '>
          {props.data.price}$
        </Card.Text>
        :
        <div className='flex justify-between'>
          <span className='flex'>
       <Card.Text className='hover:animate-pulse text-gray-500 text-decoration-line-through'>
          {props.data.price}$
        </Card.Text>
        <Card.Text className='hover:animate-pulse text-red-500 ml-2 '>
          {disPrice}$
        </Card.Text>
          </span>
          <Card.Text className='hover:animate-pulse text-green-500 '>
          {props.data.dis}%
        </Card.Text>
        </div>
        }
      </Card.Body>
    </Card>
  );
}

export default PCard;