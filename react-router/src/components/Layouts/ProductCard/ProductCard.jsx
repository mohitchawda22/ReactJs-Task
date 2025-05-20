import { Link} from "react-router-dom"

function ProductCard({ Image, category, Price, Title, Rating, Count,id }) {

    const Star = () => {
        const stars = []
        const fullRating = Math.floor(Rating)
        const halfRating = Rating - fullRating >= 0.5

        for (let i = 0; i < 5; i++) {
            if (i < fullRating) {
                stars.push(<i className="bi bi-star-fill text-warning me-1"></i>)
            } else if (i == fullRating && halfRating) {
                stars.push(<i className="bi bi-star-half text-warning me-1"></i>)
            } else {
                stars.push(<i className="bi bi-star text-warning me-1"></i>)
            }
        }
        return stars
    }

    return (
        <div className="col-md-4 mb-4">
            <Link className="text-decoration-none" to={`/product/${id}`}>
                <div className="card border-0 h-100">
                    <div className="position-relative">
                        <img
                            src={Image}
                            width={300}
                            height={300}
                            alt="Honey Sofa"
                            className="card-img-top"
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{Title}</h5>
                        <p className="text-muted mb-2">{category}</p>
                        <div className="d-flex align-items-center mb-2">
                            {Star()}
                            <span className="text-muted small ms-1">{Rating}</span>
                            <span className="text-black small ms-1">({Count})</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold">${Price}</span>
                            <button className="btn btn-sm btn-outline-warning">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
