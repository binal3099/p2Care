import React from 'react'
import Card from 'react-bootstrap/Card';

function Doctor1(props) {
    return (
        <>
            <Card className='doctorlist m-3 mt-5 mb-5' style={{ width: '18rem' }}>
                <Card.Img className='img-1' variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className='text-center'>{props.title}</Card.Title>
                    <Card.Text className='text-center'>{props.sec} </Card.Text>
                    <div className="doc_icon text-center">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <button className='btn-1'><a href={props.profile}>View Profile</a></button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Doctor1
