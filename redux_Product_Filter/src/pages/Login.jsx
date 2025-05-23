import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [userData,setUserData]=useState({email:"",password:""})
    const navigate=useNavigate()
    const login=(e)=>{
      e.preventDefault()
      const exsistingUser=JSON.parse(localStorage.getItem("users"))||[]
      const currentUser=exsistingUser.find(user=>user.email===userData.email)
      if(!userData.email || !userData.password){
        alert("please fill in both fields!")
        return
      }
      if(!currentUser){
        alert("User Not Found Please Register Fisrt!")
        return
      }
      if(currentUser.password !==userData.password ){
        alert("Password Does Not Match!")
        return
      }
      alert("Login successfully!")
      localStorage.setItem("isLogin",true)
      localStorage.setItem("currentUser",JSON.stringify(currentUser))
      navigate("/products")
    }

    const handleChange=(e)=>{
      setUserData((prev)=>({
        ...prev,[e.target.name]:e.target.value
      }))
    }
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 mb-4 text-center">Login to Your Account</h1>

              <form onSubmit={login}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`form-control`}
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control `}
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      name="rememberMe"
                      checked={userData.rememberMe}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-decoration-none">
                    Forgot password?
                  </Link>
                </div>

                <div className="d-grid mb-4">
                  <button type="submit" className="btn btn-dark py-2">
                      Login
                  </button>
                </div>

                <div className="text-center">
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-decoration-none">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
