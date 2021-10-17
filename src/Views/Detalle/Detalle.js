import React, {useState, useEffect} from 'react'
import SneakerCard from '../../Componentes/SneakerCard/SneakerCard';

const Detalle = ({match}) => {

    console.log(match)

    const selectedSneaker = match.params.id;

    const [sneakerInfo, setSneakerInfo] = useState([])

    useEffect(() => {

        fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=15", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
                "x-rapidapi-key": "4099edf594msh8d42683ebad3462p157522jsn8560d531c47e"
	    }
        })
        .then(response => console.log(response))
        .then(data => console.log(data.results))
        .catch(err => console.error(err));

    },[])

    return (
        <div>
            <h1>Detalle</h1>
            {sneakerInfo.map( sneaker => sneaker.name === selectedSneaker ? <SneakerCard key={sneaker.id}  sneakerInfo={sneaker}/> : false )}
        </div>
    )
}

export default Detalle
