import React from 'react'
import AllCardsBuy from '../../components/BuyProducts/AllCardsBuy'
import { useTranslation } from 'react-i18next';
import InfoUser from '../../components/BuyProducts/InfoUser'


function BuyProduct() {
  const { t, i18n } = useTranslation();

  const getProducts = localStorage.getItem('Products')
  const Products = JSON.parse(getProducts);
  console.log('prody')
  console.log(Products)
  const displayPlace = ()=>{
    let Place = document.querySelector('.informationBuy')
    Place.classList.add('Display')
  }
 
  return (
    <div className='BuyProduct'>
        <div className='Buy'>
        {/* {i18n.language=="ar" ?<div className='arabic'></div>:""} */}
        <div className='informationBuy'>
      <InfoUser  Product = {Products}/>
  
      </div>
      <AllCardsBuy Product = {Products}/>
      {/* {i18n.language!="ar" ?<div className='arabic'></div>:""} */}
      <div className='btnDisplay' onClick={displayPlace}>Price Total</div>
      
      
      </div>
    </div>
  )
}

export default BuyProduct