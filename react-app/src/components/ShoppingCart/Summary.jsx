import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
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
const {t} = useTranslation()
  return (
    <div className='pay'>

    {/* <div className='summary'>
    <h2><img src='https://cdn-icons-png.flaticon.com/128/4290/4290854.png' width="40px"/>SHOPPING CART</h2>

      <div className='SummaryTi'>{t('cart.summary')}</div>
      <div className='total'>
      <span id='price'>{t('cart.subTotal')} :
</span>
      <span id='price'>{Subtotal.toFixed(2)} DH</span>
      </div>
      <div className='total'>
      <span id='price'>{t('cart.shipping')} : </span>
      <span id='price'>{parseFloat(Shipping).toFixed(2)} DH</span>
      </div>
      <div className='total'>
      <span id='price'>{t('cart.total')}</span>
      <span id='price'>{Total.toFixed(2)} DH</span>
      </div>
      {count>0 ?
      <button className='Checkout Checkout1' onClick={checkout}>Checkout({count})</button>
      :
      <button className='Checkout Checkout2' disabled>Checkout({count})</button>
      }
    </div>
    <div className='Payment'>
    <div className='Bu1'>
    <div id='h3'>{t('cart.methodPay')}</div>
    <span style={{opacity:"0.7"}}>{t('cart.desPay')}</span>
    </div><br/>
    <div className='Bu1'>
    <div id='h3'>{t('cart.security')}</div>
    <div className='Security'>
    <img width="20px" src="Images/Security.png"/><span id=''>{t('cart.securityDes')}</span>
    </div>
    </div>
    </div> */}


    <div className='searchInfo'>
    <div className='sideMenu'>
        <div className='M'>
        <span id='chevron-left'><i class='bx bx-shopping-bag'></i></span>
        <span>SHOPPING CART</span>
        </div>
        <div className='button'>
            <button>{t('cart.summary')}</button>
        </div>
        <div className='categoryMen'>
          <ul>
            <li>{t('cart.subTotal')}  <span id="new">{Subtotal.toFixed(2)} DH</span></li>
            <li>{t('cart.shipping')} <span id="new">{parseFloat(Shipping).toFixed(2)}</span></li>
            <li>{t('cart.total')} <span id="new">{Total.toFixed(2)}</span></li>
            <li id="methodPay"><span>{t('cart.methodPay')}</span> <span id='p'>{t('cart.desPay')}</span></li>
            <li id="methodPay"><span>{t('cart.security')}</span> <span id='p'>{t('cart.securityDes')}</span></li>

          </ul>
        </div>
        <div className='payme'>
            {count>0 ?
            <button className='check check1' onClick={checkout}>Checkout({count})</button>
         :
        <button className='check check2' disabled>Checkout({count})</button>
      }
        </div>
    </div>
</div>
    </div>
  )
}

export default Summary