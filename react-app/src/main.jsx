import React from 'react'
import ReactDOM from 'react-dom/client'
import  Routes  from './Routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ContextProvider } from './context/ContextProvider'
import Boxicons from './views/Boxicons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
   <BrowserRouter>
   <Boxicons/>
   <Routes/>
   </BrowserRouter>
   </ContextProvider>
  </React.StrictMode>,
)
