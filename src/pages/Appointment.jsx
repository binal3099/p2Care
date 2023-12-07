import React from 'react'
import { Container } from 'react-bootstrap'
import Booking from '../componants/Booking'

function Appointment() {
    return (
        <>
            <div className='services mt-5'>
                <h4>Easy Appointment</h4>
                <h2 className='mb-3'>Easy Step To Booking</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Donec vel dignissim lectus. Pellentesque </p>
                <div className="appoint">
                    <div className='prt-1'>
                        <img src="assets/img/doctor.png" alt="img" width="100%" />
                        <Container>
                            <div className='booking_1'>
                                <div className='d-flex'>
                                    <Booking no="1" tag="Search Your Disease" detail="Lorem ipsum dolor sit, consectetur adipiscing elit. " />
                                    <Booking no="2" tag="Search Your Disease" detail="Lorem ipsum dolor sit, consectetur adipiscing elit. " />
                                    <Booking no="3" tag="Search Your Disease" detail="Lorem ipsum dolor sit, consectetur adipiscing elit. " />
                                    <Booking no="4" tag="Search Your Disease" detail="Lorem ipsum dolor sit, consectetur adipiscing elit. " />
                                </div>
                            </div>

                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment
