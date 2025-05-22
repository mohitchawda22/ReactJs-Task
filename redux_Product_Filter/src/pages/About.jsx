import React from 'react'

function About() {
  return (
     <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="mb-4">About ShopApp</h1>
          <p className="lead">Your premier destination for fashion and lifestyle products.</p>
          <p>
            Founded in 2020, ShopApp has quickly grown to become one of the leading online retailers in the fashion
            industry. We pride ourselves on offering high-quality products at competitive prices, with a focus on
            customer satisfaction and sustainable practices.
          </p>
          <p>
            Our mission is to provide our customers with the latest fashion trends while ensuring ethical sourcing and
            production methods. We work directly with designers and manufacturers to bring you exclusive collections
            that you won't find anywhere else.
          </p>
          <p>
            At ShopApp, we believe that fashion should be accessible to everyone. That's why we offer a wide range of
            sizes, styles, and price points to suit every body type and budget.
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <img
            src="https://images.pexels.com/photos/12081258/pexels-photo-12081258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About ShopApp"
            width={600}
            height={500}
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-truck fs-1 mb-3 text-primary"></i>
              <h3 className="card-title h5">Fast Delivery</h3>
              <p className="card-text">We deliver your orders within 2-5 business days worldwide.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-shield-check fs-1 mb-3 text-primary"></i>
              <h3 className="card-title h5">Quality Guarantee</h3>
              <p className="card-text">All our products undergo rigorous quality checks.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-arrow-repeat fs-1 mb-3 text-primary"></i>
              <h3 className="card-title h5">Easy Returns</h3>
              <p className="card-text">Not satisfied? Return within 30 days for a full refund.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
