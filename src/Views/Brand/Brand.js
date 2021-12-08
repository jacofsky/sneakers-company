import React, {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'; 
import SneakerCard from '../../Componentes/SneakerCard/SneakerCard'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';


const Brand = ({match}) => {

    const selectedBrand = match.params.brand;
    const [brandSneakers, setBrandSneakers] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(() => {
          
      const requestSneaker = async () => {
          const docs =[]
          const q = query(collection(db, 'Sneakers'), where('brand', '==', selectedBrand))
          const sneakers = await getDocs(q)

          sneakers.forEach((document) => {
              console.log(document.data(), document.id)
              docs.push({...document.data(), id: document.id})
          })
          setBrandSneakers(docs)
      }
      requestSneaker()

      
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
