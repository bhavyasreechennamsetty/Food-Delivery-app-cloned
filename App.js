import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.js";
import "./components/style.css";
import SwiggyCard from "./components/CardContainer.js";
import "./components/style2.css";
function Main() {
    return (
        <> 
            <Navbar />
            <SwiggyCard/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);