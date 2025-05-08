import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login from "../../assets/images/login.jpg"

function Login() {
    const navigate=useNavigate()
    const [userDetail,setUserDetail]=useState({email:"",password:""})
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const user=JSON.parse(localStorage.getItem('user')) ||[]
        const userFound=user.find(user=>user.email===userDetail.email && user.password===userDetail.password)
        if(userFound){
            localStorage.setItem("currentUser",JSON.stringify(userFound))
            alert('logging in....')
            navigate('/product')
            return
        }else{
            alert("User not found please register yourself!")
            navigate('/signin')
        }
    }
    const handleEmail=(e)=>{
        setUserDetail({...userDetail,email:e.target.value})
    }

    const handlepassword=(e)=>{
        setUserDetail({...userDetail,password:e.target.value})
    }

    return (
        <section className="py-5" style={{ backgroundColor: "#FFE4E1" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="card border-0 shadow-sm overflow-hidden">
                            <div className="row g-0">
                                <div className="col-md-6 d-none d-md-block">
                                    <img
                                        src={login}
                                        width={500}
                                        alt="Login"
                                        className="img-fluid h-100 object-fit-cover"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="text-center mb-4">
                                            <h2 className="fw-bold text-warning">Welcome Back</h2>
                                            <p className="text-muted">Sign in to your account</p>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                    name='email'
                                                    onChange={handleEmail}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="••••••••"
                                                    required
                                                    name='password'
                                                    onChange={handlepassword}
                                                />
                                            </div>
                                            <div className="d-flex justify-content-between mb-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <Link href="/forgot-password" className="text-warning text-decoration-none">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                            <button type="submit" className="btn btn-warning text-white w-100 py-2 mb-4">
                                                Sign In
                                            </button>

                                            <div className="text-center mb-4">
                                                <p className="mb-0">
                                                    Don't have an account?{" "}
                                                    <Link to="/signup" className="text-warning text-decoration-none">
                                                        Sign Up
                                                    </Link>
                                                </p>
                                            </div>

                                            <div className="position-relative mb-4">
                                                <hr />
                                                <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                                                    or continue with
                                                </span>
                                            </div>

                                            <div className="d-grid gap-2">
                                                <button type="button" className="btn btn-outline-secondary py-2">
                                                    <i className="bi bi-google me-2"></i> Sign in with Google
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary py-2">
                                                    <i className="bi bi-facebook me-2"></i> Sign in with Facebook
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary py-2">
                                                    <i className="bi bi-apple me-2"></i> Sign in with Apple
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login
