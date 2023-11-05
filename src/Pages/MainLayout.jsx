import React from 'react'
import MainNav from '../Component/Signup/Layout/MainNav'
import SideNav from '../Component/Signup/Layout/SideNav'
import Header from '../Component/Signup/Layout/Header'
import UserRegistration from '../Pages/UserRegistration'
import { Outlet, Navigate, useNavigate } from 'react-router'; 

const MainLayout = () => {
  return (
    
    <>

    <MainNav/>
    
      <Header/>
    <Outlet/>
    <div className='myMain mt-40'>
    <SideNav/>
    
    </div>
  
    

    

    </>
  )
}

export default MainLayout