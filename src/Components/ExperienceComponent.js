import React, {useEffect} from 'react'
import { Card, Col, Container, Row} from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"

function ExperienceComponent({ imageUrl, tanggal, namaPT, jabatan, descripisi}) {
     useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    

    return (
        <div className="experience" data-aos="flip-up">
            <Container>
                <Row>
                    <Col>
            <Card>
            <Card.Img variant="top" className="img-card" src={imageUrl} />
            <Card.Body>
                <Card.Title><b>{namaPT}</b></Card.Title>
                <Card.Text>
                <p>{jabatan}</p>
                <small>( {tanggal} )</small>
                    {descripisi} 
                </Card.Text>
                        
            </Card.Body>
            </Card>
                    
                    </Col>

                </Row>
            </Container>
        </div>
    )
}


export default ExperienceComponent

