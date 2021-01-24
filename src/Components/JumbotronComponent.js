import React from 'react'
import { Jumbotron, Button, Image } from 'react-bootstrap'

function JumbotronComponent () {
    return(
        <div>
            <Jumbotron>
                <div id="text-jumbo">
                <h1>Hi i'm Ahmat Rizal</h1>
                <p>
                    "This is My Website"
                </p>
                </div>
            </Jumbotron>
                <Image className="image-jumbo" scr="./logo.svg" roundedCircle  />

        </div>
    )
}

export default JumbotronComponent;