import React from 'react';
import PropTypes from "prop-types";
import "../assets/styles/ProductCards.scss"

function Cards({Image, Title, Price, Stocks, buyText }) {
  return (
    <>
      <div className="card col-lg-3 ">
        <img src={Image} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">{Price}</p>
            <p className='card-text'>{Stocks}</p>
            <a href="#" className="btn btn-primary">{buyText}</a>
          </div>
      </div>
    </>
  );
}

Cards.proptypes={
  Image:PropTypes.string,
  Title:PropTypes.string,
  Price:PropTypes.string,
  Stocks:PropTypes.number,
  buyText:PropTypes.string
}


export default Cards;