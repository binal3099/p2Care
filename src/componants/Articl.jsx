import React from 'react'
import Card from 'react-bootstrap/Card';

function Articl(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body className='crd-body'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.details}
                    </Card.Text>
                    <a href="/err" className='color fw-bold'>{props.more}</a>
                </Card.Body>
            </Card>
        </>
    )
}

export default Articl
