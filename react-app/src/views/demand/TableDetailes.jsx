import React from 'react'
import { useState } from 'react'
function TableDetailes(e) {
    const handleChange = (event) => {
        const { value } = event.target;
        e.setCheckedItems((prevCheckedItems) => {
          if (prevCheckedItems.includes(value)) {
            return prevCheckedItems.filter((item) => item !== value);
          } else {
            return [...prevCheckedItems, value];
          }
        });
      };
    return(
        <tr>
        <th><input onClick={handleChange} value={e.orders.id_demand} type='checkbox'></input></th>
        <th>{e.orders.id_demand}</th>
        <th>{e.orders.product_id}</th>
        <th>{e.orders.title}</th>
        <th>{e.orders.price}</th>
        <th>{e.orders.Quantity_Order}</th>
        <th>{e.orders.TotalShipping}</th>
        <th>{e.orders.total}</th>
        <th><button id='btn' onClick={()=>e.setInPr(e.orders)}>show</button></th>
        
    </tr>
    )
}

export default TableDetailes