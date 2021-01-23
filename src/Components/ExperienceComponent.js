import React from 'react'
import { Card} from 'react-bootstrap'


function ExperienceComponent({ imageUrl, tanggal, namaPT, jabatan, descripisi}) {
    return (
        <div>
            <Card>
            <Card.Img variant="top"src={imageUrl} />
            <Card.Body>
                <Card.Title>{namaPT}</Card.Title>
                <Card.Text>
                <p>{jabatan}</p>
                <small>( {tanggal} )</small>
                    {descripisi} 
                </Card.Text>
                        
            </Card.Body>
            </Card>
        </div>
    )
}


export default ExperienceComponent

