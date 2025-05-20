import React, { Suspense, useContext } from 'react'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { Outlet, useLoaderData } from 'react-router-dom'
import NewsletterSection from './Newsletter/NewsletterSection'
import { ThemeContext } from '../../context/ThemeProvider'

function AppLayout() {
  const user=useLoaderData()
  const {theme}=useContext(ThemeContext)
  return (
    <div className={`min-vh-100 ${theme === 'dark' ? 'dark' : 'light'}`}>
        <Navbar></Navbar>
        <Suspense>
          <Outlet context={user}/>
        </Suspense>
        <NewsletterSection/>
        <Footer></Footer>
    </div>
  )
}

export default AppLayout
