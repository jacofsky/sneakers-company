import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const SneakerDetail = ({sneakerInfo}) => {

    console.log(sneakerInfo)

    return (
        <div className="row">

            

            <img src={sneakerInfo.media.imageUrl} alt="" className="col-12 col-md-6"/>
            
            <div className="col-12 col-md-6">
                <h2>{sneakerInfo.title}</h2>
                <p className="text-start">Marca: {sneakerInfo.brand}</p>
                <p className="text-start">Fecha de salida: {sneakerInfo.releaseDate}</p>
                <p>${sneakerInfo.retailPrice}</p>
                <ItemCount stock={12} initial={1}/>
            </div>
        </div>
    )
}

export default SneakerDetail
