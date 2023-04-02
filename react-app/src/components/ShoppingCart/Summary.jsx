import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Summary(e) {
  const navigate = useNavigate()
 let Subtotal =0
 let Shipping =0
 let count = 0
e.ProductChecked.map((s)=>{
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
const checkout = ()=>{
  const ProductPay =e.ProductChecked
  const ProductBuy = JSON.stringify(ProductPay);
 localStorage.setItem('Products',ProductBuy)
//  const SummaryPay = {TotalShiping:Shipping,SubTotal:Subtotal,TotalT:Total}
//  const SummaryInfo = JSON.stringify(SummaryPay);
//  localStorage.setItem('Summary',SummaryInfo)
 console.log(localStorage.getItem('Products'))
    navigate('/BuyProduct')
}
  return (
    <div className='pay'>
    <div className='summary'>
      <h2>Summary</h2>
      <div className='total'>
      <span id='price'>Subtotal</span>
      <span id='price'>{Subtotal} DH</span>
      </div>
      <div className='total'>
      <span id='price'>Shipping</span>
      <span id='price'>{Shipping} DH</span>
      </div>
      <div className='total'>
      <span id='price'>Total</span>
      <span id='price'>{Total} DH</span>
      </div>
      {count>0 ?
      <button className='Checkout Checkout1' onClick={checkout}>Checkout({count})</button>
      :
      <button className='Checkout Checkout2' disabled>Checkout({count})</button>
      }
    </div>
    <div className='Payment'>
    <div className='Bu1'>
    <div id='h3'>Payment methods</div>
    <span style={{opacity:"0.7"}}>Paiement when recieving</span>
    </div><br/>
    <div className='Bu1'>
    <div id='h3'>Buyer Protection</div>
    <div className='Security'>
    <img width="20px" src="Images/Security.png"/><span>Get full refund if the item is not as described or if is not delivered</span>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Summary