import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Card,Button} from "react-bootstrap"
import {IoIosArrowRoundBack} from "react-icons/io"
import pic from "Assets/Images/pic.jpg"
import pic2 from "Assets/Images/pic07.jpg"

function Side() {
  return (
    <React.Fragment>
        <div fluid>
            <div className='ms-0 ms-lg-4'>
                <h2 className='side-h2 ps-3'>Similar News</h2>

                <Card className="my-5 bg-dark side-card border-0">
                    <Card.Img variant="top" src={pic} className="rounded-1 side-img" />
                    <Card.Body className='mx-0 px-0 side-body rounded-1 '>
                        <Button  className='ms-3 side-btn p-2 my-2'><IoIosArrowRoundBack size={"1.4em"}/>More Details</Button>

                        <Card.Title className='side-h2 ps-3'>ESL One Los Angeles nur noch online</Card.Title>
                        
                    </Card.Body>
                </Card>

                <Card className="my-5 bg-dark side-card border-0">
                    <Card.Img variant="top" src={pic2} className="rounded-1 side-img" />
                    <Card.Body className='mx-0 px-0 side-body rounded-1 '>
                        <Button  className='ms-3 side-btn p-2 my-2'><IoIosArrowRoundBack size={"1.4em"}/>More Details</Button>

                        <Card.Title className='side-h2 ps-3'>ESL One Los Angeles nur noch online</Card.Title>
                        
                    </Card.Body>
                </Card>
            </div>

        </div>
    </React.Fragment>
  )
}

export default Side