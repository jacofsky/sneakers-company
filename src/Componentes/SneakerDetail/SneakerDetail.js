import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import './SneakerDetail.css'

const SneakerDetail = ({sneakerInfo}) => {

    console.log(sneakerInfo)

    const [cant, setCant] = useState(0);

    const onAdd = (cantidad) => {
        setCant(cantidad)
        console.log(cantidad)
    }


    return (
        <div className="row">


            <img src={sneakerInfo.media.imageUrl} alt="" className="col-12 col-md-6"/>
            
            <div className="col-12 col-md-6">
                <h2>{sneakerInfo.title}</h2>
                <p className="text-start">Marca: {sneakerInfo.brand}</p>
                <p className="text-start">Fecha de salida: {sneakerInfo.releaseDate}</p>
                <p>${sneakerInfo.retailPrice}</p>
                <ItemCount stock={12} initial={1} numProductos={cantidad => onAdd(cantidad)}/>
                {cant ? <Link to={`/Carrito`}><button className="carroActive mt-4">Ir al carro</button></Link> : <button className="carroDisable mt-4" disabled>Ir al carro</button>}
            </div>
        </div>
    )
}

export default SneakerDetail
