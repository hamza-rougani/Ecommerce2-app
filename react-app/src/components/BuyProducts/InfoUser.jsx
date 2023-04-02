import React, { useState } from 'react'
import { useStateContext } from '../../context/ContextProvider';
function InfoUser(e) {
  const [ChQte,serChQte] = useState()
  const Product = e.Product[0]
  const {user} = useStateContext();
  let Subtotal =0
  let Shipping =0
  let count = 0
 e.Product.map((s)=>{
 
   Subtotal+=s.price*s.quantityCart
   count++
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
   
 })
 
 let Total  = Subtotal+Shipping
  return (
    <div className='InfoUser'>
        <div className='InfoU'>
      <div>
       <div className='Name'>{user.name}</div>
       <div className='e'>{user.email}</div>
       <div className='e'>{user.numberphone}</div>
       <div className='e'>{user.address}</div>
       <div className='e'>Agadir,Morroco</div>
       </div>
       <button id="a">Edit</button>
       </div>
       <hr></hr>
       <div className='InfoU'>
      <div>
       <div className='Name'>Payment Method</div>
       <div className='e'>Payment on delivery</div>
      
       </div>
       
       </div>
       <hr></hr>
       <div className='InfoU'>
      <div className='inf'>
       <div className='Name'>Summary</div>
       <div className='ee'>
        <div>Total item costs</div>
        <div>{Subtotal} DH</div>
       </div>
       <div className='ee'>
        <div>Total Shipping</div>
        <div className='bolder'>{Shipping !=0  ?Shipping + ' DH':'FREE'} </div>
       </div>
       <div className='ee'>
        <div>
        <div>Total</div>
        <div className='bolder'>{Total} DH</div>
        </div>
        <button>Place order</button>
       </div>
       </div>
       
       </div>
    </div>
  )
}

export default InfoUser