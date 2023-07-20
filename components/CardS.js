import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Skeleton} from 'antd';


const CardS = () => {
    return (
        <Card   className='border-0 shadow  bg-white rounded hover:zoom'>
         <Skeleton.Image active   style={{width:'100%'  , height:'200px' }}/> 

          <Card.Body>

            {/* <Card.Title>{props.data.productname}</Card.Title>
            <Card.Text>
           {  props.data.mindetail}
            </Card.Text>
            <Card.Text className='hover:animate-pulse text-red-500'>
              {props.data.price}$
            </Card.Text> */}
            <Skeleton active title />
            
          </Card.Body>
        </Card>
      );
}

export default CardS