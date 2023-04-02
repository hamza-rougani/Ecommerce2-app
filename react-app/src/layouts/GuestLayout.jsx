import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

function GuestLayout() {
  const {token,notification} = useStateContext();
   if(token){
    return <Navigate to="/Home"/>
   }
  return (
    <div>
      <Outlet/>
      {notification && 
          <div className='notification'>
           {notification}
          </div>
    }
      </div>
  )
}

export default GuestLayout