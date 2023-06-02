import React, { useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../context/ContextProvider'

function SignUp() {
  const {setUser,setToken} = useStateContext();
  const [Errors,setErrors]=useState(false);
  const Name = useRef()
  const email = useRef()
  const password = useRef()
  const passwordCon = useRef()
  const phone = useRef()
  const address = useRef()
  const City = useRef()
  
  const onSubmit =(ev)=>{
      ev.preventDefault()
      const payload = {
        name:Name.current.value,
        email:email.current.value,
        password:password.current.value,
        password_confirmation:passwordCon.current.value,
        address:address.current.value,
        numberphone:phone.current.value,
        city:City.current.value
        
      }
      console.log(payload)
      axiosClient.post('/signup',payload)
      .then(({data})=>{
        setUser(data.user)
        setToken(data.token)
        debugger;
      })
      .catch(err=>{
        const response = err.response;
        if(response && response.status==422){
          setErrors(response.data.errors)
        }
      })
  }
  return (
    <div>
       <div className='Register'>
        <div className='ReContainer'>
        <div className='signUp'>
            <h2>REGISTER</h2>
            <form onSubmit={onSubmit}>
              <div className='inp'>
                <input ref={Name} type="text" placeholder='Full Name'/>
                <input ref={email} type="email" placeholder='Email Address'/>
                <input ref={password} type="password" placeholder='password'/>
                <input ref={passwordCon} type="password" placeholder='password confirmation'/>
              </div>
              <div className='inp'>
                <input ref={phone} type="number" placeholder='number phone'/>
                <input ref={City} type="text" placeholder='City'/>
                <input ref={address} name="" id="textarea" type="text" placeholder='full address'/>
                
                <button>Sign up</button>
                
                </div>
                
            </form>
            <div className='signin'>IF YOU HAVE ALREADY ACCOUNT ?  <Link id='ty' to='Login'>LOGIN</Link> </div>
              {Errors ? <>
                <div className='Errors'>
               {Object.keys(Errors).map(key=>(
                <p key={key}>{Errors[key][0]}</p>
               )
              )
               }
               </div>
              </>
              :""
              }
            
        </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp