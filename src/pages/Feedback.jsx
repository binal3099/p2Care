import React from 'react'
import { Container } from 'react-bootstrap'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function Feedback() {
    return (
        <>
            <Container>
                <div className='feedback mt-5 mb-5'>
                    <h4>Patients Feedback</h4>
                    <h2 className='mb-3'>Positive Feedback From Our Patients</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Donec vel dignissim lectus. Pellentesque </p>
                    <div className='text-end me-5 mt-6'>
                        <button className='indicator me-3'><FaChevronLeft/></button>
                        <button className='indicator'><FaChevronRight/></button>
                    </div>
                    <div>
                        <div className='d-flex mt-4 justify-content-center'>
                            <div>
                                <img src="assets/img/testimonial.png" width="77px" height="77px" alt="" />
                            </div>
                            <div className='m-3'>
                                <h5 className='text-info'>Leela Rogers</h5>
                                <p className='fs-6 me-4'>Businessman</p>
                            </div>
                        </div>
                        <p className='test_text'>Lorem ipsum dolor sit amet, consectet  adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et <br /> Lorem ipsum dolor sit amet, consectet adipiscing elit, </p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Feedback
