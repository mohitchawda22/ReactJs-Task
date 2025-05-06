import React from 'react'
import { Links } from 'react-router-dom'
import room1 from "../../../assets/images/room1.png"
import room2 from "../../../assets/images/room2.png"
import room3 from "../../../assets/images/room3.png"
function Showcase() {
  return (
    <>
        <section className="py-5" style={{ backgroundColor: "#FFF5EE" }}>
        <div className="container">
          <h4 className="mb-4">Some of the interiors that we provide for you</h4>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={room1}
                  width={400}
                  height={200}
                  alt="Living Room"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Living Room</h5>
                  <p className="card-text text-muted">
                    A comfortable living room design to make your family gathering more enjoyable
                  </p>
                  <a href="#" className="text-decoration-none text-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={room2}
                  width={400}
                  height={200}
                  alt="Bedroom"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Bedroom</h5>
                  <p className="card-text text-muted">
                    A cozy and relaxing bedroom design to make your rest more comfortable
                  </p>
                  <a href="#" className="text-decoration-none text-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={room3}
                  width={400}
                  height={200}
                  alt="Kitchen"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Kitchen</h5>
                  <p className="card-text text-muted">
                    A functional kitchen design to make your cooking experience more enjoyable
                  </p>
                  <a href="#" className="text-decoration-none text-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase
