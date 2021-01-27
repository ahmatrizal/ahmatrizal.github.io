import React, {useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Aos from 'aos'
import "aos/dist/aos.css"


function ContactComponent() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    
    return (
        <div className="contact" id="contact">
            <Container>
                <Row>
                    <Col>
                         <h1 className="mb-5">Contact Us</h1>
                    </Col>
                </Row>
                <Row data-aos="fade-up">
                    <Col md={4} xs={12} className=" pb-2 pt-5">
                        <FontAwesomeIcon icon={faMobileAlt }  size="7x" />
                        <br />
                        <p className="mt-4">Anda bisa menghubungi Via WhatsApp / Telphone</p>
                        <h4><b>0898 - 986 - 4717</b></h4>
                    </Col>
                    <Col md={4} xs={12} className=" pb-2 pt-5">
                        <FontAwesomeIcon icon={faPaperPlane }  size="7x" />
                        <br />
                        <p className="mt-4">Anda pun bisa juga mengirim pesan Via Email</p>
                        <h4><b>ahmat.rizal@outlook.com</b></h4>
                    </Col>
                    <Col md={4} xs={12} className=" pb-2 pt-5">
                        <FontAwesomeIcon icon={faLinkedin }  size="7x" />
                        <p className="mt-4">Ingin tau lebih lengkap bisa cek Linkedin saya </p>
                        <h4><b>linkedin.com/in/ahmatrizal/</b></h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactComponent
