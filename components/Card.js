'use client'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';

import { useRouter } from 'next/navigation';
import Link from 'next/link';


function PCard(props) {
  const router = useRouter();

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
    <Card onClick={nav} className='border-0 shadow-sm mx-1 p-0 mb-3 bg-white rounded hover:zoom'>
      <Card.Img className='' variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.productname}</Card.Title>
        <Card.Text>
       {  props.data.mindetail}
        </Card.Text>
        <Card.Text className='hover:animate-pulse text-red-500'>
          {props.data.price}$
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default PCard;