import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'



function NavbarComponent() {
    return (
    <div>
        <Navbar variant="dark" fixed="top" expand="xl">
            <Container>
            <Navbar.Brand id="logo" href="#home">AhmtR.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto">
                <Nav.Link href="#h">Home</Nav.Link>
                <Nav.Link href="#p">About Me</Nav.Link>
                <Nav.Link href="#e">Experience</Nav.Link>
                <Nav.Link href="#po">Portfolio</Nav.Link>
                <Nav.Link href="#a">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
    </div>
    )
}

export default NavbarComponent;