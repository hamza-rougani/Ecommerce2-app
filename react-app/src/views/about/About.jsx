import React from 'react'
import ShippingInfo from './ShippingInfo'
import MethodPay from './MethodPay'
import Printing from "./Printing"
import { useLocation } from 'react-router-dom'
import NotFound from './NotFound';
import UserTerm from './UserTerm'
import Exchange from './Exchange'
import Privacy from './Privacy'
import Footer from './../../components/Home/pages/footer/Footer'
function About() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Docum = searchParams.get("Docum");
  console.log(Docum)
  return (
    <div className='AboutAll'>
    <div className='AboutInfo'>
        <div className='containerIn'>
        {Docum=="Shipping" ? <ShippingInfo/> :""}
        {Docum=="payment" ?<MethodPay/>:""}
        {Docum=="Printing" ?<Printing/>:""}
        {Docum=="User" ?<UserTerm/>:""}
        {Docum=="Exchange" ?<Exchange/>:""}
        {Docum=="privacy" ?<Privacy/>:""}
        {Docum==null ?<NotFound/>:""}
        
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About