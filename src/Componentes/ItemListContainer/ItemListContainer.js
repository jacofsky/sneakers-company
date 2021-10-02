import React from 'react'
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className="greetingStyle">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
