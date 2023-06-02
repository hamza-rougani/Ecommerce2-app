import React from 'react'
import DetailsOrders from './DetailsOrders'
function DetailsDelivered() {
  return (
    <div style={{width:"100%"}}>
        <DetailsOrders filter='The product has been delivered' updateto='The product has been delivered' type='delivered' />
    </div>
  )
}

export default DetailsDelivered