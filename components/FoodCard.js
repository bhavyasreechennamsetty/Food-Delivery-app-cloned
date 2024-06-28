import React from "react";
import './style2.css'; 

const Card = (props) => {
    return (
        <div className="card">
            <div className="image">
                <img src={props.src} alt="Offer" className="pic" />
                <p className="offer">{props.offer}% OFF UPTO ₹{props.offerval}</p>
            </div>
            <div className="details">
                <p className="name">{props.name}</p>
                <p className="rating">&#11088;{props.rating}</p>
                <p className="cat">{props.cat}</p>
                <p className="loc">{props.loc}</p>
            </div>
        </div>
    );
}

export default Card;