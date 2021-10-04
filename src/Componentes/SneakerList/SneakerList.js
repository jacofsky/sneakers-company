import React, {useState, useEffect} from 'react'
import SneakerCard from '../SneakerCard/SneakerCard.js'
import "bootstrap/dist/css/bootstrap.min.css";

const SneakerList = () => {

    const [sneakers,setSneakers] = useState([])

    useEffect(() => {
        fetch("https://the-sneaker-database.p.rapidapi.com/sneakers?limit=15", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
            "x-rapidapi-key": "ad13573892mshd41a01983f99b8fp1f64dbjsncfcb9b032ce7"
        }
        })
        .then(response => response.json())
        .then(data => setSneakers(data.results))
        .catch(err => console.error(err));
    }, [])
    

    return (
        <div className="container-fluid">
            
            <div className="row justify-content-center">
                {sneakers.map( sneaker => <SneakerCard  sneakerInfo={sneaker} />) }
            </div>
        </div>
    )
}

export default SneakerList
