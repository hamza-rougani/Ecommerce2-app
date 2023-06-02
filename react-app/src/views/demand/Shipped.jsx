import React from 'react'
import ContainerStatus from './ContainerStatus'
function Shipped() {
  return (
    <div style={{width:"100%"}}>
      <ContainerStatus filter = "The product has been shipped" Details='DetailsShipped'/>
    </div>
  )
}

export default Shipped