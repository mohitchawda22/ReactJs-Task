import React from 'react'
import { categories } from '../../data/categoriesShowcase'
import { Link } from 'react-router-dom'

function CategoryShowcase() {
    return (
        <div className=" m-3">
            <div className="row">
                {categories.map((category) => (
                    <div key={category.id} className="col-md-4">
                        <div
                            className="position-relative rounded overflow-hidden shadow"
                            style={{ height: "400px" }}
                        >
                            <img
                                src={category.image || "/placeholder.svg"}
                                alt={category.title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block"
                                }}
                            />
                            <div
                                className="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-center align-items-start p-4 text-white"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                            >
                                <span className="mb-2 text-uppercase fw-semibold">{category.label}</span>
                                <h3 className="h3 fw-bold mb-3">{category.title}</h3>
                                <Link to={category.link} className="btn btn-outline-light px-4">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryShowcase
