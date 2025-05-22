import React, { useEffect, useState } from 'react'
import { slides } from '../../data/slides'
import { Link } from 'react-router-dom'

function HeroSlider() {
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const gotToPrevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const goToNextSlide = () => {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }
    return (
        <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item ${index === activeSlide ? "active" : ""}`}
                        style={{ height: "600px" }}
                    >
                        <div className="position-relative w-100 h-100">
                            <img
                                src={slide.image || "/placeholder.svg"}
                                alt={slide.title}
                                fill
                                priority={index === 0}
                                style={{ objectFit: "cover" }}
                            />
                            <div className="carousel-caption text-center d-flex flex-column align-items-center justify-content-center h-100">
                                <div className="p-3" style={{ maxWidth: "700px" }}>
                                    <h5 className="text-white text-uppercase mb-3 d-none d-sm-block">{slide.subtitle}</h5>
                                    <h1 className="display-4 text-white mb-3 text-uppercase">{slide.title}</h1>
                                    <p className="lead text-white mb-4 d-none d-sm-block">{slide.description}</p>
                                    <Link href={slide.buttonLink} className="btn btn-outline-light py-2 px-4">
                                        {slide.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" onClick={gotToPrevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" onClick={goToNextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HeroSlider
