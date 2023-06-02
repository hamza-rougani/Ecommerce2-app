import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import GuestLayout from './layouts/GuestLayout'
import AdminLayout from './layouts/AdminLayout'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Login from './views/Login'
import SignUp from './views/SignUp'
import ManagUsers from './views/ManagUsers'
import ManagProducts from './views/ManagProducts'
import AddUser from './views/AddUser'
import Show from './views/show'
import SuperAd from './layouts/SuperAd'
import GeneralLayout from './layouts/GeneralLayout'
import CreateProduct from './views/CreateProduct'
import ProductsCatalog from './views/ProductsCatalog'
import ShoppingCart from './views/ShoppingCart'
import Confirmed from './views/demand/Confirmed';
import Processed from './views/demand/processed'
import Shipped from './views/demand/Shipped'
import Delivered from './views/demand/Delivered'
import BuyProduct from './views/demand/BuyProduct'
import DetailsOrders from './views/demand/DetailsOrders'
import DetailsProcessed from './views/demand/DetailsProcessed'
import DetailsShipped from './views/demand/DetailsShipped'
import DetailsConfirmed from './views/demand/DetailsConfirmed'
import DetailsDelivered from './views/demand/DetailsDelivered'
import ProfileLayout from './layouts/ProfileLayout'
import MyOrders from './views/Profile/MyOrders'
import MyInfo from './views/Profile/MyInfo'
import Catalog from './views/Catalog/Catalog'
import Products from './views/Header/Products'
import About from './views/about/About'


function RoutesApp() {
  
  return (
    <Routes>
        {/*access by users unauthorized */}
        <Route path='/' element={<GuestLayout/>}>
           <Route path='/' element={<Navigate to='/Home'/>}/>
           <Route path='/Login' element={<Login/>}/>
           <Route path='/SignUp' element={<SignUp/>}/>
        </Route>
        {/*access by users authorized */}
        <Route path='/' element={<DefaultLayout/>}>
        <Route path='/ShoppingCart' element={<ShoppingCart/>}/>
        <Route path='/BuyProduct' element={<BuyProduct/>}/>
        </Route>
         {/*Profile layout*/}
         <Route path='/' element={<ProfileLayout/>}>
          <Route path='/Myorders' element={<MyOrders/>}/>
          <Route path='/MyInfo' element={<MyInfo/>}/>
        </Route>
        {/*access by admin */}
        <Route path='/' element={<AdminLayout/>}>
           <Route path='/ManagProducts' element={<ManagProducts/>}/>
           <Route path='/CreateProduct' element={<CreateProduct/>}/>
           <Route path='/CreateProduct/:id' element={<CreateProduct/>}/>
           <Route path='/ProductsCatalog' element={<ProductsCatalog/>}/>
           <Route path='/ProductsCatalog/:id' element={<ProductsCatalog/>}/>
           <Route path='/Catalog' element={<Catalog/>}/>
           <Route path='/Confirmed' element={<Confirmed/>}/>
           <Route path='/Processed' element={<Processed/>}/>
           {/* <Route path='/DetailsOrders/:id' element={<DetailsOrders/>}/> */}
           <Route path='/Shipped' element={<Shipped/>}/>
           <Route path='/Delivered' element={<Delivered/>}/>
           <Route path='/DetailsProcessed/:id' element={<DetailsProcessed/>}/>
           <Route path='/DetailsConfirmed/:id' element={<DetailsConfirmed/>}/>
           <Route path='/DetailsShipped/:id' element={<DetailsShipped/>}/>
           <Route path='/DetailsDelivered/:id' element={<DetailsDelivered/>}/>
        </Route>
        {/*access by super admin */}
        <Route path='/' element={<SuperAd/>}>
           <Route  path='/ManagUsers' element={<ManagUsers/>}/>
           <Route path='/ManagProducts' element={<ManagProducts/>}/>
           <Route path='AddUser/:id' element={<AddUser key="userUpdate"/>}/>
           <Route path='AddUser/new' element={<AddUser key="userCreate"/>}/>
        </Route>
        {/*access by all*/}
        <Route path='/' element={<GeneralLayout/>}>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/show/:id' element={<Show/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          
        </Route>
       
        <Route path='/' element={<NotFound/>}/>
    </Routes>
  )
}

export default RoutesApp