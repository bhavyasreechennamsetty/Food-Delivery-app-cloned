import React, { useEffect, useState} from "react";
import { URL } from "../utils/data.js";
import Shimmer from "./Shimmer"; 
import RestaurantCard from "./RestaurantCard";
import "./style2.css";

const CardContainer = () => {
    let [restdata, setRestData] = useState([]);
    let [searchtext, setsearchtext] = useState("");
    let [initialrestdata, setinitialrestdata] = useState([]);
    async function fetchRestaurants() {
        let response = await fetch(URL);
        let jsonData = await response.json();
        setinitialrestdata(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setRestData(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    useEffect(() => {
        fetchRestaurants();
    }, []);

    if (restdata.length === 0) {
        return <Shimmer />;
    }
    
    return (
      <div>
        <button
          id="Clear-btn"
          className="button"
          onClick={() => {
            setinitialrestdata(restdata);
          }}
        >
          Clear
        </button>
        <input type="text" value={searchtext} onInput={(e)=>{
          setsearchtext(e.target.value);
        }}></input>
        <button id="search" onClick={()=>{
          let filterdata=restdata.filter((obj)=> obj.info.name.toLowerCase().includes(searchtext.toLowerCase()))
          console.log(filterdata)
          setinitialrestdata(filterdata)
        }}>search</button>
        <button
          id="Filter-btn"
          className="button"
          onClick={() => {
            setinitialrestdata(restdata.filter((obj) => obj.info.avgRating > 4));
          }}
        >
          Filter
        </button>
        <div id="cardcontainer">
          {initialrestdata.map((obj) => (
            <RestaurantCard key={obj.info.id} {...obj.info} />
          ))}
        </div>
      </div>
    );
};

export default CardContainer;
