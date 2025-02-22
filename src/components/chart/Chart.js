// import './Chart.css'
import React from 'react'
import './chart.css'

import {
  ResponsiveContainer ,
  LineChart ,
  Line ,
  XAxis ,
  CartesianGrid ,
  Tooltip
} from 'recharts'

export default function Chart({title,data,dataKey,grid}) {
  return (
    <div className='chart'>
      <h3 className='titleChart'> {title} </h3>
      <ResponsiveContainer width="100%" aspect={4}>
      <LineChart data={data} >
        <XAxis dataKey={dataKey} stroke='#5550bd' />
        <Line dataKey={dataKey} stroke='#5550bd' type="monotone" />
        <Tooltip />
        {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>} 
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}