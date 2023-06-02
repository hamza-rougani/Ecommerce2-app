import React from 'react'

function Shipping(e) {
    var Shipping =0
    var s = e.t
    if(s.quantityCart<2){
        Shipping+=s.Shipping
      }else if(s.quantityCart<4){
        Shipping+=s.Shipping+(s.Shipping/2)
      }else if(s.quantityCart<6){
        Shipping+=s.Shipping*2
      }else if(s.quantityCart<8){
        Shipping+=s.Shipping*3
      }else{
        Shipping+=s.Shipping*4
      }
      
  return (<>{e.setShipi(Shipping.toFixed(2))}</>)
}

export default Shipping