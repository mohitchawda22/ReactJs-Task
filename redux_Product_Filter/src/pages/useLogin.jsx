
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useLogin = () => {
    const [userData, setUserData] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const login = (e) => {
        e.preventDefault()
        const exsistingUser = JSON.parse(localStorage.getItem("users")) || []
        const currentUser = exsistingUser.find(user => user.email === userData.email)
        if (!userData.email || !userData.password) {
            toast.warning("please fill in both fields!")
            return
        }
        if (!currentUser) {
            toast.warning("User Not Found Please Register Fisrt!")
            return
        }
        if (currentUser.password !== userData.password) {
            toast.warning("Password Does Not Match!")
            return
        }
        toast.success("Login successfully!")
        localStorage.setItem("isLogin", true)
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        navigate("/products")
    }

    const handleChange = (e) => {
        setUserData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }
    return {
        login, userData, handleChange
    }
}

