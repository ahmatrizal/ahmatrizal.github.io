import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ContactComponent() {
    return (
        <div className="contact">
            <Container>
                <Row>
                    <Col md={4} xs={12}>
                        <p>asdlasdjlaslkdalsdmlasdmlsadmkasdm</p>
                        
                    </Col>
                    <Col md={4} xs={12} className="contact-2">
                        <div className="mr-auto garis_verikal"></div>
                        <h1 id="logo">AhmtR.</h1>

                        <div className="ml-auto garis_verikal"></div>
                    </Col>
                    <Col md={4} xs={12}>
                        <p>0898.986.4717</p>
                        <p>ahmat.rizal@outlook.com</p>
                        <p>linkedin.com/in/ahmatrizal/</p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactComponent
