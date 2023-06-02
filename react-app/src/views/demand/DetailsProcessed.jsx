import React from 'react'
import DetailsOrders from './DetailsOrders'
function DetailsProcessed() {
  return (
    <div style={{width:"100%"}}>
        <DetailsOrders filter='The product is being processed' updateto='The product has been confirmed' type='confirmed'/>
    </div>
  )
}

export default DetailsProcessed