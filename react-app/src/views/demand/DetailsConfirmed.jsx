import React from 'react'
import DetailsOrders from './DetailsOrders'
function DetailsConfirmed() {
  return (
    <div style={{width:"100%"}}>
        <DetailsOrders filter='The product has been confirmed' updateto='The product has been shipped' type='shipped' />
    </div>
  )
}

export default DetailsConfirmed