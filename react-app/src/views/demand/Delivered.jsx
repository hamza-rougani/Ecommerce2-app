import React from 'react'
import ContainerStatus from './ContainerStatus'
function Delivered() {
  return (
    <div style={{width:"100%"}}>
      <ContainerStatus filter = "The product has been delivered" Details='DetailsDelivered'/>
    </div>
  )
}

export default Delivered