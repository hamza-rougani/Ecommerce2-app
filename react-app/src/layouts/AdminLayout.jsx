import React,{ useEffect,useState} from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import Sidebar from '../components/Admin/Sidebar'
function AdminLayout() {
  const {token ,user,notification} = useStateContext();
  const getUser = localStorage.getItem('user')
  const traUser = JSON.parse(getUser)
  console.log(notification)
 
  if(!token){
    return <Navigate to="/Login"/>
      
  }
  if(!traUser.Role){
    return <Navigate to="/Home"/>
    
  }

 

  return (
    <div className='AdminList'>
      {console.log("hhhh")}
      {console.log(traUser)}
      <Sidebar/>
      <Outlet/>
      {notification && 
          <div className='notification'>
           {notification}
          </div>
    }
      </div>
  )
}

export default AdminLayout