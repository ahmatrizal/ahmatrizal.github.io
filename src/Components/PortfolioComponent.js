import React, {useEffect} from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"


function PortfolioComponent() {
    
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    

    return (
        <div className="portfolio" id="portfolio" data-aos="fade-up">
            <Container> 
            <Row>
                <Col md={6} xs={12}>
                    <h3>Portfolio</h3>
                    <p>
                        Untuk Portfolio atau project yang sudah saya kerjakan , bisa cek github saya dengan menekan tombol yang ada dibawah
                    </p>

                    <Button variant="primary"> Go to Github </Button>
                </Col>

                <Col md={6} xs={12} className="mt-3" data-aos="fade-left">
                   <Image src="assets/images/portfolio.png" className="w-100" />
                </Col>
            </Row>
          </Container> 
        </div>
    )
}

export default PortfolioComponent
