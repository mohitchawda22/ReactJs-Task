import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const user = {
        name: "mohit",
    }
    const login=()=>{
        localStorage.setItem("user",user)
    }
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 mb-4 text-center">Login to Your Account</h1>

              <form onSubmit={""}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`form-control `}
                    id="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
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
                    // value={formData.password}
                    // onChange={handleChange}
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
                    //   checked={formData.rememberMe}
                    //   onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-decoration-none">
                    Forgot password?
                  </Link>
                </div>

                <div className="d-grid mb-4">
                  <button type="submit" className="btn btn-dark py-2" disabled={""} onClick={login}>
                    {"" ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Logging in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-decoration-none">
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
