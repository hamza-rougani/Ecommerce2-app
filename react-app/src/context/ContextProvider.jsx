import { createContext, useContext, useState } from "react";


 const StateContext = createContext({
    user:null,
    token:null,
    notification:'',
    countCart:null,
    countOrder:null,
    setUser:()=>{},
    setToken:()=>{},
    setNotification:()=>{},
    setcountOrder:()=>{},
})

export const ContextProvider = (props)=>{
    const [user,setUser] = useState({});
    const [notification , _setNotification] = useState('');
    const [countCart , _setcountCart] = useState(0);
    const [countOrder , _setcountOrder] = useState(0);
    const [token,_setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    // localStorage.getItem('ACCESS_TOKEN')
    const  setToken=(token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token)
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    const  setcountCart=(t)=>{
        _setcountCart(t)
    }
    const  setcountOrder=(t)=>{
        _setcountOrder(t)
    }
    const setNotification = (message)=>{
        _setNotification(message);
        setTimeout(()=>{
            _setNotification('');
        },5000)
    }
    
return(
<StateContext.Provider value={{
    user,
    token,
    setUser,
    setToken,
    notification,
    setNotification,
    countCart,
    setcountCart,
    countOrder,
    setcountOrder
}}>
{props.children}
</StateContext.Provider>)
}

export const useStateContext =()=> useContext(StateContext)
