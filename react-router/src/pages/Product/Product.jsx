import React from 'react'
import hero4 from "../../assets/images/hero4.webp"
import sofa from "../../assets/images/sofa.webp"
import bed from "../../assets/images/bed.png"
import wodden from "../../assets/images/wodden.png"
import bookshelf from "../../assets/images/bookshelf.jpeg"
import lamp from "../../assets/images/lamp.png"
import table from "../../assets/images/table.webp"

function Product() {
  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#FFE4E1" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold text-warning">Our Products</h1>
              <p className="text-muted my-4">
                Discover our collection of beautifully crafted furniture designed to transform your living spaces. From
                sofas to dining tables, each piece is made with quality materials and expert craftsmanship.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={hero4}
                width={500}
                height={400}
                alt="Product showcase"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm p-4">
                <h4 className="mb-4">Filters</h4>

                {/* Categories */}
                <div className="mb-4">
                  <h5 className="mb-3">Categories</h5>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="sofas" />
                    <label className="form-check-label" htmlFor="sofas">
                      Sofas & Couches
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="chairs" />
                    <label className="form-check-label" htmlFor="chairs">
                      Chairs
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="tables" />
                    <label className="form-check-label" htmlFor="tables">
                      Tables
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="beds" />
                    <label className="form-check-label" htmlFor="beds">
                      Beds
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="storage" />
                    <label className="form-check-label" htmlFor="storage">
                      Storage
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="lighting" />
                    <label className="form-check-label" htmlFor="lighting">
                      Lighting
                    </label>
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-4">
                  <h5 className="mb-3">Price Range</h5>
                  <div className="d-flex align-items-center">
                    <input type="range" className="form-range" min="0" max="2000" id="priceRange" />
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>$0</span>
                    <span>$2000+</span>
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-4">
                  <h5 className="mb-3">Colors</h5>
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      className="btn p-2 rounded-circle"
                      style={{ backgroundColor: "#000", width: "30px", height: "30px" }}
                    ></button>
                    <button
                      className="btn p-2 rounded-circle"
                      style={{ backgroundColor: "#fff", border: "1px solid #ddd", width: "30px", height: "30px" }}
                    ></button>
                    <button
                      className="btn p-2 rounded-circle"
                      style={{ backgroundColor: "#964B00", width: "30px", height: "30px" }}
                    ></button>
                    <button
                      className="btn p-2 rounded-circle"
                      style={{ backgroundColor: "#808080", width: "30px", height: "30px" }}
                    ></button>
                    <button
                      className="btn p-2 rounded-circle"
                      style={{ backgroundColor: "#FFD700", width: "30px", height: "30px" }}
                    ></button>
                  </div>
                </div>

                {/* Materials */}
                <div className="mb-4">
                  <h5 className="mb-3">Materials</h5>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="wood" />
                    <label className="form-check-label" htmlFor="wood">
                      Wood
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="metal" />
                    <label className="form-check-label" htmlFor="metal">
                      Metal
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="fabric" />
                    <label className="form-check-label" htmlFor="fabric">
                      Fabric
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="leather" />
                    <label className="form-check-label" htmlFor="leather">
                      Leather
                    </label>
                  </div>
                </div>

                <button className="btn btn-warning text-white w-100">Apply Filters</button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="col-lg-9">
              {/* Sort and View Options */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <span className="me-2">Sort by:</span>
                  <select className="form-select form-select-sm d-inline-block w-auto">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Selling</option>
                  </select>
                </div>
                <div>
                  <span className="me-2">View:</span>
                  <button className="btn btn-sm btn-outline-secondary me-1">
                    <i className="bi bi-grid-3x3-gap-fill"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    <i className="bi bi-list"></i>
                  </button>
                </div>
              </div>

              {/* Products */}
              <div className="row">
                {/* Product 1 */}
                <div className="col-md-4 mb-4">
                  <div className="card border-0 h-100">
                    <div className="position-relative">
                      <img
                        src={sofa}
                        width={300}
                        height={300}
                        alt="Honey Sofa"
                        className="card-img-top"
                      />
                      <div className="position-absolute top-0 end-0 p-2">
                        <button className="btn btn-light rounded-circle p-2">
                          <i className="bi bi-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Honey Sofa</h5>
                      <p className="text-muted mb-2">Sofas & Couches</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star text-warning me-1"></i>
                        <span className="text-muted small">(24)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">$299.00</span>
                        <button className="btn btn-sm btn-outline-warning">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="col-md-4 mb-4">
                  <div className="card border-0 h-100">
                    <div className="position-relative">
                      <img
                        src={wodden}
                        width={300}
                        height={300}
                        alt="Vintage Chair"
                        className="card-img-top"
                      />
                      <div className="position-absolute top-0 end-0 p-2">
                        <button className="btn btn-light rounded-circle p-2">
                          <i className="bi bi-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Vintage Chair</h5>
                      <p className="text-muted mb-2">Chairs</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-half text-warning me-1"></i>
                        <span className="text-muted small">(42)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">$149.00</span>
                        <button className="btn btn-sm btn-outline-warning">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="col-md-4 mb-4">
                  <div className="card border-0 h-100">
                    <div className="position-relative">
                      <img
                        src={lamp}
                        width={300}
                        height={300}
                        alt="Floor Lamp"
                        className="card-img-top"
                      />
                      <div className="position-absolute top-0 end-0 p-2">
                        <button className="btn btn-light rounded-circle p-2">
                          <i className="bi bi-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Floor Lamp</h5>
                      <p className="text-muted mb-2">Lighting</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star text-warning me-1"></i>
                        <span className="text-muted small">(18)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">$89.00</span>
                        <button className="btn btn-sm btn-outline-warning">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 4 */}
                <div className="col-md-4 mb-4">
                  <div className="card border-0 h-100">
                    <div className="position-relative">
                      <img
                        src={bed}
                        width={300}
                        height={300}
                        alt="Garden King Bed"
                        className="card-img-top"
                      />
                      <div className="position-absolute top-0 end-0 p-2">
                        <button className="btn btn-light rounded-circle p-2">
                          <i className="bi bi-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Garden King Bed</h5>
                      <p className="text-muted mb-2">Beds</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <span className="text-muted small">(36)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">$499.00</span>
                        <button className="btn btn-sm btn-outline-warning">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 5 */}
                <div className="col-md-4 mb-4">
                  <div className="card border-0 h-100">
                    <div className="position-relative">
                      <img
                        src={table}
                        width={300}
                        height={300}
                        alt="Coffee Table"
                        className="card-img-top"
                      />
                      <div className="position-absolute top-0 end-0 p-2">
                        <button className="btn btn-light rounded-circle p-2">
                          <i className="bi bi-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Coffee Table</h5>
                      <p className="text-muted mb-2">Tables</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-half text-warning me-1"></i>
                        <span className="text-muted small">(29)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">$199.00</span>
                        <button className="btn btn-sm btn-outline-warning">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 6 */}
                <div className="col-md-4 mb-4">
                  <div className="card border-0 h-100">
                    <div className="position-relative">
                      <img
                        src={bookshelf}
                        width={300}
                        height={300}
                        alt="Bookshelf"
                        className="card-img-top"
                      />
                      <div className="position-absolute top-0 end-0 p-2">
                        <button className="btn btn-light rounded-circle p-2">
                          <i className="bi bi-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Bookshelf</h5>
                      <p className="text-muted mb-2">Storage</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star-fill text-warning me-1"></i>
                        <i className="bi bi-star text-warning me-1"></i>
                        <span className="text-muted small">(15)</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">$249.00</span>
                        <button className="btn btn-sm btn-outline-warning">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nav className="mt-4">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
