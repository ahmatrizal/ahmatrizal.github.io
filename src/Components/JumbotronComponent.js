import React, {useEffect} from 'react'
import { Jumbotron, Button, Image } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"


function JumbotronComponent () {
    useEffect(() => {
        Aos.init()
    }, [])
    return(
        <div>
            <Jumbotron>
                <div id="text-jumbo" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <h1>Hi i'm Ahmat Rizal</h1>
                <p>
                    "This is My Website"
                </p>
                </div>
            </Jumbotron>

        </div>
    )
}

export default JumbotronComponent;