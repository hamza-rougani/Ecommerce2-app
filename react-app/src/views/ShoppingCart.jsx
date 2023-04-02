import React, { useEffect, useState } from 'react'
import AllCards from '../components/ShoppingCart/AllCards'
import Summary from '../components/ShoppingCart/Summary'
import axiosClient from '../axios-client'

function ShoppingCart() {
  const [dataCa,setData]= useState([])
  const [loading,setLoading]= useState(false)
  const [Qte,setQte] = useState(0)
  useEffect(()=>{
    getCart()
  },[])
    const getCart=()=>{
        axiosClient.get('/carts')
        .then(({data})=>{
          console.log(data.data)
          setData(data.data)
          setLoading(true)
        }).catch(err=>{
          console.log(err)
        })
    }
  const [checkedItems, setCheckedItems] = useState([]);
  const intList = checkedItems.map((str) => parseInt(str));
 
  const ProductChecked=dataCa.filter(f=>intList.includes(f.product_id))
  



  return (
    <div className='ShoppingCartAll'>
      {loading ? 
     <div className='containerCart'>
     <Summary ProductChecked={ProductChecked}/>
      <div className='conCardOfcart'>
      <AllCards data = {dataCa} setCheckedItems={setCheckedItems} checkedItems={checkedItems}/>
      </div>
     </div>
     :"loading"}
    </div>
  )
}

export default ShoppingCart