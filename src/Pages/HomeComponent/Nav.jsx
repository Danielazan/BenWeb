import React from 'react'
import {Container,Col,Row,Card} from "react-bootstrap"
import {InView} from 'react-intersection-observer';
import {BsChevronDown} from "react-icons/bs"
import Img from "Assets/Images/logo.jpg"
import Navbar from "Components/Navbar"


function nav() {
  return (
    <React.Fragment>
            <Container fluid className='banner'>
            <Navbar/>
            <InView triggerOnce={false} threshold={0.5}>
                {({ inView, ref, entry }) => (
                    <Container ref={ref} className={`${inView ? "fadebottom" : "dis"}  text-white  con `}>
                        <Row className='op'>
                                <Col xs={12} lg={6} className="text-center">
                                    
                                    <h1 className='mt-5 ms-lg-5'>Catholic Charismatic Renewal Of Nigeria <span style={{color:'yellow'}}>Nkwo-Nike Deanery Enugu</span></h1>

                                  
                                </Col>

                                <Col xs={12} lg={6} className="text-center">
                                    <center>
                                    <Card className="rounded-circle bg-transparent me-lg-5 top">
                                        <Card.Img className="rounded-circle" variant="top" src={Img} />
                                    </Card>
                                    </center>
                                </Col>
                        </Row>
                    </Container>
                )}
            </InView>

            <center><a href="#one"><BsChevronDown style={{color:"white"}} className="mt-5" size={"3em"}/></a></center>
        </Container>

    </React.Fragment>
  )
}

export default nav