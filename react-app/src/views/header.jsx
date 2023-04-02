import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axios-client'
import Category from '../components/Home/pages/category';
function Header() {
    const [cat , catVal] =useState(false);
    function categoryDis(){
        catVal(true)
    }
    const {token,user,setToken,setUser} = useStateContext();
    const onLogout = (E)=>{
  E.preventDefault()
  axiosClient.post('/logout')
      .then(()=>{
       setUser({})
       setToken(null)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    useEffect(()=>{
      axiosClient.get('/user')
      .then(({data})=>{
          setUser(data)
          console.log(data)
           })
   },[])
  return (
    <div className='test1'>
    <div className='mult'>
    <div className='he'>
    <header>
    <ul>
      <li><i class='bx bx-menu'></i></li>
    </ul>
    <ul className='Element'>
    <Link to='/Home'> <li><i class='bx bx-home'></i> Home</li></Link>
      {/* <li><i class='bx bx-category'></i>Category</li> */}
     
    </ul>
    {token ?
    <ul className='mangeUser'>
    <Link to='/shoppingCart'> <li><i class='bx bx-basket'></i> shopping Cart </li></Link>
     <Link to='/Myorders'> <li><i class='bx bx-basket'></i> My orders </li></Link>  
  <li>{user.name}</li>
  {user.Role ?
  <Link to="/ManagProducts">
  <li><button className='btn AdB'>Admin</button></li>
  </Link>
  :""
  }

  <li><button onClick={onLogout} className='btn out'>Log out</button></li>
  
  </ul>
    :
    <ul className='mangeUser'>
    <Link to='/Login'><li><button className='btn log'>Login</button></li></Link>
    <Link to='/SignUp'><li><button className='btn Reg'>Register</button></li></Link>
  </ul>
    }
    
  </header>
  </div>
  </div>
  </div>
  )
}

export default Header