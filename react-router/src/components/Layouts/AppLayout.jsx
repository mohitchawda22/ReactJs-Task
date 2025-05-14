import React, { Suspense } from 'react'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { Outlet, useLoaderData } from 'react-router-dom'
import NewsletterSection from './Newsletter/NewsletterSection'

function AppLayout() {
  const user=useLoaderData()
  return (
    <>
        <Navbar></Navbar>
        <Suspense>
          <Outlet context={user}/>
        </Suspense>
        <NewsletterSection/>
        <Footer></Footer>
    </>
  )
}

export default AppLayout
