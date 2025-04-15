import React, { useState } from 'react'
import "../styles/Forms.scss"

function Form() {

  const [username, setUsername] = useState()
  const [password, ShowPassword] = useState()

  const FormSubmit = (e) => {
    e.preventDefault()
    alert("Account Created...")
  }

  const User = (e) => {
    setUsername(e.target.value)
  }

  const Password = (e) => {
    ShowPassword(e.target.value)
  }

  const doubleClick = () => {
    alert("Logging In......")
  }

  const Copy=(e)=>{
    e.preventDefault()
    navigator.clipboard.writeText('@Mohitchawda')
    alert("username Copied...")
  }

  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-2'>React Event Handling Demo</h1>
        <form className="row g-3 form" onSubmit={FormSubmit}>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" placeholder='Enter your email.' required onChange={User} />
            <p className='username'>{username}</p>
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder='Enter your password..'  required onChange={Password} />
            <p className='username'>{password}</p>
          </div>
          <div className="col-12">
            <label for className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
          </div>
          <div className="col-12">
            <label className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" required />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <select  className="form-select" required>
              <option selected>Choose...</option>
              <option>Gujarat</option>
              <option>Rajasthan</option>
              <option>Maharashtra</option>
              <option>Jharkand</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" required />
          </div>
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
            <button type="submit" className="btn btn-secondary mx-4" onDoubleClick={doubleClick}>Double click to Login</button>
            <button className='btn btn-dark'
              onClick={Copy}
            >
              Copy Username
            </button>
            <button className='btn btn-danger mx-4'
              draggable onClick={(e)=>e.preventDefault()}
            >
              Drag Me
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
