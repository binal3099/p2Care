import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Articl from '../componants/Articl';

function Article() {
    return (
        <>
            <Container>
                <div className='d-flex justify-content-evenly'>
                   <Articl img="assets/img/doctornurses.png" title="What is Lorem Ipsum?" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" more="Read More"/>
                   <Articl img="assets/img/doctornurses.png" title="What is Lorem Ipsum?" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" more="Read More"/>
                   <Articl img="assets/img/doctornurses.png" title="What is Lorem Ipsum?" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" more="Read More"/>
                </div>
                <Button className='btn-3 mt-5'><p className='text-center'>Load More</p></Button>
            </Container>
        </>
    )
}

export default Article
