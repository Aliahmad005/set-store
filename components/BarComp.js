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