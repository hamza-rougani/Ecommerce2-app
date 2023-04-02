import React from 'react'
import AllCardsBuy from '../../components/BuyProducts/AllCardsBuy'

import InfoUser from '../../components/BuyProducts/InfoUser'


function BuyProduct() {
  const getProducts = localStorage.getItem('Products')
  const Products = JSON.parse(getProducts);
  console.log('prody')
  console.log(Products)
  return (
    <div className='BuyProduct'>
        <div className='Buy'>
    
      <AllCardsBuy Product = {Products}/>
      <div className='informationBuy'>
      <InfoUser  Product = {Products}/>
  
      </div>
      
      </div>
    </div>
  )
}

export default BuyProduct