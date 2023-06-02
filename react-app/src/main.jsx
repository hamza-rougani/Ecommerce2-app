import React from 'react'
import ReactDOM from 'react-dom/client'
import './views/Languages/i18n'
import  Routes  from './Routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ContextProvider } from './context/ContextProvider'
import Boxicons from './views/Boxicons'
import Menu from './views/menu/Menu'
import { Provider } from 'react-redux'
import {store} from './ReduxJs/app/Store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <ContextProvider>
   <BrowserRouter>
   <Boxicons/>
   <Menu/>
   <Routes/>
   </BrowserRouter>
   </ContextProvider>
   </Provider>
  </React.StrictMode>
)
