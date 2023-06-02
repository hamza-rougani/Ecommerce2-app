import { createContext, useEffect, useState } from "react"
import axiosClient from "../../axios-client"

const getCartInfo = (r)=>{
    const [cart,setcart] = useState([])
    useEffect(()=>{
        axiosClient.get('/carts')
    .then(({data})=>{
        setcart(data.data)
        console.log(data.data)
    })
    .catch(err=>{
        console.log(err)
    })
    if(r=="count"){
      return cart.length
    }else{
        return cart
    }
} ,[])
  
}

export {getCartInfo}

