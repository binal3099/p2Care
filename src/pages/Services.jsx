import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Service from '../componants/Service';
import '../App.css';


function Services() {
    return (
        <>
            <Container className='pt_150'>
                <div className='d-flex'>
                    <div className='services'>
                        <h4>Services</h4>
                        <h2>Our Specialities</h2>
                    </div>
                    <div className='button'>
                        <Button className='btn fs-5'>View All</Button>
                    </div>
                    {/* <div className="">
                    </div> */}
                </div>
                <div className='mt-5'>
                    <div className='content'>
                        <Service img="assets/img/general.png" tag="Child Care" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit," />
                        <Service img="assets/img/psychiatry.png" tag="Psychiatry" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, " />
                        <Service img="assets/img/dentist.png" tag="Dentist" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, " />
                        <Service img="assets/img/baby.png" tag="Pediatrics" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, " />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Services
