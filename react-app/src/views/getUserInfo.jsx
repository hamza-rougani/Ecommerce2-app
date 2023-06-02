import React,{useEffect} from 'react'
import axiosClient from '../axios-client'
function getUserInfo() {
  useEffect(()=>{
    axiosClient.get('/user')
    .then(({data})=>{
        setUser(data)
        const use = JSON.stringify(data);
        localStorage.setItem('user',use)
        console.log(data)
         })
 },[])
  return (
    <div></div>
  )
}

export default getUserInfo