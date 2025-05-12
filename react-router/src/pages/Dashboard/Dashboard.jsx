import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        const timer=setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        
        return(()=>{
            clearTimeout(timer)
        })
    },[])
    
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Dashboard Overview</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-outline-secondary">
            <i className="bi bi-bell me-2"></i>
            Notifications
          </button>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="bi bi-sliders me-2"></i>
            Customize
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="row g-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm">
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
          {/* Stats Cards */}
          <div className="row g-4 mb-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h6 className="text-muted mb-1">Total Orders</h6>
                      <h3 className="mb-0">12</h3>
                    </div>
                    <div className="bg-warning bg-opacity-10 p-3 rounded">
                      <i className="bi bi-box text-warning fs-4"></i>
                    </div>
                  </div>
                  <p className="text-success mb-0">
                    <i className="bi bi-arrow-up me-1"></i>
                    <span>2 new orders this month</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h6 className="text-muted mb-1">Wishlist Items</h6>
                      <h3 className="mb-0">8</h3>
                    </div>
                    <div className="bg-danger bg-opacity-10 p-3 rounded">
                      <i className="bi bi-heart text-danger fs-4"></i>
                    </div>
                  </div>
                  <p className="text-muted mb-0">
                    <i className="bi bi-arrow-right me-1"></i>
                    <span>3 items on sale now</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h6 className="text-muted mb-1">Reviews</h6>
                      <h3 className="mb-0">5</h3>
                    </div>
                    <div className="bg-success bg-opacity-10 p-3 rounded">
                      <i className="bi bi-star text-success fs-4"></i>
                    </div>
                  </div>
                  <p className="text-success mb-0">
                    <i className="bi bi-arrow-up me-1"></i>
                    <span>4.8 average rating</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h6 className="text-muted mb-1">Total Spent</h6>
                      <h3 className="mb-0">$1,248</h3>
                    </div>
                    <div className="bg-primary bg-opacity-10 p-3 rounded">
                      <i className="bi bi-wallet2 text-primary fs-4"></i>
                    </div>
                  </div>
                  <p className="text-success mb-0">
                    <i className="bi bi-arrow-up me-1"></i>
                    <span>$320 this month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Recent Orders</h5>
                <Link href="/dashboard/orders" className="btn btn-sm btn-outline-secondary">
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
                    <tr>
                      <td>#ORD-7895</td>
                      <td>May 12, 2023</td>
                      <td>3 items</td>
                      <td>$458.00</td>
                      <td>
                        <span className="badge bg-success">Delivered</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>#ORD-7894</td>
                      <td>Apr 26, 2023</td>
                      <td>1 item</td>
                      <td>$149.00</td>
                      <td>
                        <span className="badge bg-warning text-dark">Shipped</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>#ORD-7893</td>
                      <td>Apr 15, 2023</td>
                      <td>2 items</td>
                      <td>$321.00</td>
                      <td>
                        <span className="badge bg-success">Delivered</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td>#ORD-7892</td>
                      <td>Mar 28, 2023</td>
                      <td>4 items</td>
                      <td>$699.00</td>
                      <td>
                        <span className="badge bg-success">Delivered</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">Details</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Two Column Section */}
          <div className="row g-4">
            {/* Wishlist Preview */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-white py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Wishlist</h5>
                    <Link href="/dashboard/wishlist" className="btn btn-sm btn-outline-secondary">
                      View All
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="col-6">
                        <div className="position-relative">
                          <img
                            src="/placeholder.svg?height=150&width=150"
                            width={150}
                            height={150}
                            alt="Product"
                            className="img-fluid rounded mb-2"
                          />
                          <button className="btn btn-sm btn-light position-absolute top-0 end-0 m-2 rounded-circle p-1">
                            <i className="bi bi-heart-fill text-danger"></i>
                          </button>
                        </div>
                        <h6 className="mb-1">Modern Chair</h6>
                        <p className="text-warning mb-1">$149.00</p>
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="bi bi-cart-plus me-1"></i> Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-white py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Recent Reviews</h5>
                    <Link href="/dashboard/reviews" className="btn btn-sm btn-outline-secondary">
                      View All
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex mb-3 pb-3 border-bottom">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Product"
                      className="rounded me-3"
                    />
                    <div>
                      <h6 className="mb-1">Vintage Chair</h6>
                      <div className="d-flex align-items-center mb-2">
                        <div className="me-2">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                        </div>
                        <small className="text-muted">May 10, 2023</small>
                      </div>
                      <p className="mb-0 small">
                        Excellent quality and very comfortable. Exactly what I was looking for!
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 pb-3 border-bottom">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Product"
                      className="rounded me-3"
                    />
                    <div>
                      <h6 className="mb-1">Coffee Table</h6>
                      <div className="d-flex align-items-center mb-2">
                        <div className="me-2">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star text-warning"></i>
                        </div>
                        <small className="text-muted">Apr 28, 2023</small>
                      </div>
                      <p className="mb-0 small">
                        Beautiful design and sturdy construction. Assembly was straightforward.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Product"
                      className="rounded me-3"
                    />
                    <div>
                      <h6 className="mb-1">Floor Lamp</h6>
                      <div className="d-flex align-items-center mb-2">
                        <div className="me-2">
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-half text-warning"></i>
                        </div>
                        <small className="text-muted">Apr 15, 2023</small>
                      </div>
                      <p className="mb-0 small">Great lighting and modern design. Perfect for my reading corner.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
