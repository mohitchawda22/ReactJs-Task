import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

function Protected(props) {
    const {Component}=props
    const navigate=useNavigate()
    useEffect(()=>{
      const isUserLogin=localStorage.getItem("login") 
        if(!isUserLogin){
            navigate('/login')
        }
        else{
            // alert('user logging in....')
            navigate('/dashboard')
            return
        }
    },[navigate])


  return (
    <div>
      {<Component/>}
    </div>
  )
}

export default Protected
