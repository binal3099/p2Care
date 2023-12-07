import React from 'react'
import { Container } from 'react-bootstrap'
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


function Docprofile() {
    return (
        <>
            <div className='pageindi'>
                <Container>
                    <div className='htha d-flex'>
                        <a href='/' className='text-white fw-bold me-2'>Home</a>
                        <div className='text-white'>
                            <FaChevronRight />
                        </div>
                        <a href='/doctoreprofile' className='text-white fw-bold ms-2'>DR. Addition Smith</a>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="docinfo">
                    <div className="d-flex justify-content-between">
                        <div className='docimg'>
                            <img src="assets/img/member41.png" alt="img" height="175px" width="188px" />
                        </div>
                        <div className='docname'>
                            <h5 className='fw-bold mb-3'>DR. Addition Smith</h5>
                            <h6 className='mb-2'>Dr. Code: 123</h6>
                            <h6>Dept. Code: 253</h6>
                            <div>
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='drheader'>
                    <a href="/aboutdoc" className='text-dark ms-5 fw-bold'>Overview</a>
                    <a href="/drreview" className='text-dark fw-bold'>Reviews</a>
                    <a href="/drarticles" className='text-dark fw-bold'>Articles</a>
                </div>
            </Container>
        </>
    )
}

export default Docprofile
