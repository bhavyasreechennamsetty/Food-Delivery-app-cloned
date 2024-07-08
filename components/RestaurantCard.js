import React from "react";
import { BASE_URL } from "../utils/data";

const RestaurantCard = ({
    name,
    cloudinaryImageId,
    areaName,
    cuisines,
    avgRating
  }) => {
    return (
      <div className="card">
        <div className="image">
          <img src={BASE_URL + cloudinaryImageId} className="pic" alt={name} />
        </div>
        <div className="details">
          <p className="name">{name}</p>
          <p className="rating">&#11088;{avgRating}</p>
          <p className="cat">{cuisines.join(", ")}</p>
          <p className="loc">{areaName}</p>
        </div>
      </div>
    );
  };
  
  export default RestaurantCard;