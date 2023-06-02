import React, { useState } from 'react'
import { useStateContext } from '../../context/ContextProvider';
import {Link, useNavigate} from 'react-router-dom'
import axiosClient from '../../axios-client';
import { useTranslation } from 'react-i18next';
function InfoUser(e) {
  const {setNotification} = useStateContext()
  const {user} = useStateContext();
  const Navigate = useNavigate() 
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
 const onPlace = ()=>{
  if(!window.confirm("Are you sure you want to continue?")){
    return 
  }
  e.Product.map((s)=>{
    if(s.quantityCart<2){
      Shipping=s.Shipping
    }else if(s.quantityCart<4){
      Shipping=s.Shipping+(s.Shipping/2)
    }else if(s.quantityCart<6){
      Shipping=s.Shipping*2
    }else if(s.quantityCart<8){
      Shipping=s.Shipping*3
    }else{
      Shipping=s.Shipping*4
    }
    let t = parseFloat(s.price)*parseFloat(s.quantityCart)+Shipping
    let payload = {Status:"The product is being processed",product_id:s.product_id,total:t,Quantity_Order:s.quantityCart,TotalShipping:Shipping}
    axiosClient.post('/orders',payload)
    .then(({data})=>{
      console.log(data)
      setNotification('the Orders has been send successfully');
       Navigate('/MyOrders')
    })
    .catch(err=>{
      console.log(err)
    })
  })
 }
 const {t} = useTranslation()
 const disablePlace = ()=>{
  let Place = document.querySelector('.informationBuy')
  Place.classList.remove('Display')
}
const [statusInfo,setStatusIn] = useState(true)
  return (
    <div className='InfoUser'>
        {/* <div className='InfoU'>
      <div>
       <div className='Name'>{user.name}</div>
       <div className='e'>{user.email}</div>
       <div className='e'>{user.numberphone}</div>
       <div className='e'>{user.address}</div>
       <div className='e'>Agadir,Morroco</div>
       </div>
       <Link to='/MyInfo'><button id="a">{t('cart.edit')}</button></Link>
       </div>
       <hr></hr>
       <div className='InfoU'>
      <div>
       <div className='Name'>{t('cart.methodPay')}</div>
       <div className='e'>{t('cart.desPay')}</div>
      
       </div>
       
       </div>
       <hr></hr>
       <div className='InfoU'>
      <div className='inf'>
       <div className='Name'>{t('cart.summary')}</div>
       <div className='ee'>
        <div>{t('cart.subTotal')}</div>
        <div>{Subtotal.toFixed(2)} DH</div>
       </div>
       <div className='ee'>
        <div>{t('cart.shippingtotal')}</div>
        <div className='bolder'>{Shipping !=0  ?Shipping.toFixed(2) + ' DH':'FREE'} </div>
       </div>
       <div className='ee'>
        <div>
        <div>{t('cart.total')}</div>
        <div className='bolder'>{Total.toFixed(2)} DH</div>
        </div>
        
       </div>
       <di className="buttonsBuy">
       <button onClick={onPlace}>{t('cart.buynow')}</button>
        <button id='cancel' onClick={disablePlace}>Cancel</button>
        </di>
       </div>
       
       </div> */}


       <div className='searchInfo'>
    {/* <h1>Products</h1>
    <p>resultat: {title}</p> */}
    <div className='sideMenu'>
        <div className='M'>
        <span id='chevron-left'><i class='bx bx-chevron-left'></i></span>
        <span>Orders</span>
        </div>
        <div className='button'>
            <button onClick={()=>setStatusIn(true)}>{t('cart.summary')}</button>
            <button onClick={()=>setStatusIn(false)}>User Info</button>
        </div>
        {statusInfo ? <>
          <div className='categoryMen'>
          <ul>
            <li>{t('cart.subTotal')} <span id="new">{Subtotal.toFixed(2)} DH</span></li>
            <li>{t('cart.shippingtotal')} <span id="new">{Shipping !=0  ?Shipping.toFixed(2) + ' DH':'FREE'}</span></li>
            <li>{t('cart.total')} <span id="new">{Total.toFixed(2)} DH</span></li>
            <li id="methodPay"><span>{t('cart.methodPay')}</span> <span id='p'>{t('cart.desPay')}</span></li>
            <li id="methodPay"><span>{t('cart.security')}</span> <span id='p'>{t('cart.securityDes')}</span></li>
          </ul>
        </div>
        </>:
        <div className='categoryMen'>
        <ul>
          <li>Name: <span id="user">{user.name}</span></li>
          <li>Email: <span id="user">{user.email}</span></li>
          <li>Mobile: <span id="user">{user.numberphone}</span></li>
          <li id="methodPay"><span>Address</span> <span id='p'>{user.address}</span></li>
          <li id="methodPay"><span>City</span> <span id='p'>Agadir,Morroco</span></li>
        </ul>
      </div>
        }
       
        <div className='payme'>
        <button className='check check1' onClick={onPlace}>Place Order({count})</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default InfoUser