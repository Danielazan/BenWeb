import React from 'react'
import {Container,Col,Form,Row} from "react-bootstrap"
import Style from "Style/Style.css"
import {AiOutlineTwitter,AiOutlineInstagram,AiOutlineGithub,AiOutlineMail} from "react-icons/ai"


function Signup() {
  return (
    <Container fluid className='bg-slide'>
        <Row>
            <Col xs={12} lg={5}>
               <Container className='text-white con'>

                <h1 className='ms-lg-5'>Eventually</h1>

                <p className='ms-lg-5 mt-3 text-white'>A simple template for -telling the world when you'll launch your next big thing. Brought to you by HTML5 UF</p>

                <Form>
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={8} className="mt-5 mt-lg-3 let">
                            <Form.Control type='email' placeholder="Your Email Address" className='py-2 bg-transparent text-white border-white'/>
                        </Col>
                        <Col lg={3} className="my-3">
                            <Form.Control type='submit' style={{color:"white",backgroundColor:"rgb(28, 180, 149)"}} className='py-2 border-0' value={"Get Started"} />
                        </Col>
                    </Row>
                </Form>

                <Container className='ms-lg-5 d-flex logo'>

                    <AiOutlineTwitter className='me-2' size={"1.6em"} style={{color:"white",opacity:"0.45"}}/>

                    <AiOutlineInstagram className='mx-2' size={"1.6em"} style={{color:"white",opacity:"0.45"}}/>

                    <AiOutlineGithub className='mx-2' size={"1.6em"} style={{color:"white",opacity:"0.45"}}/>

                    <AiOutlineMail className='mx-2' size={"1.6em"} style={{color:"white",opacity:"0.45"}}/>

                </Container>

                <Container className='ms-lg-5'>
                    <p style={{fontSize:"14px",opacity:"0.45"}} className="mt-3">© Untitled.</p>
                </Container>
             
               </Container>
            </Col>

            <Col xs={12} lg={7}>
            
            </Col>
        </Row>
    </Container>
  )
}

export default Signup