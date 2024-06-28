import React from "react";
import data from "../utils/data";
import Card from "./Restcard.js";
import "./style2.css";

const SwiggyCard = () => {
    return (
        <div id="cardcontainer">
            {data.map((obj) => {
                return <Card  {...obj.info} />;
            })}
        </div>
    );
};

export default SwiggyCard;
