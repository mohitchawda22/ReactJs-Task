import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import sigin from "../../assets/images/sigin.jpg"

function Signin() {
    const [userData,setUserData]=useState({FirstName:"",LastName:"",email:"",password:"",confirm_password:""})
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const user=JSON.parse(localStorage.getItem('user')) || []
        const existingUser=user.find(user=>user.email===userData.email)
        if(existingUser){
            alert("User already exsist redirecting to login page.......")
            navigate('/login')
        }
        if(userData.password!==userData.confirm_password){
            alert("password does not match")
            return
        }else{
            const newUser={...userData}
            user.push(newUser)
            localStorage.setItem('user',JSON.stringify(user))
            alert("Register successfully..")
            navigate('/login')
        }
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
                                        src={sigin}
                                        width={500}
                                        height={700}
                                        alt="Sign Up"
                                        className="img-fluid h-100 object-fit-cover"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body p-4 p-lg-5">
                                        <div className="text-center mb-4">
                                            <h2 className="fw-bold text-warning">Create Account</h2>
                                            <p className="text-muted">Join our community today</p>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div className="row mb-3">
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <label htmlFor="firstName" className="form-label">
                                                        First Name
                                                    </label>
                                                    <input type="text" name='FirstName' className="form-control" id="firstName" placeholder="John" required onChange={handleChange} />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="lastName" className="form-label">
                                                        Last Name
                                                    </label>
                                                    <input type="text" name='LastName' className="form-control" id="lastName" placeholder="Doe" required onChange={handleChange}/>
                                                </div>
                                            </div>
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
                                                    onChange={handleChange}
                                                    name='email'
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
                                                    onChange={handleChange}
                                                    name='password'
                                                />
                                                <div className="form-text">
                                                    Password must be at least 8 characters with a number and special character.
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="confirmPassword" className="form-label">
                                                    Confirm Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="confirmPassword"
                                                    placeholder="••••••••"
                                                    required
                                                    name='confirm_password'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-check mb-4">
                                                <input className="form-check-input" type="checkbox" id="termsCheck" required />
                                                <label className="form-check-label" htmlFor="termsCheck">
                                                    I agree to the{" "}
                                                    <Link to="/terms" className="text-warning text-decoration-none">
                                                        Terms of Service
                                                    </Link>{" "}
                                                    and{" "}
                                                    <Link to="/privacy" className="text-warning text-decoration-none">
                                                        Privacy Policy
                                                    </Link>
                                                </label>
                                            </div>
                                            <button type="submit" className="btn btn-warning text-white w-100 py-2 mb-4">
                                                Create Account
                                            </button>

                                            <div className="text-center mb-4">
                                                <p className="mb-0">
                                                    Already have an account?{" "}
                                                    <Link to="/login" className="text-warning text-decoration-none">
                                                        Sign In
                                                    </Link>
                                                </p>
                                            </div>

                                            <div className="position-relative mb-4">
                                                <hr />
                                                <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                                                    or sign up with
                                                </span>
                                            </div>

                                            <div className="d-grid gap-2">
                                                <button type="button" className="btn btn-outline-secondary py-2">
                                                    <i className="bi bi-google me-2"></i> Sign up with Google
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary py-2">
                                                    <i className="bi bi-facebook me-2"></i> Sign up with Facebook
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary py-2">
                                                    <i className="bi bi-apple me-2"></i> Sign up with Apple
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

export default Signin
