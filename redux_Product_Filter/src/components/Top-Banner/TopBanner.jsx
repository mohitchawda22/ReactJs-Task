import { Link } from 'react-router-dom'


function TopBanner() {
    //   const { user, logout } = useAuth()
    const user={
        name:"mohit"
    }
    // const user=JSON.parse(localStorage.getItem("user"))
    const logout = () => {
        localStorage.removeItem("user")
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
                        <button className="btn btn-sm text-white dropdown-toggle p-0" type="button" data-bs-toggle="dropdown">
                            <i className="bi bi-person-circle me-1"></i> {user.name}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link href="/account" className="dropdown-item">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/orders" className="dropdown-item">
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                {user ? (
                                    <button className="dropdown-item" onClick={logout}>
                                        Logout
                                    </button>
                                ) : (
                                    <Link href="/login" className="text-white text-decoration-none">
                                        <i className="bi bi-person me-1"></i> Login
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
