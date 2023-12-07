import React from 'react'

function Blogcom(props) {
  return (
    <>
      <div className='w-37 mx-5'>
        <div className='d-flex'>
          <img src={props.img} width="196px" height="233" alt="img" srcset="" />
          <div className='ms-4'>
            <div className='box1'>
              <h5 className='my-3'>{props.tag}</h5>
              <p>{props.detail}</p>
              <h5><a href={props.more} className='color pb-5'>Read More</a></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogcom
