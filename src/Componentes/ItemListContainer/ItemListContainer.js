import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount.js';

const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <h1 className="greetingStyle">{greeting}</h1>
            <ItemCount stock={12} initial={1} />
        </div>
    )
}

export default ItemListContainer
