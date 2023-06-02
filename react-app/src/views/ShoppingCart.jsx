import React, { useEffect, useState } from 'react'
import AllCards from '../components/ShoppingCart/AllCards'
import Summary from '../components/ShoppingCart/Summary'
import axiosClient from '../axios-client'
import LoadingA from '../views/loadings/Loading'
import { useStateContext } from '../context/ContextProvider'
function ShoppingCart() {
  const [dataCa,setData]= useState([])
  const [loading,setLoading]= useState(false)
  const [Qte,setQte] = useState(0)
  // const {setcountCart} = useStateContext()
  useEffect(()=>{
    getCart()
  },[])
    const getCart=()=>{
        axiosClient.get('/carts')
        .then(({data})=>{
          console.log(data.data)
          setData(data.data)
          setLoading(true)
          // setcountCart(data.data.length)

        }).catch(err=>{
          console.log(err)
        })
    }
  const [checkedItems, setCheckedItems] = useState([]);
  const intList = checkedItems.map((str) => parseInt(str));
 
  const ProductChecked=dataCa.filter(f=>intList.includes(f.product_id))
  



  return (
    <div className='ShoppingCartAll'>
     <div className='containerCart'>
     <Summary ProductChecked={ProductChecked}/>
     {/* <div className='summaryVirtual'></div> */}
      <div className='conCardOfcart'>
      {loading ? 
      <AllCards data = {dataCa} setCheckedItems={setCheckedItems} checkedItems={checkedItems}/>
      :
     <LoadingA/>}
      </div>
     </div>
     </div>

  )
}

export default ShoppingCart