import React from 'react'
import { Container } from 'react-bootstrap'
import Blogcom from '../componants/Blogcom'

function Blog() {
    return (
        <>
            <Container>
                <div className='blog mt-5 mb-5'>
                    <h4>Latest News</h4>
                    <h2>News & Article </h2>
                </div>
                <div className='mt-5'>
                    <div className='d-flex'>
                        <div className='blog_1'>
                            <Blogcom img="assets/img/blog1.png" tag="Some Of The Most Common Diseases" detail="Lorem ipsum dolor sit amet, consel tetur adipiscing..." more="/" />
                            <Blogcom img="assets/img/blog2.png" tag="Some Of The Most Common Diseases" detail="Lorem ipsum dolor sit amet, consel tetur adipiscing..." more="/" />
                            <Blogcom img="assets/img/blog3.png" tag="Some Of The Most Common Diseases" detail="Lorem ipsum dolor sit amet, consel tetur adipiscing..." more="/" />
                            <Blogcom img="assets/img/blog5.png" tag="Some Of The Most Common Diseases" detail="Lorem ipsum dolor sit amet, consel tetur adipiscing..." more="/" />
                        </div>
                        <div className='blog_2 pb-4'>
                            <div className='blog_img'>
                                <img src="assets/img/blog4.png" className='blog_5' height="536px" width="262px" alt="" />
                                <div className='blog_txt'>
                                    <h6 className='mb-3'>6 Tips For Maintaining Children’s Mental Health When Sick</h6>
                                    <p className='mb-2'>Lorem ipsum dolor sit amet, consel tetur adipiscing elit, sed...</p>
                                    <a href='/err' className='more'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog
