import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrito.css";
import { BsFillBagFill } from "react-icons/bs";




const Carrito = () => {
    return (
        <div>
            <button className="carritoButton">
                <BsFillBagFill className="carrito"/>
            </button>
        </div>
    )
}

export default Carrito
