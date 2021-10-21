import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Spinner} from 'react-bootstrap'; 
import SneakerCard from '../../Componentes/SneakerCard/SneakerCard'



const Brand = ({match}) => {

    const selectedBrand = match.params.brand;

    console.log(selectedBrand)

    const [brandSneakers, setBrandSneakers] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers`,
            params: {limit: '10', brand: `${selectedBrand}`},
            headers: {
              'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
              'x-rapidapi-key': '4099edf594msh8d42683ebad3462p157522jsn8560d531c47e'
            }
          };
          
        axios.request(options).then(response => setBrandSneakers(response.data.results)).catch(error => console.error(error));
        console.log(brandSneakers)
        setLoader(false);
    },[selectedBrand])

    return (
        <div className="container-fluid">
          <h1>Bienvenido a {selectedBrand}</h1>
          <div className="row justify-content-center">
            {loader ? <Spinner animation="border" variant="info" /> : brandSneakers.map(sneaker => <SneakerCard key={sneaker.id} sneakerInfo={sneaker}/>)}
          </div>
        </div>
    )
}

export default Brand
