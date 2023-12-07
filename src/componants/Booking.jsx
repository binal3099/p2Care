import React from 'react'

function Booking(props) {
    return (
        
            <div className='booking'>
                <div className='booking-no mb-3'><p className='text-white pt-4'>{props.no}</p></div>
                <div className='text-align-center'>
                    <h6 className='mb-2'>{props.tag}</h6>
                    <p>{props.detail}</p>
                </div>
            </div>
    )
}

export default Booking
