import React,{ useEffect,useState} from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import Sidebar from '../components/Admin/Sidebar'
import axiosClient from '../axios-client';
function AdminLayout() {
  const {token ,user,setUser,notification} = useStateContext();
  const [loading , setLoadin] = useState(false)
  console.log(notification)
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
    console.log(user.Role)
    return <Navigate to="/Home"/>
    
  }
}
  return (
    <div className='AdminList'>
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