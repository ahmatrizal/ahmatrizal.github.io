import React from 'react'
import { Jumbotron, Button, Image } from 'react-bootstrap'

function JumbotronComponent () {
    return(
        <div>
            <Jumbotron>
                <div id="text-jumbo">
                <h1>There is No Finished in Learning</h1>
                <p>
                    "I Like Programming"
                </p>
                </div>
            </Jumbotron>
                <Image className="image-jumbo" scr="./logo.svg" roundedCircle  />

        </div>
    )
}

export default JumbotronComponent;