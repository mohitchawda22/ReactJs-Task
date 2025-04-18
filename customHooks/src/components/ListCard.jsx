import React from 'react'
import "../assets/style/ListCard.scss"


function ListCard({ title, body }) {

    return (
        <div className='d-flex justify-content-between align-items-center'>
        <div className="card text-bg-primary mb-3">
            <div className="card-header text-capitalize">{title}</div>
            <div className="card-body">
                <p className="card-text">{body}</p>
            </div>
        </div>
        </div>
    )
}

export default ListCard
