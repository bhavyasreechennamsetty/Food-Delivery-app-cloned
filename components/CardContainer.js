import React,{useState} from "react";
import data from "../utils/data";
import Card from "./Restcard.js";
import "./style2.css";
const initialData=data;
const SwiggyCard = () => {
    const [restdata,setrestData]=useState(data);
    return (
        <div>
         <button id="Clear-btn" className="button" onClick={()=>{
            setrestData(initialData);
         }} >Clear</button>
        <button id="Filter-btn" className="button" onClick={()=>{
            setrestData(restdata.filter(obj=> obj.info.avgRating>4));
        }}>Filter</button>
        
        <div id="cardcontainer">
            {restdata.map((obj) => {
                return <Card key={obj.info.id}  {...obj.info} />;
            })}
        </div>
        </div>
    );
};

export default SwiggyCard;
