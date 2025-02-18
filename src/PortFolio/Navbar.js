import React from 'react'
import '../index.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import About from './About'

const NavbarCompo = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Marlon</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Skills">Skills</Nav.Link>
              <Nav.Link href="#Works">Works</Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <About />
    </div>
  )
}

export default NavbarCompo
