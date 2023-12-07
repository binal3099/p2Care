import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Services from './Services'
import Doctor1 from '../componants/Doctor';
import About from './About'
import Appointment from './Appointment';
import Feedback from './Feedback';
import Blog from './Blog';
import Form from 'react-bootstrap/Form';
// import { useState } from 'react';

function Home() {
  // const [position, setPosition] = useState('Name or disease ');
  // const [position, setPosition] = useState('Doctor ');
  return (
    <>
      <div className='group'>
        <img src="assets/img/Group124.png" className='img-1' alt="img" width="100%" height="695px" />
        <div className='text'>
          <p>lorem ipsum</p>
          <h1>Best Platform <br /> For Patients</h1>
          <p>Lorem ipsum dolar lorem ipsum dolar</p>
          <div className='info d-flex m-3'>
            <h3 className='doc'>400+ <br /> Doctors</h3>
            <h3 className='spec'>50+ <br /> Specialist</h3>
            <h3>45+ <br /> Cities</h3>
          </div>
          <Button className='bg-color ms-3 my-4 py-2 px-4 fs-5'>Book Now</Button>
          <h4 className='mb-3'>Book Appointments With Our Expert Doctors Near You</h4>
          <h6 className='mt-4'>Get consultation for 50+ diseases across India</h6>
          <h6>In-person and online consultation with experienced doctors</h6>
          <h6>Extensive medical assistance throughout your treatment</h6>
        </div>
      </div>
      <Container className='serch'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex'>
            <div className='mx-4'>
              <label htmlFor="selectToastPlacement">Specialist</label>
              <Form.Select
                id="selectToastPlacement"
                className="selector"
              // onChange={(e) => setPosition(e.currentTarget.value)}
              >
                {[
                  'Name or disease',
                  'top-center',
                  'top-end',
                  'middle-start',
                  'middle-center',
                  'middle-end',
                  'bottom-start',
                  'bottom-center',
                  'bottom-end',
                ].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className='mx-4'>
              <label htmlFor="selectToastPlacement">Search by</label>
              <Form.Select
                id="selectToastPlacement"
                className="selector"
              // onChange={(e) => setPosition(e.currentTarget.value)}
              >
                {[
                  'Doctor',
                  'top-center',
                  'top-end',
                  'middle-start',
                  'middle-center',
                  'middle-end',
                  'bottom-start',
                  'bottom-center',
                  'bottom-end',
                ].map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className='mx-4'>
              <label htmlFor="location">Locations</label>
              <input type="text" name="location" id="location" className='selector' placeholder='Enter your location' />
            </div>
          </div>
          <div>
            <Button className='btn fs-5 me-5'>Search</Button>
          </div>
        </div>
      </Container>
      <Services />
      <Container>
        <div className='services mt-5'>
          <h4>Doctors</h4>
          <h2>Select Your Doctor</h2>
        </div>
        <div className='text-end me-5 mt-5'>
          <i class="fa-solid fa-angle-left"></i>
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className='d-flex justify-content-center'>
          <Doctor1 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
          <Doctor1 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
          <Doctor1 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
          <Doctor1 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
          <Doctor1 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
        </div>
      </Container>
      <About />
      <Appointment />
      <Feedback />
      <Blog />
    </>
  )
}

export default Home
