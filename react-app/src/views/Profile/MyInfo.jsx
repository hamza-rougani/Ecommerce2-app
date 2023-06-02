import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context/ContextProvider'
import axiosClient from '../../axios-client'
import {useTranslation} from 'react-i18next'
function MyInfo() {
    const [showI,setshowI]=useState(false)
    const getuser = localStorage.getItem("user")
    const transfer = JSON.parse(getuser)
    const [user,setUser]=useState(transfer)
    const [userIn,setUserIn]=useState({id:null,name:"",email:"",address:"",numberphone:""})
    const {setNotification} =useStateContext();

    
   const showInput =()=>{
     setshowI(true)
     
   }
   const Cancle =()=>{
     setshowI(false)
   }
   const update =(event)=>{
   event.preventDefault()
   console.log(user)
   axiosClient.put(`/users/${user.id}`,user)
    .then(()=>{
        //to do show notification
         setNotification("User was successfuly updated")
         console.log(user)
         const use = JSON.stringify(user);
         localStorage.setItem('user',use)
      navigate('/MyInfo')
    })
    .catch(err=>{
        const response = err.response;
        console.log(response)
        // 422 validation error
        if(response && response.status == 422){
          setErrors(response.data.errors)
        }
      })
   }
   const {t} = useTranslation()
  return (
    <div className='MyInfo'>
        <div className='contInfo'>
            <div className='Img'>
                <div className='Image'>
                    {showI && <label htmlFor="photo" id='sp'><i class='bx bx-plus'></i></label>}
                
                <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                
                </div>
                <div className='Info'>
                    <form onSubmit={update}>
                    <div className='Name'>
                    <span id='br'>{t('MyInfo.name')}</span>
                    <span id='obacity'>
                        {showI? 
                        <>
                        <input value={user.name} onChange={ev=>setUser({...user,name:ev.target.value})} type='text' placeholder='Full Name'/> 
                        </>
                        :
                        <>
                        {user.name}
                        </>
                        }
                        
                         </span>
                    </div>
                    <div className='Name'>
                    <span id='br'>{t('MyInfo.phone')}</span>
                    <span id='obacity'>
                        
                        {showI? 
                        <input value={user.numberphone} onChange={ev=>setUser({...user,numberphone:ev.target.value})}></input> 
                        :
                        <>
                        {user.numberphone}
                        </>
                        }
                        </span>
                    </div>
                    <div className='Name'>
                    <span id='br'>{t('MyInfo.email')}  {!showI && <>{t('MyInfo.email2')}</>}</span>
                    <span id='obacity'>
                    {showI? 
                        <input value={user.email} onChange={ev=>setUser({...user,email:ev.target.value})}></input> 
                        :
                        <>
                        {user.email}
                        </>
                        }
                        </span>
                    </div>
                    <div className='btn'>
                    {showI? 
                    <div className='btnu'>
                        <button id="btnu" type='submit'>{t('cart.edit')}</button>
                        <button id="btnu" onClick={Cancle}>{t('MyInfo.cancel')}</button>
                    </div>
                        :
                        <button id="btn" onClick={showInput}>{t('MyInfo.changeInfo')}</button>
                        }
                    
                    
                    </div>
                    </form>
                </div>
            </div>
            <div className='twoclass'>
                <div className='par1 v'>
                <div className='Name'>
                    <span id='br'>{t('orders.title')}</span>
                    <span id='obacity'>
                    {showI? 
                        <input value={user.address} onChange={ev=>setUser({...user,address:ev.target.value})}></input> 
                        :
                        <>
                        {user.address}
                        </>
                        }
                       </span>
                </div>
                <div className='Name'>
                    <span id='br'></span>
                    <span id='obacity'>
                    {showI? 
                        <input value='Agadir,Morocco'></input> 
                        :
                        "Agadir,Morocco"
                        }
                    </span>
                </div>
                <div className='Name'>
                    <span id='br'>{t('MyInfo.codepostal')}</span>
                    <span id='obacity'>
                    {showI?
                    <>
                        <input value='80000'></input> 
                        <input type='file' id='photo' style={{display:'none'}}></input> 
                        </> 
                        :
                        "80000"
                        }
                        </span>
                </div>
                </div>
                <div className='par2 v'>
                <div className='Name'>
                    <span id='br'>{t('MyInfo.cart')}</span>
                    <span id='obacity'><button>{t('MyInfo.checkout')} ()</button></span>
                </div> 
                <div className='Name'>
                    <span id='br'>{t('MyInfo.order')}</span>
                    <span id='obacity'><button>{t('MyInfo.checkout')} ()</button></span>
                </div>
                <div className='Name'>
                    <span id='br'>{t('MyInfo.favorite')}</span>
                    <span id='obacity'><button>{t('MyInfo.checkout')} ()</button></span>
                </div>
                </div>
                <div className='par2 v'>
                <div className='Name'>
                    {/* <span id='br'>{t('MyInfo.message')}</span>
                    <textarea name="" id="" cols="30" rows="4"></textarea>
                    <span id='obacity'><button>{t('MyInfo.send')}</button></span> */}
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyInfo