import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount.js';
import SneakerList from '../SneakerList/SneakerList.js';

const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <h1 className="greetingStyle">{greeting}</h1>
            
            <SneakerList/>
        </div>
    )
}

export default ItemListContainer
