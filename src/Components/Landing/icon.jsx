import React from 'react'
import {FaChartArea,FaComment,FaFlask,FaPaperPlane,FaFile,FaLock} from "react-icons/fa"
import {Container,Col,Row,Button} from "react-bootstrap"


function icon() {
  return (
    <React.Fragment>
         <Container fluid className='icons-section py-5'>
            <div className='pt-5'>
                <h2 className='text-center text-white pt-5'>Accumsan sed tempus adipiscing blandit</h2>
                <p className='text-center text-white'>Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu consequat</p>

                <center><hr className='hr my-5'/></center>

                <Container style={{color:"rgb(189, 194, 201)"}}>
                        <Row>
                            <Col xs={12} lg={4} md={12} className="text-center">
                                <FaChartArea className="mt-4" size={"5em"} style={{backgroundColor:"rgb(39, 40, 51)",borderRadius:'40%',padding:"1.6em"}}/>

                                <h3 style={{color:"white"}} className="mt-4">Ipsum sed commodo</h3>

                                <p className="mt-4">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
                            </Col>

                            <Col xs={12} lg={4} md={12} className="text-center">
                                <FaComment className="mt-4" size={"5em"} style={{backgroundColor:"rgb(39, 40, 51)",borderRadius:'40%',padding:"1.6em"}}/>

                                <h3 style={{color:"white"}} className="mt-4">Ipsum sed commodo</h3>

                                <p className="mt-4">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
                            </Col>

                            <Col xs={12} lg={4} md={12} className="text-center">
                                <FaFlask className="mt-4" size={"5em"} style={{backgroundColor:"rgb(39, 40, 51)",borderRadius:'40%',padding:"1.6em"}}/>

                                <h3 style={{color:"white"}} className="mt-4">Ipsum sed commodo</h3>

                                <p className="mt-4">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
                            </Col>

                            <Col xs={12} lg={4} md={12} className="text-center">
                                <FaPaperPlane className="mt-4" size={"5em"} style={{backgroundColor:"rgb(39, 40, 51)",borderRadius:'40%',padding:"1.6em"}}/>

                                <h3 style={{color:"white"}} className="mt-4">Ipsum sed commodo</h3>

                                <p className="mt-4">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
                            </Col>

                            <Col xs={12} lg={4} md={12} className="text-center">
                                <FaFile className="mt-4" size={"5em"} style={{backgroundColor:"rgb(39, 40, 51)",borderRadius:'40%',padding:"1.6em"}}/>

                                <h3 style={{color:"white"}} className="mt-4">Ipsum sed commodo</h3>

                                <p className="mt-4">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
                            </Col>

                            <Col xs={12} lg={4} md={12} className="text-center">
                                <FaLock className="mt-4" size={"5em"} style={{backgroundColor:"rgb(39, 40, 51)",borderRadius:'40%',padding:"1.6em"}}/>

                                <h3 style={{color:"white"}} className="mt-4">Ipsum sed commodo</h3>

                                <p className="mt-4">Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
                            </Col>
                        </Row>
                </Container>

               <center><Button  className='my-5 px-5 py-3' variant="outline-light">Learn More</Button></center>
            </div>

        </Container>
    </React.Fragment>
  )
}

export default icon