import React from 'react'
import "../assets/style/Cards.scss"


function Cards({ abbreviation, score, overs, win, img }) {
    return (
        <div className='row align-content-center Card gap-3'>
            <div className='d-flex col-lg-4 gap-3'>
                <img src={img} alt="" />
            <div className='d-flex my-auto gap-2 col-lg-2'>
                <h2>{abbreviation}</h2>
                <h2 className=''>{win}</h2>
            </div>
            <div className='d-flex my-auto col-lg-6 gap-5'>
                <h3 className=''>{score} <span>({overs} ov)</span></h3>
            </div>
            </div>
        </div>
    )
}

export default Cards
