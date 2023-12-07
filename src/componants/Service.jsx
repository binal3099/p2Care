import React from 'react'

function Service(props) {
    return (
        <>
            <div className='box'>
                <img src={props.img} className='spec_img' alt="img" width="80px" height="80px" srcset="" />
                <div className='text-align-center'>
                    <h4 className='py-4 box_text'>{props.tag}</h4>
                    <p className='box_text'>{props.detail}</p>
                </div>
            </div>
        </>
    )
}

export default Service
