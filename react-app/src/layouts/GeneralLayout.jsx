import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../views/header'
function GeneralLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default GeneralLayout