import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

  return (
    <>
      <header>
        <div className='w-100'>
          <a href="mailto:" className='align-content-end'><i class="fa-solid fa-envelope"></i>contact@xgenious.comx</a>
        </div>
        <Container>
          <div className='d-flex justify-content-between'>
            <img src="assets/img/logo2.png" alt="logo" width="163px" height="90px" />
            <div className='contact align-content-center'>
              <div className='d-flex'>
                <div className='mail'>
                  <p>Send Us Mail</p>
                  <a href="mailto:" className='text-dark'><i class="fa-solid fa-envelope"></i>contact@xgenious.com</a>
                </div>
                <div className='contact_number ms-5'>
                  <p>Call To Us</p>
                  <a href="tel:+" className='text-dark'><i class="fa-solid fa-phone"></i>01234569872</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className='nav'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto fs-6 text-dark">
                <Nav.Link className="text-dark" href="/">Home</Nav.Link>
                <Nav.Link className="text-dark" href="/about">About</Nav.Link>
                <Nav.Link className="text-dark" href="/doctoreprofile">Doctors</Nav.Link>
                <Nav.Link className="text-dark" href="/services">Services Areas</Nav.Link>
                <Nav.Link className="text-dark" href="/blog">Blogs</Nav.Link>
                <Nav.Link className="text-dark" href="/hospital">Contact Us</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
