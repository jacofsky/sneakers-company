import React, {useState, useEffect} from 'react'
import SneakerCard from '../SneakerCard/SneakerCard.js'
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner} from 'react-bootstrap'; 
import axios from "axios"; 


const SneakerList = () => {

    const [sneakers,setSneakers] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
            params: {limit: '30'},
            headers: {
              'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
              'x-rapidapi-key': '4099edf594msh8d42683ebad3462p157522jsn8560d531c47e'
            }
          };
          
          axios.request(options).then(response => setSneakers(response.data.results)).catch(error => console.error(error));
          setLoader(false);
    }, [])
    

    return (
        <div className="container-fluid">
            
            <div className="row justify-content-center">
                {loader ? <Spinner animation="border" variant="info" /> :  sneakers.map( sneaker => <SneakerCard key={sneaker.id} sneakerInfo={sneaker} />) }
            </div>
        </div>
    )
}

export default SneakerList
