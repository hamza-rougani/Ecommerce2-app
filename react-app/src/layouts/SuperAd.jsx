import React,{ useEffect,useState} from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import Sidebar from '../components/Admin/Sidebar'
function SuperAd() {
  const {token ,user,setUser,notification} = useStateContext();
  const getUser = localStorage.getItem('user')
  const traUser = JSON.parse(getUser)
  if(!token){
    return <Navigate to="/Login"/>
      
  }

  if(!traUser.Role){
    return <Navigate to="/Home"/>
  }
  if(!traUser.SuperAdmin){
    return <Navigate to="/ManagProducts"/>
  }

  return (
    <div className='AdminList'>
      {console.log(user.Role)}
      <Sidebar/>
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