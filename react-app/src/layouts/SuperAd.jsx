import React,{ useEffect,useState} from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import Sidebar from '../components/Admin/Sidebar'
import axiosClient from '../axios-client';
function SuperAd() {
  const {token ,user,setUser,notification} = useStateContext();
  const [loading , setLoadin] = useState(false)
  useEffect(()=>{
    axiosClient.get('/user')
    .then(({data})=>{
        setUser(data)
        setLoadin(true)
        
         }).catch(err=>{
          console.log(err)
          setLoadin(false)
         })
         
 },[])
 
  if(!token){
    return <Navigate to="/Login"/>
      
  }
  if(loading){
  if(!user.Role){
    return <Navigate to="/Home"/>
  }
  if(!user.SuperAdmin){
    return <Navigate to="/ManagProducts"/>
  }
}

  return (
    <div className='AdminList'>
      <Sidebar user={user}/>
      {notification && 
          <div className='notification'>
           {notification}
          </div>
    }
      <Outlet/>
      </div>
  )
}

export default SuperAd