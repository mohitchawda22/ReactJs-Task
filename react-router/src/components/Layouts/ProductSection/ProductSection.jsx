import React from 'react'
import chair from "../../../assets/images/chair.png"
import wodden from "../../../assets/images/wodden.png"
import lamp from "../../../assets/images/lamp.png"
import bed from "../../../assets/images/bed.png"

function ProductSection() {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    <h4 className="mb-4">Products</h4>
                    <div className="d-flex mb-4">
                        <button className="btn btn-sm btn-outline-secondary me-2">All</button>
                        <button className="btn btn-sm btn-outline-secondary me-2">Chair</button>
                        <button className="btn btn-sm btn-outline-secondary me-2">Table</button>
                        <button className="btn btn-sm btn-outline-secondary me-2">Lamp</button>
                        <button className="btn btn-sm btn-outline-secondary">Bed</button>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card border-0 h-100" style={{ backgroundColor: "#FFF0F5" }}>
                                <div className="p-3">
                                    <img
                                        src={chair}
                                        width={200}
                                        height={200}
                                        alt="Honey Sofa"
                                        className="card-img-top"
                                    />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">Honey Sofa</h6>
                                    <p className="card-text text-muted">$299</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card border-0 h-100" style={{ backgroundColor: "#FFF0F5" }}>
                                <div className="p-3">
                                    <img
                                        src={lamp}
                                        width={200}
                                        height={200}
                                        alt="Floor Lamp"
                                        className="card-img-top"
                                    />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">Floor Lamp</h6>
                                    <p className="card-text text-muted">$89</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card border-0 h-100" style={{ backgroundColor: "#FFF0F5" }}>
                                <div className="p-3">
                                    <img
                                        src={wodden}
                                        width={200}
                                        height={200}
                                        alt="Vintage Chair"
                                        className="card-img-top"
                                    />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">Vintage Chair</h6>
                                    <p className="card-text text-muted">$149</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="card border-0 h-100" style={{ backgroundColor: "#FFF0F5" }}>
                                <div className="p-3">
                                    <img
                                        src={bed}
                                        width={200}
                                        height={200}
                                        alt="Garden King Bed"
                                        className="card-img-top"
                                    />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">Garden King Bed</h6>
                                    <p className="card-text text-muted">$499</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductSection
