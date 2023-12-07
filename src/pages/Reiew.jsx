import React from 'react'
import { Container } from 'react-bootstrap'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function Reiew() {
    return (
        <>
            <Container>
                <div className="review">
                    <p className='review-cont'>Lorem ipsum dolor sit amet, consectet  adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectet adipiscing elit, Lorem ipsum dolor sit amet, consectet  adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectet adipiscing elit, Lorem ipsum dolor sit amet, consectet  adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectet adipiscing elit, Lorem ipsum dolor sit amet, consectet  adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectet adipiscing elit,</p>
                    <div className='d-flex mt-4 justify-content-center'>
                        <div>
                            <img src="assets/img/testimonial.png" width="77px" height="77px" alt="" />
                        </div>
                        <div className='m-3'>
                            <h5 className='text-info'>Leela Rogers</h5>
                            <p className='fs-6 me-4'>Businessman</p>
                        </div>
                    </div>                    
                </div>
                <div className='text-end mt-4 me-4'>
                        <button className='indicator me-3'><FaChevronLeft/></button>
                        <button className='indicator'><FaChevronRight/></button>
                    </div>
            </Container>
        </>
    )
}

export default Reiew
