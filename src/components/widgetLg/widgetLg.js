import React from 'react'
import './widgetLg.css'
import { transActons } from '../../datas'

const Button = ({type}) =>{
  return <button className={'widgetLgButton ' + type}> {type} </button>
}

export default function WidgetLg() {
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'></h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh' >Customer</th>
          <th className='widgetLgTh' >Date</th>
          <th className='widgetLgTh' >Amount</th>
          <th className='widgetLgTh' >status</th>
        </tr>
        {transActons.map((transActon) => (

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={transActon.img} className='widgetLgImg'/>
            <span className='widgetLgName'> {transActon.customer} </span>
          </td>
          <td className='widgetLgDate'>
            {transActon.date}
          </td>
          <td className='widgetLgAmount'>$ {transActon.amount}</td>
          <td className='widgetLgStatus'>
            <Button type={transActon.status} />
          </td>
        </tr>
        ))}
      </table>

    </div>
  )
}
