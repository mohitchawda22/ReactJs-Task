import React from 'react'
import hero2 from "../../assets/images/hero2.png"
import pic from "../../assets/images/pic.jpeg"
import user1 from "../../assets/images/user1.webp"
import user2 from "../../assets/images/user2.jpeg"
import user3 from "../../assets/images/user3.jpeg"
import user4 from "../../assets/images/user4.webp"

function About() {
  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#FFE4E1" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold text-warning">About KF+ Furniture</h1>
              <p className="text-muted my-4">
                We are passionate about creating beautiful, functional furniture that transforms your living spaces into
                comfortable, stylish environments.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={hero2}
                width={500}
                height={400}
                alt="Our showroom"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={pic}
                width={500}
                height={400}
                alt="Company history"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">Our Story</h2>
              <p className="mb-3">
                Founded in 2010, KF+ Furniture began as a small workshop with a big dream: to create furniture that
                combines beauty, functionality, and sustainability.
              </p>
              <p className="mb-3">
                Our founder, Jane Smith, started crafting custom pieces for friends and family, quickly gaining
                recognition for her exceptional attention to detail and innovative designs.
              </p>
              <p>
                Today, we've grown into a team of passionate designers and craftspeople, but our core values remain the
                same: quality materials, expert craftsmanship, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#FFF5EE" }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Our Values</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-star text-warning" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h4>Quality</h4>
                <p className="text-muted">
                  We use only the finest materials and employ skilled craftspeople to ensure every piece meets our high
                  standards.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-tree text-warning" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h4>Sustainability</h4>
                <p className="text-muted">
                  We're committed to environmentally responsible practices, from sourcing materials to manufacturing
                  processes.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-heart text-warning" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h4>Customer Focus</h4>
                <p className="text-muted">
                  Your satisfaction is our priority. We work closely with clients to create spaces they'll love for
                  years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-3 col-6 mb-4">
              <div className="text-center">
                <img
                  src={user1}
                  width={100}
                  height={100}
                  alt="Team member"
                  className="img-fluid rounded-circle mb-3"
                  style={{ objectFit: "cover" }}
                />
                <h5>Jane Smith</h5>
                <p className="text-muted">Founder & CEO</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="text-center">
                <img
                  src={user2}
                  width={100}
                  height={100}
                  alt="Team member"
                  className="img-fluid rounded-circle mb-3"
                  style={{ objectFit: "cover" }}
                />
                <h5>John Davis</h5>
                <p className="text-muted">Lead Designer</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="text-center">
                <img
                  src={user3}
                  width={100}
                  height={100}
                  alt="Team member"
                  className="img-fluid rounded-circle mb-3"
                  style={{ objectFit: "cover" }}
                />
                <h5>Sarah Johnson</h5>
                <p className="text-muted">Interior Specialist</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="text-center">
                <img
                  src={user4}
                  width={100}
                  height={100}
                  alt="Team member"
                  className="img-fluid rounded-circle mb-3"
                  style={{ objectFit: "cover" }}
                />
                <h5>Michael Chen</h5>
                <p className="text-muted">Production Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#FFF5EE" }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="mb-3">
                  <i className="bi bi-quote text-warning" style={{ fontSize: "2rem" }}></i>
                </div>
                <p className="mb-4">
                  "The quality of my new sofa is exceptional. The team at KF+ Furniture was helpful throughout the
                  entire process, from selection to delivery."
                </p>
                <div className="d-flex align-items-center mt-auto">
                  <img
                    src={user1}
                    width={50}
                    height={50}
                    alt="Customer"
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">Emily R.</h6>
                    <small className="text-muted">New York, NY</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="mb-3">
                  <i className="bi bi-quote text-warning" style={{ fontSize: "2rem" }}></i>
                </div>
                <p className="mb-4">
                  "I've furnished my entire home with pieces from KF+ Furniture. Their designs are timeless, and the
                  craftsmanship is unmatched."
                </p>
                <div className="d-flex align-items-center mt-auto">
                  <img
                    src={user1}
                    width={50}
                    height={50}
                    alt="Customer"
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">David M.</h6>
                    <small className="text-muted">Chicago, IL</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="mb-3">
                  <i className="bi bi-quote text-warning" style={{ fontSize: "2rem" }}></i>
                </div>
                <p className="mb-4">
                  "The custom dining table they created for us is not just furniture—it's a work of art. We couldn't be
                  happier with our purchase."
                </p>
                <div className="d-flex align-items-center mt-auto">
                  <img
                    src={user1}
                    width={50}
                    height={50}
                    alt="Customer"
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">Lisa K.</h6>
                    <small className="text-muted">Austin, TX</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
