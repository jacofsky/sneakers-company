import React, {useContext} from 'react'
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../../CartContext';


const CarritoCard = ({itemInfo}) => {

    const [productos, setProductos, addItems, removeItem, clear] = useContext(CartContext)

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{itemInfo.info.title}</Card.Title>
                    <Card.Text>
                    {itemInfo.cantidad}
                    </Card.Text>
                    <Button variant="primary" onClick={() => removeItem(itemInfo.id)}>Elimiar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CarritoCard
