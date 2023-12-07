import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function About() {
    return (
        <>
            <Container>
                <Row>
                    <div className='d-flex'>
                        <div className='w-50 mx-5'>
                            <div className='about'>
                                <h4 className='text-info mb-3'>About Us</h4>
                                <h2 className='mb-4'>We Provide Best Doctor <br /> Consultation For You</h2>
                                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim lectus</p>
                                <div className="d-flex">
                                    <div className='me-5'>
                                        <h5>All Types of Doctors</h5>
                                        <p>Lorem ipsum dolor sit amet <br />adipiscing elit sed doesmo</p>
                                    </div>
                                    <div>
                                        <h5>Get Quick Appointment</h5>
                                        <p>Lorem ipsum dolor sit <br /> amet adipiscing elit sed doesmo</p>
                                    </div>
                                </div>
                                <Button className='ms-2 mt-4 py-2 px-4 fs-5'>Book Now</Button>
                            </div>
                        </div>
                        <div className='w-50'>
                            <div className='prt'>
                                <div className='ptgroup'>
                                    <img src="assets/img/group110.png" alt="img" />
                                </div>
                                <div className='patint'>
                                    <i class="fa-solid fa-users-line"></i>
                                    <h5 className='ms-5 text-info'>2,200+</h5>
                                    <p>Satisfied Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default About
