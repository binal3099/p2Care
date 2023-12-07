import React from 'react'
import { Button } from 'react-bootstrap'
import Doctor2 from '../componants/Doctor2'
import Feedback from './Feedback'

function Doctor(props) {

    return (
        <>
            <div className='group'>
                <img src="assets/img/femaledoc.png" className='img-1' alt="img" width="100%" height="695px" />
                <div className='text'>
                    <div className='d-flex'>
                        <div className='mt-5'>
                            <h1>Search Best <br /> Doctors at Best <br /> Locations</h1>
                            <div className='info d-flex m-3 mt-4'>
                                <h3 className='doc_1'>400+ <br /> <span className='text-dark'>Doctors</span></h3>
                                <h3 className='spec_1'>50+ <br /> <span className='text-dark'>Specialist</span></h3>
                                <h3>45+ <br /> <span className='text-dark'>Cities</span></h3>
                            </div>
                        </div>
                        <div className='location'>
                            <div className='spacing'>
                                <div className='mx-4 my-3'>
                                    <label htmlFor="Searchby" className='spelab'>Specialist</label>
                                    <select className='selector_1'>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='mx-4 my-4'>
                                    <label htmlFor="location" className='loclab'>Locations</label>
                                    <input type="text" name="location" id="location" className='selector_1' />
                                </div>
                                <div className='mx-4'>
                                    <a href="/"><Button className='selector_1 btn fs-5 me-5'>Search</Button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='specilist'>
                        <div className='d-flex justify-content-center'>
                            <div className='i_box_1'>
                                <img src="assets/img/psychiatry.png" width="45px" height="45px" alt="img" />
                                <p className='fw-bold'>Psychiatry</p>
                            </div>
                            <div className='i_box_1'>
                                <img src="assets/img/general.png" width="45px" height="45px" alt="img" />
                                <p className='fw-bold'>Child Care</p>
                            </div>
                            <div className='i_box_1'>
                                <img src="assets/img/dentist.png" width="45px" height="45px" alt="img" />
                                <p className='fw-bold'>Dentist</p>
                            </div>
                            <div className='i_box_1'>
                                <img src="assets/img/baby.png" width="45px" height="45px" alt="img" />
                                <p className='fw-bold'>Pediatrics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='areadoc'>
                <p>Specialist Doctors in Your Area</p>
                <div className='doc_2'>
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
                    <Doctor2 img="assets/img/member.png" title="DR. Addition Smith" sec="Dentist" profile="/" />
                </div>
            </div>
            <Feedback/>
        </>
    )
}

export default Doctor
