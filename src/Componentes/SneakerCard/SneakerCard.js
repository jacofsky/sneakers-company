import React from 'react'
import { Card, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";





const SneakerCard = ({sneakerInfo}) => {
    return (
        <div className="sneakerCard col-12 col-md-3 py-2">
            <Card style={{ width: '18rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={sneakerInfo.image.original ? sneakerInfo.image.original : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'} />
            <Card.Body>
                <Card.Title className="justify-content-start">{sneakerInfo.name}</Card.Title>
                    <Card.Text>
                    {sneakerInfo.estimatedMarketValue}$
                    </Card.Text>
                    <Button>Mas informacion</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default SneakerCard
