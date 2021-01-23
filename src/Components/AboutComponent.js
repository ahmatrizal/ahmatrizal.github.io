import React from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap'

function AboutComponent() {
    return (
        <div className="about">
          <Container> 
            <Row>
                <Col md={6} xs={12}>
                    <h3>My Profile</h3>
                    <p>
                        Saya sangat antusias terkait dengan dunia Programming, 
                        sebelumnya saya hanya sebagai freelance yang biasa mengerjakan Skripsi
                         ataupun Tugas Akhir 2 s/d 3 per semesternya. Namun saat ini saya ingin
                          lebih dalam ke dunia programming dengan bekerja di perusahaan untuk
                           mengembangkan kemampuan diri saya.
                    </p>

                    <Button variant="primary"> Download CV </Button>
                </Col>
                <Col md={6} xs={12}>
                   <Image src="assets/images/parallax.jpg" className="w-100" />
                </Col>

            </Row>
          </Container> 
        </div>
    )
}

export default AboutComponent
