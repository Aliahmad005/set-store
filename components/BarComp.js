import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarComp = () => {

    const data = [
        {
          name: 'Mon',
          completed: 400,
          pending: 240,
          amt: 2400,
        },
        {
          name: 'Wed',
          completed: 300,
          pending: 139,
          amt: 2210,
        },
        {
          name: 'Tue',
          completed: 200,
          pending: 980,
          amt: 2290,
        },
        {
          name: 'Thr',
          completed: 278,
          pending: 390,
          amt: 2000,
        },
        {
          name: 'Fri',
          completed: 189,
          pending: 480,
          amt: 2181,
        },
        {
          name: 'Sat',
          completed: 239,
          pending: 380,
          amt: 2500,
        },
        {
          name: 'Sun',
          completed : 349,
          Pending : 4300,
          amt: 2100,
        },
      ];
      


  return (
    <div>
    <h1 className='barH'> Daily Reports</h1>

   
    <BarChart className='BarWidth'
      width={700}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pending" fill="#8884d8" />
      <Bar dataKey="completed" fill="#82ca9d" />
    </BarChart>
  

   </div>
  )
}

export default BarComp




/// checking



// function productSection(oldData = initialProducts, newData) {

//   if (newData.type == "Card_Detail") {
//       oldData.DetailProduct = newData.payload
//       //   console.log(oldData.DetailProduct)
//   } else if (newData.type == "AD_TO_CART") {
//       let index = oldData.AdToCart.findIndex((product) => {
//           return product.id == newData.payload.id
//       })
//       //   console.log(index)
//       if (index != -1) {

//           let newqantity = (+newData.payload.quantity) + (+oldData.AdToCart[index].quantity)
//           let newTotal = (+newData.payload.total_price) + (+oldData.AdToCart[index].total_price)

//           oldData.AdToCart[index].quantity = newqantity
//           oldData.AdToCart[index].total_price = newTotal
//       } else {
//           oldData.AdToCart.push(newData.payload)
//       }


//   } else if (newData.type = 'AD_TO_CART_DEL') {

//       console.log(newData.myindex)
//       let index = newData.myindex
//       oldData.AdToCart.splice(index, 1);
//       console.log(oldData.AdToCart)

//   } else if (newData.type == "ORDER_DONE") {
//       oldData.AdToCart = {}
//   }

//   return { ...oldData, AdToCart: [...oldData.AdToCart] }


// }