import React from 'react'
import { Link } from 'react-router-dom'
import {useTranslation} from "react-i18next"
function footer() {
  const {t} = useTranslation()
  return (
    <div className='footer'>
      
        <div className='foo'>
        <div className='RoxTech'>
        <img src="Images/Fudcon_symbol.png" width="40px" alt=""/>
        ESTEVANICO
      </div>
           {/* <div className='Join'>
             
             <form>
              <input type="text" placeholder='Send Message'></input>
              <button>SEND</button>
             </form>
           </div> */}
        
        <div className='list'>
          <div className="foot">
          <ul>
            <h3>{t('footer.AboutMe')}</h3>
            <li><Link id="LinkDark" to='/shoppingCart'>{t('carta')}</Link></li>
            <li><Link id="LinkDark" to='/MyOrders'>{t('PofileMenu.order')}</Link></li>
            <li><Link id="LinkDark" to='/MyInfo'> {t('PofileMenu.profile')}</Link></li>
            
          </ul>
          <ul>
            <h3>{t("footer.Services")}</h3>
            <li><Link id="LinkDark" to='/about?Docum=Shipping'>{t('footer.Shippinghandling')}</Link></li>
            <li><Link id="LinkDark" to='/about?Docum=payment'>{t('footer.Paymentmethods')}</Link></li>
            <li><Link id="LinkDark" to='/about?Docum=Printing'>{t('footer.Printing')}</Link></li>
          </ul>
          </div>
          <div className="foot">
          <ul>
            <h3>{t("footer.Terms")}</h3>
            <li><Link id="LinkDark" to='/about?Docum=User'>{t("footer.UserTerms")}</Link></li>
            <li><Link id="LinkDark" to='/about?Docum=Exchange'>{t("footer.Exchange")}</Link></li>
            <li><Link id="LinkDark" to='/about?Docum=privacy'>{t("footer.Privacypolicy")}</Link></li>
          </ul>
          <ul>
            <h3>{t("footer.Contactus")}</h3>
            <li>0767287673</li>
            <li>{t("footer.SendMessage")}</li>
     

          </ul>
          </div>
        </div>
        <div className='endfooter'>
          
          {/* <div className='end2'>
           <img  src='https://www.petitprof.fr/wp-content/uploads/2019/11/App-Store-Logo_0.png'/>
           <img src='https://www.petitprof.fr/wp-content/uploads/2019/11/App-Store-Logo_0.png'/>
          </div> */}
          <div className='end1'>
          <div className='media'>
     <div className='social'>
       <i class='bx bxl-facebook-circle'></i>   
       <i class='bx bxl-telegram' ></i>   
       <i class='bx bxl-whatsapp' ></i>   
       <i class='bx bxl-instagram' ></i>
       <i class='bx bxl-twitter'></i>
     </div>
 </div>
          </div>
        </div>
        <div className='copyright'>   
          <p>© 2023 Copyright: ESTEVANICO</p>
 </div>
        </div>

    </div>
//     <div className='media'>
//     <div className='social'>
//     <i class='bx bxl-facebook-circle'></i>
//     <i class='bx bxl-telegram' ></i>
//     <i class='bx bxl-whatsapp' ></i>
//     <i class='bx bxl-instagram' ></i>
//     <i class='bx bxl-twitter'></i>
//     </div>
// </div>
// <div className='copyright'>
//     <h3>© 2023 Copyright: Shiouat.com</h3>
// </div>
  )
}

export default footer