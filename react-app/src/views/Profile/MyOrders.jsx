import React, { useEffect,useState } from 'react'
import OrderCard from './OrderCard'
import axiosClient from '../../axios-client'
import LoadingA from '../loadings/Loading'
import {useStateContext} from '../../context/ContextProvider'
function MyOrders() {
  const [Orders ,setOrders] = useState()
  const [Loading ,setLoading] = useState(false)
  const [Loading2 ,setLoading2] = useState(false)
  const getUser =localStorage.getItem('user')
  const userU= JSON.parse(getUser);
  const [User,setUser] = useState(userU)

  console.log(User.id)
  useEffect(()=>{
      getOrders()
  },[])
const getOrders = ()=>{
    axiosClient.get(`/DetailsOrders/${User.id}`)
    .then(({data})=>{
      console.log(data.data)
      setOrders(data.data)
      setLoading(true)
      localStorage.setItem('countOrder',data.data.length)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className='MyOrders'>

      {Loading?
      <>
      {Orders.map((o,index)=><OrderCard Order={o} index={index}/>)}
      </>
      :

      <LoadingA/>


    }

    </div>
  )
}

export default MyOrders