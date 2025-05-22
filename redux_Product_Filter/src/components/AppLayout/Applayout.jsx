import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import TopBanner from '../Top-Banner/TopBanner'
import Footer from '../Footer/Footer'


function Applayout() {
    return (
        <>
            <TopBanner/>
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Applayout
