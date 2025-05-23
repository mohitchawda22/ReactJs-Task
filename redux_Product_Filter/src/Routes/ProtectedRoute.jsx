import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const isLoggedIn=JSON.parse(localStorage.getItem("isLogin"))
    return isLoggedIn? children :<Navigate to={'/login'} replace/>
 
}

export default ProtectedRoute
