import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Row,Col,Container,Card,Button} from "react-bootstrap"
import {FaTwitter,FaFacebookF,FaSnapchatGhost,FaInstagram} from "react-icons/fa"
import Pic from "../Images/pic10.jpg"

function Banner() {
  return (
    <React.Fragment>
        <Container className='mt-lg-5'>

            <Row>
                <Col xs={9} lg={6} className="mt-1">
                    <h6 style={{color:"rgb(61, 68, 73)"}}>Editorial <span style={{color:"rgb(127, 136, 143)"}}>by HTML5 UP</span></h6>
                </Col>

                <Col xs={3} lg={6} className='d-flex justify-content-end'>
                    <a href="" style={{color:"rgb(127, 136, 143)"}} className='social'><FaTwitter size={"1.3em"} className="mx-1 mx-lg-2 social" /></a>
                    <a href="" style={{color:"rgb(127, 136, 143)"}}><FaFacebookF size={"1.3em"} className="mx-1 mx-lg-2 social" /></a>
                    <a href="" style={{color:"rgb(127, 136, 143)"}}><FaSnapchatGhost size={"1.3em"} className="mx-1 mx-lg-2 social" /></a>
                    <a href="" style={{color:"rgb(127, 136, 143)"}}><FaInstagram size={"1.3em"} className="mx-1 mx-lg-2 social"/></a>
                </Col>
            </Row>

            <hr className='hline'/>

            <Row className='my-5'>
                <Col xs={12} lg={6}  className='order-lg-first order-last'>
                    <h1>Hi, I'm Editorial by HTML5 UP</h1>

                    <p className='txt'>A FREE AND FULLY RESPONSIVE SITE TEMPLATE</p>

                    <p className='txt'>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, ametgestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat ideuismod egestas.Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>

                    <Button variant='outline-danger' className='px-5 py-2'>Learn More</Button>
                </Col>

                <Col xs={12} lg={6} className='order-lg-last order-first'>
                <Card style={{ width: '100%' }} className='border-0 rounded mb-5 mb-lg-0'>
                    <Card.Img variant="top" src={Pic} className='border-0 rounded' />
                </Card>
                </Col>
            </Row>

            <hr className='hl'/>

        </Container>
    </React.Fragment>
  )
}

export default Banner