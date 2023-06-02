import React from 'react'
import {useTranslation}  from  'react-i18next'
function OrderCard(e) {
  const {t} = useTranslation()
  let ev=e.Order
  let totalPrice = parseFloat(ev.price)*parseInt(ev.Quantity_Order)
  const showDetails =(v)=>{
    let OrderCard = document.querySelectorAll('.OrderCard')
    OrderCard[e.index].classList.add('showDetails')
  }
  const lessDetails =()=>{
    let OrderCard = document.querySelectorAll('.OrderCard')
    OrderCard[e.index].classList.remove('showDetails')

  }

  return (
    <div className='OrderCard'>
      <div className='image'>
      <img src={`http://127.0.0.1:8000/storage/${ev.ImgB}`} width='100%' height='100%'/>
      </div>
      <div className='ConOrder'>
      <div className='text'>
        <div ><span className='Title'>{t('orders.title')} :</span> <span style={{opacity:'0.8',fontSize:'16px'}}>{ev.title}</span></div>
        {/* <div><span className='Title '>{t('orders.desc')} :</span> <span style={{opacity:'0.8',fontSize:'16px'}}>{ev.description}</span></div> */}
        <div className=''><span className='Title'>{t('buyProduct.quantity')} </span>:{ev.Quantity_Order} </div>
        <div><span className='Title'>{t('orders.price')} :</span > <span className='r'>{ev.price} DH</span></div>
        <div ><span className='Title'>{t('cart.shipping')} :</span> <span style={{opacity:'0.8',fontSize:'16px'}}>{ev.Shipping}</span></div>
        <div ><button className='seemore more'  onClick={showDetails}>See More</button></div>
        <div ><button className='seemore less'  onClick={lessDetails}>See Less</button></div>
      </div>
      <div className='Details '>
        <div>
        <div className='Status'><span className='Shipping'>{t('orders.status')} :</span> <span id='st'>{ev.Status}</span></div>
        <div ><span className='Shipping'>{t('orders.category')} :</span> <span style={{opacity:'0.8',fontSize:'16px'}}>{ev.category}</span></div>
        <div ><span className='Shipping'>{t('cart.shippingtotal')} :</span> <span style={{opacity:'0.8',fontSize:'16px'}}>{ev.TotalShipping} DH</span></div>
        <div ><span className='Shipping'>{t('cart.subTotal')} :</span> <span style={{opacity:'0.8',fontSize:'16px'}}>{totalPrice}</span></div>
        </div>
        <div className='btn'>
        <button id='TotalOrder'><div ><span >{t('cart.total')}:</span> <span style={{opacity:'0.8'}}>{ev.total} dh</span></div></button>
        <button>{t('orders.showprd')}</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OrderCard