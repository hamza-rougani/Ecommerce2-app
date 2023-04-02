import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../../../../axios-client'
import PrCard from './PrCard'

function ProductCon() {
  const [products,setProducts] = useState()
const [loading,setLoading] = useState(false)
useEffect(()=>{

    getProducts();
},[])
const getProducts = ()=>{
    axiosClient.get('/products')
    .then(({data})=>{
       setProducts(data.data)
       setLoading(true)
    }).catch(err=>{
       console.log(err)
       setLoading(false)
    })
}
  return (
    <div className='ProductCon'>
        <div className='sumi'>
          {loading?
          <>
          {
                    products.map((pr)=>{
                    return(
                          <PrCard product={pr}/>
                    )
                  })
          }
          </>
          :"loading"}
        
        
  
        </div>
    </div>
  )
}

export default ProductCon