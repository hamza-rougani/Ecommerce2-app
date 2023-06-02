import React from 'react'
import ContainerStatus from './ContainerStatus'
function Confirmed() {
  return (
    <div style={{width:"100%"}}>
       <ContainerStatus filter = "The product has been confirmed" Details='DetailsConfirmed'/>
    </div>
  )
}

export default Confirmed