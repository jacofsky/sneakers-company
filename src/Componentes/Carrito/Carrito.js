import React, {useContext, useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrito.css";
import { BsFillBagFill } from "react-icons/bs";
import { Badge } from 'react-bootstrap';
import { CartContext } from '../../CartContext';



const Carrito = () => {

    const [productos] = useContext(CartContext)

    return (
        <div>
            <button className="carritoButton">
                <BsFillBagFill className="carrito"/>
                {productos.length > 0 && <Badge className="carritoItems">{productos.length}</Badge>}
            </button>
        </div>
    )
}

export default Carrito
