import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import "./components/style.css";
import "./components/style2.css";
import CardContainer from "./components/CardContainer.js";
import { Outlet } from "react-router-dom";
import Offer from "./components/offer.js";
import Cart from "./components/cart.js";
import Contact from "./components/Contact.js";
function Main() {
    return (
        <> 
            <Navbar />
            <Outlet/>
        </>
    );
}

const mainRouting= createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children: [
            {
                path:'/',
                element:<CardContainer/>
            },
            {
                path:'/offers',
                element:<Offer/>
            },
            {
                path:'/contacts',
                element:<Contact/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={mainRouting}/>)