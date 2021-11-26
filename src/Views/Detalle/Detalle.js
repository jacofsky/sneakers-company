import React, {useState, useEffect} from 'react'
import SneakerDetail from '../../Componentes/SneakerDetail/SneakerDetail';
import axios from "axios";


const Detalle = ({match}) => {


    const selectedSneaker = match.params.id;
    const [sneakerInfo, setSneakerInfo] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${selectedSneaker}`,
            headers: {
              'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
              'x-rapidapi-key': '4099edf594msh8d42683ebad3462p157522jsn8560d531c47e'
            }
          };
          
          axios.request(options).then(response => setSneakerInfo(response.data.results)).catch(error => console.error(error));
    },[])

    return (
        <div className="container">
            <h1>Detalle</h1>
            {sneakerInfo.map(sneaker => <SneakerDetail key={sneaker.id}  sneakerInfo={sneaker}/>)}
        </div>
    )
}

export default Detalle
