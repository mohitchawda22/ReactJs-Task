import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-dark text-white pt-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">ShopApp</h4>
                        <p>
                            Your one-stop destination for fashion and lifestyle products. We offer high-quality items at competitive
                            prices.
                        </p>
                        <div className="d-flex">
                            <a className="btn btn-outline-light btn-square me-2" to="#">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a className="btn btn-outline-light btn-square me-2" to="#">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a className="btn btn-outline-light btn-square me-2" to="#">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a className="btn btn-outline-light btn-square" to="#">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <div className="d-flex flex-column">
                            <Link to="/about" className="text-white mb-2">
                                <i className="bi bi-chevron-right me-2"></i>About Us
                            </Link>
                            <Link to="/contact" className="text-white mb-2">
                                <i className="bi bi-chevron-right me-2"></i>Contact Us
                            </Link>
                            <Link to="/products" className="text-white mb-2">
                                <i className="bi bi-chevron-right me-2"></i>Our Services
                            </Link>
                            <Link to="/terms" className="text-white mb-2">
                                <i className="bi bi-chevron-right me-2"></i>Terms & Condition
                            </Link>
                            <Link to="/support" className="text-white">
                                <i className="bi bi-chevron-right me-2"></i>Support
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Business Hours</h4>
                        <p className="mb-1">Monday - Friday</p>
                        <h6 className="text-light">09:00 am - 07:00 pm</h6>
                        <p className="mb-1">Saturday</p>
                        <h6 className="text-light">09:00 am - 12:00 pm</h6>
                        <p className="mb-1">Sunday</p>
                        <h6 className="text-light">Closed</h6>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-4">Newsletter</h4>
                        <p>Subscribe to our newsletter for the latest updates and offers.</p>
                        <div className="position-relative w-100">
                            <input
                                className="form-control bg-light border-light w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Your email"
                            />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-black py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; {new Date().getFullYear()}{" "}
                            <Link to="/" className="text-white">
                                ShopApp
                            </Link>
                            . All Rights Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="d-inline-flex align-items-center">
                                <Link to="/terms" className="text-white me-3">
                                    Privacy
                                </Link>
                                <span className="text-white me-3">|</span>
                                <Link to="/terms" className="text-white me-3">
                                    Terms
                                </Link>
                                <span className="text-white me-3">|</span>
                                <Link to="/faq" className="text-white">
                                    FAQs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
