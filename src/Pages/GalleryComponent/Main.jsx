import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Card,Button} from "react-bootstrap"
import bg from "Assets/Images/bg01.jpg"

function Main() {
  return (
    <React.Fragment>
        <div fluid>
            <h2>ESL One Los Angeles nur noch online C 020220 1315</h2>

            <p className='mt-4 gallery-txt'>Respawn Entertainment has released a fifth-season trailer for its popular Apex Legends Battle Royale titled .9nle of Fortune. Of the Innovations, the creators called the legend of Lob. a map Yongs Canyon'. a combat pass and a seasonal mission. <br /><br /> With the advent of the new season in Apex Legends, the fourth rating senes begins, where the creators added the function of reconnecting to the sesslc:n and for the defeat</p>

            <Card className='my-4 bg-transparent border-0' style={{ width: '100%'}}>
              <Card.Img variant="top" className='rounded-2' src={bg} />
            </Card>

            <p className='gallery-txt'>The forehead is distinguished by ustng a cane, mth which It receves loot He also has a bracelet that can teleport the hero. <br /><br /> The seasonal quest was called The Broken Ghost. In it. gamers must find a mystenous artifact. but it just wont happen - it is divided into rune parts and need to find th«n all by collecting the Treasure Pack every day In any battle jn the garre <br /><br /> After that. players will have access to weekly night hunts on the Kongs Canyon map. The right parts of the artifact are scattered here The fifth season of Apex Legends starts May 1 2, and the first part of the artifact Will be obtained on May 19.</p>

            <center><Button variant='outline-primary' className='px-5 py-3 my-5'>Learn More</Button></center>
        </div>
    </React.Fragment>
  )
}

export default Main