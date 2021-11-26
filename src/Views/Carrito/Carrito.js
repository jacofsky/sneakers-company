import React, {useContext} from 'react'
import { CartContext } from '../../CartContext'
import CarritoCard from '../../Componentes/CarritoCard/CarritoCard'
import "bootstrap/dist/css/bootstrap.min.css";

const Carrito = () => {

    const [productos] = useContext(CartContext)

    return (
        <div className="container">

            {
                productos.map(producto => <CarritoCard itemInfo={producto}/>)
            }
            
        </div>
    )
}

export default Carrito
