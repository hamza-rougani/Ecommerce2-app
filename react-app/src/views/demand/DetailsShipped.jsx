import React from 'react'
import DetailsOrders from './DetailsOrders'
function DetailsShipped() {
  return (
    <div style={{width:"100%"}}>
        <DetailsOrders filter='The product has been shipped' updateto='The product has been delivered' type='delivered' />
    </div>
  )
}

export default DetailsShipped