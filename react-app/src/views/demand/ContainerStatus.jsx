import React, { useEffect, useState } from 'react'
import Table from '../../components/Admin/table'
import axiosClient from '../../axios-client'
import LoadingA from '../loadings/Loading'
function Processed(e) {
  const [Orders,setOrders] = useState()
  const [Loading,setLoading] = useState()
  useEffect(()=>{
    getOrders()
  },[])
  const getOrders = ()=>{
    axiosClient.get('/orders')
    .then(({data})=>{
      console.log(data.data)
      setOrders(data.data)
      setLoading(true)
    })
  }
  if(Loading){
    var OrdersFilter = Orders.filter(f=>f.Status==e.filter)
    console.log(OrdersFilter)
  }
  return (
    <>
    {Loading ?
     <Table Orders={OrdersFilter} Details={e.Details}/>
    :
    <div style={{width:"100%"}}>
    <LoadingA/>
    </div>
    
    
}
</>
  )
  
}

export default Processed