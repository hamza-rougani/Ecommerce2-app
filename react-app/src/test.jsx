    <header>
      <div className='multiP'>
    <ul>
      <li><i class='bx bx-menu'></i></li>
    </ul>
    <ul className='Element'>
      <li><img src="Images/Fudcon_symbol.png" width='40px' alt="" /><span id='RoxShop'> RoxShop</span></li>
    <div className='Prof'>
    <Link id="Linklight" to='/Home'><div className='logo'> <li><i class='bx bxs-home'></i></li></div></Link>
    <li ><div className='logo'><i class='bx bxs-search'></i></div></li>
    
    </div>
      {/* <li><i class='bx bx-category'></i>Category</li> */}
     
    </ul>
    {token ?
    <ul className='mangeUser'>
      <div className='Prof'>
    <Link id="Linklight" to='/shoppingCart'> <li><div className='logo'><i class='bx bxs-cart-alt'></i> <span className='numberC'>0</span></div> </li></Link>
     <Link id="Linklight" to='/Myorders'> <li> <div className='Pr logo'><i class='bx bx-basket'></i><span className='numberC'>0</span></div></li></Link>  
     <li> <div className='Pr logo'><img src="Images/mr.png" alt="" /></div></li>
     </div>
  {/* <li>{user.name}</li> */}
 


  <div className='Prof'>
    <div className='Pr logo'><i class='bx bxl-whatsapp' ></i></div>
    <div className='Pr logo'><i class='bx bxs-help-circle' ></i></div>
    <div className='Pr logo'><i class='bx bxs-bell-ring'></i><span className='numberC'>0</span></div>
    {user.Role ?
  <Link id="Linklight" to="/ManagProducts">
  <div className='Pr imageL'><i class='bx bx-right-arrow'></i></div>
  </Link>
  :""
  }
    <div className='Pr imageL'><i class='bx bxs-user'></i></div>
    <div className='Pr imageL' onClick={onLogout} ><i class='bx bxs-log-out-circle'></i></div>
    
    
  </div>
  </ul>
    :
    <ul className='mangeUser'>
    <Link to='/Login'><li><button className='btn log'>Login</button></li></Link>
    <Link to='/SignUp'><li><button className='btn Reg'>Register</button></li></Link>
  </ul>
    }
    </div>
  </header>