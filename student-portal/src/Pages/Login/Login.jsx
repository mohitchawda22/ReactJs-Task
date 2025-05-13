import { useState } from "react"
import {useNavigate} from "react-router-dom"

function Login() {

    const navigate=useNavigate()
    const [FormData,setFormData]=useState({email:"",password:""})
    const userData={
        email:"mohitchawda22jan@gmail.com",
        password:"123"
    }

    const handleChange=(e)=>{
        setFormData({...FormData,[e.target.name]:e.target.value})
    }

    const Login=(e)=>{
        e.preventDefault()
        if (userData.email===FormData.email && userData.password===FormData.password){
            localStorage.setItem("login","true")         
            navigate("/dashboard")
        }else{
            alert("Invalid email")
        }
    }

    return (
        <>
            <form className='w-50 justify-content-center align-items-center m-auto' onSubmit={Login}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={FormData.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={FormData.password} onChange={handleChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Login
