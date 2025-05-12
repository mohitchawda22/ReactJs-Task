import React from 'react'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { Outlet, useLoaderData } from 'react-router-dom'
import NewsletterSection from './Newsletter/NewsletterSection'

function AppLayout() {
  const user=useLoaderData()
  return (
    <>
        <Navbar></Navbar>
        <Outlet context={user}/>
        <NewsletterSection/>
        <Footer></Footer>
    </>
  )
}

export default AppLayout
