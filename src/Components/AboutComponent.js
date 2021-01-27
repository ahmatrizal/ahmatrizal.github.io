import React, {useEffect} from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"
import MyPDF from '../CV.pdf'

function AboutComponent() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="about" id="about">
          <Container> 
            <Row>
                <Col md={6} xs={12} data-aos="fade-right">
                   <Image src="assets/images/profil.png" className="w-100" />
                </Col>
                <Col md={6} xs={12} data-aos="fade-up" className="mt-3">
                    <h3>My Profile</h3>
                    <p>
                        Saya sangat antusias terkait dengan dunia Programming, 
                        sebelumnya saya hanya sebagai freelance yang biasa mengerjakan Skripsi
                         ataupun Tugas Akhir 2 s/d 3 per semesternya. Namun saat ini saya ingin
                          lebih dalam ke dunia programming dengan bekerja di perusahaan untuk
                           mengembangkan kemampuan diri saya.
                    </p>

                    <Button href={MyPDF} download="CV.pdf" variant="primary"> Download CV </Button>
                </Col>

            </Row>
          </Container> 
        </div>
    )
}

export default AboutComponent
