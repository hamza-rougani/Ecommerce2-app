import React, { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../context/ContextProvider'

function SignUp() {
  const {setUser,setToken} = useStateContext();
  const [Errors,setErrors]=useState(null);
  const Name = useRef()
  const email = useRef()
  const password = useRef()
  const passwordCon = useRef()
  const phone = useRef()
  const address = useRef()
  
  const onSubmit =(ev)=>{
      ev.preventDefault()
      const payload = {
        name:Name.current.value,
        email:email.current.value,
        password:password.current.value,
        password_confirmation:passwordCon.current.value,
        address:address.current.value,
        numberphone:phone.current.value
        
      }
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
        <div className='Logo'>
          
        </div>
        <div className='signUp'>
            <h2>Sign up</h2>
            <form onSubmit={onSubmit}>
                <input ref={Name} type="text" placeholder='Full Name'/>
                <input ref={email} type="email" placeholder='Email Address'/>
                <input ref={password} type="password" placeholder='password'/>
                <input ref={passwordCon} type="password" placeholder='password confirmation'/>
                <input ref={phone} type="number" placeholder='number phone'/>
                <textarea ref={address} name="" id="textarea"  rows="3" placeholder='full address'></textarea>
                <button>Sign up</button>
                <span id='already'>Do have already an account ? <a href="#">Sign in</a></span> 
            </form>
            <div className='Errors'>
              {Errors && <>
               {Object.keys(Errors).map(key=>(
                <p key={key}>{Errors[key][0]}</p>
               )
              )
               }
              </>
              }
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp