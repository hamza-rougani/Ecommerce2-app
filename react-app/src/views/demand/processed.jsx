import React from 'react'
import ContainerStatus from './ContainerStatus'
function processed() {
  return (
    <div style={{width:"100%"}}>
      <ContainerStatus filter = "The product is being processed" Details='DetailsProcessed'/>
    </div>
  )
}

export default processed