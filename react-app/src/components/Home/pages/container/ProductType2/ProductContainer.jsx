import React, { useEffect,useState } from 'react'
import ProductCard from './ProductCard'
import axiosClient from '../../../../../axios-client'
function ProductContainer() {
  const [PrC2,setPrC2] =useState([])
  const [loading,setloading] =useState(false)
  useEffect(()=>{
    setloading(false)
    axiosClient.get('/Product2')
    .then(({data})=>{
      console.log(data.data)
      setPrC2(data.data)
      setloading(true)
    
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div className='ProductContainer'>
      {loading? 
      <>
      {
        PrC2.map((r)=>{
          return(
            <>
        <ProductCard PrT={r}/>
        <div className='Pr2'>
        <div className='prd prd1'><img height='100%' width='100%' src={`http://127.0.0.1:8000/storage/${r.ImgPr1}`}/></div>
        <div className='prd prd2'><img height='100%' width='100%' src={`http://127.0.0.1:8000/storage/${r.ImgPr2}`} /></div>
       </div>
            </>
          )
        })
      }
        
       </>
       : "loading"}
    </div>
  )
}

export default ProductContainer