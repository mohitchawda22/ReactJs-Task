import React, { useEffect, useState } from 'react'
import broken from "../assets/Images/broken.jpg"
import { Link } from 'react-router-dom'

function Error() {
     const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isAnimating, setIsAnimating] = useState(false)

    // Handle mouse movement for the floating elements
    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20
        const y = (e.clientY / window.innerHeight - 0.5) * 20
        setPosition({ x, y })
    }

    // Trigger animation periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 1000)
        }, 5000)

        return () => clearInterval(interval)
    }, [])
  return (
    <div
            className="min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden"
            style={{ backgroundColor: "#FFE4E1" }}
            onMouseMove={handleMouseMove}
        >
            <div
                className="position-absolute"
                style={{
                    top: "10%",
                    left: "10%",
                    transform: `translate(${position.x * 1.5}px, ${position.y * 1.5}px)`,
                    transition: "transform 0.3s ease-out",
                }}
            >
                <div className="rounded-circle bg-warning opacity-25" style={{ width: "150px", height: "150px" }}></div>
            </div>

            <div
                className="position-absolute"
                style={{
                    bottom: "15%",
                    right: "15%",
                    transform: `translate(${position.x * -1}px, ${position.y * -1}px)`,
                    transition: "transform 0.3s ease-out",
                }}
            >
                <div className="rounded-circle bg-danger opacity-25" style={{ width: "100px", height: "100px" }}></div>
            </div>

            <div
                className="position-absolute"
                style={{
                    top: "40%",
                    right: "20%",
                    transform: `translate(${position.x * 0.5}px, ${position.y * 0.5}px)`,
                    transition: "transform 0.3s ease-out",
                }}
            >
                <div className="rounded-circle bg-primary opacity-25" style={{ width: "80px", height: "80px" }}></div>
            </div>

            <div className="container text-center">
                <div className="mb-4 position-relative">
                    <div
                        className={`position-relative ${isAnimating ? "animate__animated animate__shakeX" : ""}`}
                        style={{ display: "inline-block" }}
                    >
                        <h1 className="display-1 fw-bold text-warning" style={{ fontSize: "10rem" }}>
                            404
                        </h1>
                        <div
                            className="position-absolute"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: `translate(-50%, -50%) translate(${position.x * 0.2}px, ${position.y * 0.2}px)`,
                                transition: "transform 0.3s ease-out",
                                zIndex: -1,
                            }}
                        >
                            <div className="rounded-circle bg-warning opacity-25" style={{ width: "250px", height: "250px" }}></div>
                        </div>
                    </div>
                </div>

                <h2 className="mb-4 fw-bold">Oops! Page Not Found</h2>

                <div className="mb-5">
                    <p className="lead mb-4">
                        We can't seem to find the page you're looking for. <br />
                        It might have been moved or doesn't exist.
                    </p>

                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/" className="btn btn-warning text-white px-4 py-2">
                            <i className="bi bi-house-door me-2"></i> Back to Home
                        </Link>
                        <Link to="/contact" className="btn btn-outline-secondary px-4 py-2">
                            <i className="bi bi-envelope me-2"></i> Contact Support
                        </Link>
                    </div>
                </div>

                <div className="position-relative" style={{ height: "200px" }}>
                    <div
                        className={`position-absolute start-50 translate-middle-x ${isAnimating ? "animate__animated animate__bounce" : ""}`}
                        style={{
                            transform: `translateY(${position.y * 0.3}px)`,
                            transition: "transform 0.3s ease-out",
                        }}
                    >
                        <img
                            src={broken}
                            width={300}
                            height={200}
                            alt="Broken furniture illustration"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5 text-center">
                <Link href="/" className="navbar-brand d-flex align-items-center justify-content-center">
                    <span className="fw-bold text-danger">APJ</span>
                    <span className="ms-2">Furniture</span>
                </Link>
            </div>
        </div>
  )
}

export default Error
