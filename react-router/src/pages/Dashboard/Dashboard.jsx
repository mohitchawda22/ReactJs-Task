import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { dashboardData } from '../../Data/Dashboard';

function Dashboard() {

  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      setIsSidebarOpen(mobile ? false : true);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const profileName = JSON.parse(localStorage.getItem("currentUser"))
  return (
    <div className="min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid px-4">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <span className="fw-bold text-danger">AFJ</span>
            <span className="ms-2">Furniture</span>
          </Link>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-light d-lg-none me-2"
              onClick={toggleSidebar}
            >
              <i className="bi bi-list"></i>
            </button>

            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
              >
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-2"
                  style={{ width: '30px', height: '30px' }}>
                  <i className="bi bi-person text-dark">
                    {/* <img src="" alt="" /> */}
                  </i>
                </div>
                <span className="d-none d-md-inline">{profileName?.FirstName.toUpperCase()}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to="/dashboard/profile" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/settings" className="dropdown-item">
                    Settings
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link to="/login" className="dropdown-item">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="d-flex">
        <div
          className={`sidebar bg-light shadow-sm ${isSidebarOpen ? "show" : "hide"}`}
          style={{
            width: isSidebarOpen ? "280px" : "0",
            minHeight: "calc(100vh - 56px)",
            position: isMobile ? "fixed" : "relative",
            zIndex: 1000,
          }}
        >
          <div className="sidebar-content p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="mb-0 text-primary">Dashboard</h5>
              {isMobile && (
                <button className="btn btn-outline-secondary btn-sm" onClick={toggleSidebar}>
                  <i className="bi bi-x-lg"></i>
                </button>
              )}
            </div>

            <div className="text-center mb-4">
              <div className="position-relative mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                <div className="rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center border"
                  style={{ width: "80px", height: "80px" }}>
                  <i className="bi bi-person text-primary fs-2"></i>
                </div>
                <div
                  className="position-absolute bg-success rounded-circle"
                  style={{ width: "16px", height: "16px", bottom: "5px", right: "5px", border: "2px solid white" }}
                ></div>
              </div>
              <h6 className="mb-1 text-dark">{profileName?.FirstName.toUpperCase() + profileName?.LastName.toUpperCase()}</h6>
              <p className="text-muted small mb-0">{profileName?.email}</p>
            </div>

            <div className="mb-4">
              <Link to="/product" className="btn btn-warning w-100">
                <i className="bi bi-bag me-2"></i> Continue Shopping
              </Link>
            </div>

            <div className="nav flex-column">
              {dashboardData.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`nav-link d-flex align-items-center p-2 rounded mb-1 text-dark ${location.pathname === item.to ? "active" : ""
                    }`}
                >
                  <i className={`bi ${item.icon} me-3 fs-5`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <hr className="my-4" />

            <div className="nav flex-column">
              <Link to="/contact" className="nav-link d-flex align-items-center p-2 rounded text-muted">
                <i className="bi bi-question-circle me-3 fs-5"></i>
                <span>Help & Support</span>
              </Link>
              <Link to="/login" className="nav-link d-flex align-items-center p-2 rounded text-muted">
                <i className="bi bi-box-arrow-right me-3 fs-5"></i>
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex-grow-1 p-4"
          style={{
            marginLeft: isMobile ? "0" : isSidebarOpen ? "0" : "-280px",
            transition: "margin 0.3s ease",
          }}
        >
          {isMobile && isSidebarOpen && (
            <div
              className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
              style={{ zIndex: 999 }}
              onClick={toggleSidebar}
            ></div>
          )}

          <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0 text-primary">Dashboard Overview</h2>
              <div className="d-flex gap-2">
                <button className="btn btn-primary btn-sm">
                  <i className="bi bi-bell me-2"></i> Notifications
                </button>
                <button className="btn btn-primary btn-sm">
                  <i className="bi bi-sliders me-2"></i> Customize
                </button>
              </div>
            </div>

            {isLoading ? (
              <div className="row g-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="col-md-6 col-lg-3">
                    <div className="card">
                      <div className="card-body p-4">
                        <div className="placeholder-glow">
                          <div className="placeholder col-6 mb-2"></div>
                          <div className="placeholder col-8 mb-3"></div>
                          <div className="placeholder col-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="row g-4 mb-4">
                  {[
                    { title: "Total Orders", value: "12", subtext: "2 new orders this month", icon: "bi-box", color: "text-warning", bg: "bg-warning bg-opacity-10" },
                    { title: "Wishlist Items", value: "8", subtext: "3 items on sale now", icon: "bi-heart", color: "text-danger", bg: "bg-danger bg-opacity-10" },
                    { title: "Reviews", value: "5", subtext: "4.8 average rating", icon: "bi-star", color: "text-success", bg: "bg-success bg-opacity-10" },
                    { title: "Total Spent", value: "$1,248", subtext: "$320 this month", icon: "bi-wallet2", color: "text-primary", bg: "bg-primary bg-opacity-10" },
                  ].map((card) => (
                    <div key={card.title} className="col-md-6 col-lg-3">
                      <div className="card h-100">
                        <div className="card-body p-4">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                              <h6 className="text-muted mb-1">{card.title}</h6>
                              <h3 className="mb-0">{card.value}</h3>
                            </div>
                            <div className={`p-3 rounded ${card.bg}`}>
                              <i className={`bi ${card.icon} ${card.color} fs-4`}></i>
                            </div>
                          </div>
                          <p className="text-success mb-0">
                            <i className="bi bi-arrow-up me-1"></i>
                            <span>{card.subtext}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card mb-4">
                  <div className="card-header bg-white py-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Recent Orders</h5>
                      <Link to="/dashboard/orders" className="btn btn-primary btn-sm">
                        View All
                      </Link>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Items</th>
                            <th scope="col">Total</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { id: "#ORD-7895", date: "May 12, 2023", items: "3 items", total: "$458.00", status: "Delivered", statusColor: "bg-success" },
                            { id: "#ORD-7894", date: "Apr 26, 2023", items: "1 item", total: "$149.00", status: "Shipped", statusColor: "bg-warning text-dark" },
                            { id: "#ORD-7893", date: "Apr 15, 2023", items: "2 items", total: "$321.00", status: "Delivered", statusColor: "bg-success" },
                            { id: "#ORD-7892", date: "Mar 28, 2023", items: "4 items", total: "$699.00", status: "Delivered", statusColor: "bg-success" },
                          ].map((order) => (
                            <tr key={order.id}>
                              <td>{order.id}</td>
                              <td>{order.date}</td>
                              <td>{order.items}</td>
                              <td>{order.total}</td>
                              <td>
                                <span className={`badge ${order.statusColor}`}>{order.status}</span>
                              </td>
                              <td>
                                <button className="btn btn-primary btn-sm">Details</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="card h-100">
                      <div className="card-header bg-white py-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0">Wishlist</h5>
                          <Link to="/dashboard/wishlist" className="btn btn-primary btn-sm">
                            View All
                          </Link>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="col-6">
                              <div className="position-relative">
                                <div className="bg-light rounded mb-2 d-flex align-items-center justify-content-center"
                                  style={{ height: "150px" }}>
                                  <i className="bi bi-image text-muted fs-3"></i>
                                </div>
                                <button className="btn btn-light btn-sm position-absolute top-0 end-0 m-2 rounded-circle p-1">
                                  <i className="bi bi-heart-fill text-danger"></i>
                                </button>
                              </div>
                              <h6 className="mb-1">Modern Chair</h6>
                              <p className="text-warning mb-1">$149.00</p>
                              <button className="btn btn-primary btn-sm">
                                <i className="bi bi-cart-plus me-1"></i> Add to Cart
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card h-100">
                      <div className="card-header bg-white py-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0">Recent Reviews</h5>
                          <Link to="/dashboard/reviews" className="btn btn-primary btn-sm">
                            View All
                          </Link>
                        </div>
                      </div>
                      <div className="card-body">
                        {[
                          { product: "Vintage Chair", rating: 5, date: "May 10, 2023", review: "Excellent quality and very comfortable. Exactly what I was looking for!" },
                          { product: "Coffee Table", rating: 4, date: "Apr 28, 2023", review: "Beautiful design and sturdy construction. Assembly was straightforward." },
                          { product: "Floor Lamp", rating: 4.5, date: "Apr 15, 2023", review: "Great lighting and modern design. Perfect for my reading corner." },
                        ].map((review) => (
                          <div key={review.product} className="d-flex mb-3 pb-3 border-bottom">
                            <div className="bg-light rounded me-3 d-flex align-items-center justify-content-center"
                              style={{ width: "60px", height: "60px" }}>
                              <i className="bi bi-image text-muted fs-4"></i>
                            </div>
                            <div>
                              <h6 className="mb-1">{review.product}</h6>
                              <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                  {[...Array(5)].map((_, i) => (
                                    <i
                                      key={i}
                                      className={`bi ${i + 0.5 < review.rating ? "bi-star-fill" : i < review.rating ? "bi-star-half" : "bi-star"} text-warning`}
                                    ></i>
                                  ))}
                                </div>
                                <small className="text-muted">{review.date}</small>
                              </div>
                              <p className="mb-0 small">{review.review}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
