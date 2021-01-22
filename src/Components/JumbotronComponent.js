import React from 'react'
import { Jumbotron, Button, Image } from 'react-bootstrap'

function JumbotronComponent () {
    return(
        <div>
            <Jumbotron>
                <div id="text-jumbo">
                <h1>My Profile</h1>
                <p>
                    Saya sangat antusias terkait dengan dunia programming, sebelumnya saya hanya sebagai freelance dengan mengerjakan skripsi 2-3 perSemesternya. namun saat ini saya ingin lebih dalam ke dunia programming dengan bekerja di perusahaan untuk mengembangkan diri saya.
                </p>
                <p>
                    <Button variant="primary">Download CV</Button>
                </p>

                </div>

            </Jumbotron>
                <Image className="image-jumbo" scr="./logo.svg" roundedCircle  />

        </div>
    )
}

export default JumbotronComponent;