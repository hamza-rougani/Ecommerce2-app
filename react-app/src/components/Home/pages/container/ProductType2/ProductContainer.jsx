import React from 'react'
import ProductCard from './ProductCard'

function ProductContainer() {
  return (
    <div className='ProductContainer'>
        <ProductCard/>
        <div className='Pr2'>
        <div className='prd prd1'><img height='100%' width='100%' src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></div>
        <div className='prd prd2'><img height='100%' width='100%' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></div>
       </div>
    </div>
  )
}

export default ProductContainer