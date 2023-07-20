'use client'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';

import { useRouter } from 'next/navigation';
import Link from 'next/link';


function ACard(props) {
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
    <Card style={{ width: '15rem' }} className=''>
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.productname}</Card.Title>
        <Card.Text>
       {  props.data.mindetail}
        </Card.Text>
        <Card.Text className='hover:animate-pulse text-red-500'>
          {props.data.price}$
        </Card.Text>
        <Button variant="primary" >Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ACard;