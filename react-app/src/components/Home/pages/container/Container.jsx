import React from 'react'
import LineBefore from './LineBefore'
import ProductCon from './ProductList/ProductCon'
import ProductLarg from './ProductList/ProductLarg'
import ProductContainer from './ProductType2/ProductContainer'
import AnimationCard from './ProductList/animationCard'
function Container() {
  return (
    <div className='container move'>
      <ProductLarg/>
      <AnimationCard/>
      <ProductCon/>
      {/* <div className='c'>
      <div className='contai'>
        <div>
        <LineBefore/>
        <ProductContainer/>
        </div>
        </div>
        </div>
        <ProductCon/> */}
    </div>
  )
}

export default Container