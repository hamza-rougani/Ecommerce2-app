import React from 'react'
import LineBefore from './LineBefore'
import ProductCon from './ProductList/ProductCon'
import ProductLarg from './ProductList/ProductLarg'
import ProductContainer from './ProductType2/ProductContainer'
import AnimationCard from './ProductList/animationCard'
import ProductSlide from './ProductType3/ProductSlide'
function Container() {
  return (
    <div className='container move'>
        <ProductCon/>
       
        {/* <ProductLarg/>   */}
        <ProductContainer/>
        {/* <AnimationCard/> */}
        <ProductSlide/>
    </div>
  )
}

export default Container