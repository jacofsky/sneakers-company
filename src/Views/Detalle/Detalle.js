import React, {useState, useEffect} from 'react'
import SneakerDetail from '../../Componentes/SneakerDetail/SneakerDetail';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';



const Detalle = ({match}) => {


    const selectedSneaker = match.params.id;
    const [sneakerInfo, setSneakerInfo] = useState([])

    useEffect(() => {

        

        const requestSneaker = async () => {
            const docs =[]
            const q = query(collection(db, 'Sneakers'), where('title', '==', selectedSneaker))
            const sneakers = await getDocs(q)

            sneakers.forEach((document) => {
                console.log(document.data(), document.id)
                docs.push({...document.data(), id: document.id})
            })
            setSneakerInfo(docs)
        }
        requestSneaker()
          
        
    },[])

    return (
        <div className="container">
            <h1>Detalle</h1>
            {sneakerInfo.map(sneaker => <SneakerDetail key={sneaker.id}  sneakerInfo={sneaker}/>)}
        </div>
    )
}

export default Detalle
