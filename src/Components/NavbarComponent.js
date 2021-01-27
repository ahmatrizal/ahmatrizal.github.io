import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link } from 'react-scroll'


function NavbarComponent() {
    return (
    <div>
                
        <Navbar variant="dark" fixed="top" expand="xl">
            <Container>
            <Navbar.Brand id="logo">AhmtR.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto">
                    <Link className="nav-link" to="home" smooth={true} duration={1000}>Home</Link>
                    <Link className="nav-link" to="about" smooth={true} duration={1000}>About Me</Link>
                    <Link className="nav-link" to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
                    <Link className="nav-link" to="experience" smooth={true} duration={1000}>Experience</Link>
                    <Link className="nav-link" to="contact" smooth={true} duration={1000}>Contact Us</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
                 
            
    </div>
    )
}

export default NavbarComponent;