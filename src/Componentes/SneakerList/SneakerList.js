import React, {useState, useEffect} from 'react'
import SneakerCard from '../SneakerCard/SneakerCard.js'
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner} from 'react-bootstrap'; 
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.js';


const SneakerList = () => {

    const [sneakers,setSneakers] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        

        const requestSneaker = async() => {
            const docs =[]
            const sneakers = await getDocs(collection(db, 'Sneakers'))
            sneakers.forEach((document) => {
                console.log(document.data(), document.id)
                docs.push({...document.data(), id: document.id})
            })
            console.log(docs)
            setSneakers(docs)
        }
        requestSneaker()
        
        
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
