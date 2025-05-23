import { Link, useNavigate } from 'react-router-dom'


function TopBanner() {
    const navigate = useNavigate()
    const Islogin = localStorage.getItem("Islogin") === true
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const logout = (e) => {
        e.preventDefault()
        if (currentUser) {
            localStorage.removeItem("currentUser")
            localStorage.setItem("isLogin", false)
            navigate("/login")
        }
    }
    return (
        <div className="bg-black text-white py-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-none d-md-flex align-items-center">
                    <div className="me-4">
                        <i className="bi bi-clock me-2"></i>
                        Visit time: Mon-Sat 9:00-19:00
                    </div>
                    <div>
                        <i className="bi bi-telephone me-2"></i>
                        Call us now: +1 035-477-5588
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="dropdown me-3">
                        <button className="btn btn-sm text-white dropdown-toggle p-0" type="button" data-bs-toggle="dropdown">
                            <i className="bi bi-globe me-1"></i> English
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <button className="dropdown-item">English</button>
                            </li>
                            <li>
                                <button className="dropdown-item">French</button>
                            </li>
                            <li>
                                <button className="dropdown-item">Spanish</button>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        {Islogin ? (
                            <Link to="/login" className="text-white text-decoration-none">
                                <i className="bi bi-person me-1"></i> Login
                            </Link>
                        ) : (
                            <button className="btn btn-sm text-white dropdown-toggle p-0" type="button" data-bs-toggle="dropdown">
                                <i className="bi bi-person-circle me-1"></i> {currentUser?.fullName || "Guest"}
                            </button>
                        )}
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link to="/cart" className="dropdown-item">
                                    My Cart
                                </Link>
                            </li>
                            <li>
                                <Link to="/account/orders" className="dropdown-item">
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                {currentUser ? (
                                    <button className="dropdown-item" onClick={logout}>
                                        Logout
                                    </button>
                                ) : (
                                    <Link to="/login" className="text-black text-decoration-none ms-3">
                                        <i className="bi bi-person "></i> Login
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner
