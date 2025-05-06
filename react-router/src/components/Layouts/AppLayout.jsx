import React from 'react'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { Outlet } from 'react-router-dom'
import NewsletterSection from './Newsletter/NewsletterSection'

function AppLayout() {
  return (
    <>
        <Navbar></Navbar>
        <Outlet/>
        <NewsletterSection/>
        <Footer></Footer>
    </>
  )
}

export default AppLayout
