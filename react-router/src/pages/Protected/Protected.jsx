import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {
    const [loading,setLoading]=useState(null)
    const {Component}=props
    const navigate=useNavigate()
    useEffect(()=>{
        const isUserLogin=localStorage.getItem('currentUser')
        if(!isUserLogin){
            navigate('/login')
        }else{
          setLoading(true)
        }
    },[navigate])

    if(loading===null) return <p>Loading......</p>

  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected
