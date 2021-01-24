import React from 'react'
import { Card, Col, Container, Row} from 'react-bootstrap'


function ExperienceComponent({ imageUrl, tanggal, namaPT, jabatan, descripisi}) {
    return (
        <div className="experience">
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

