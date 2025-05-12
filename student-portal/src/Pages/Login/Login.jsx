import {useNavigate} from "react-router-dom"

function Login() {

    const navigate=useNavigate()

    const Login=()=>{
        localStorage.setItem("login","true")
        navigate("/dashboard")
    }


    return (
        <>
            <form className='w-50 justify-content-center align-items-center m-auto'>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button onClick={Login} className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Login
