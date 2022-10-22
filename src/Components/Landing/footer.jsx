import React from 'react'
import {SlSocialFacebook,SlSocialLinkedin,SlSocialInstagram} from "react-icons/sl"
import {CiTwitter,CiMail} from "react-icons/ci"
import {Container,Col,Form,Row} from "react-bootstrap"
import {InView} from 'react-intersection-observer';
import {FaGithub} from "react-icons/fa"



function footer() {
  return (
    <React.Fragment>
         <Container fluid className='red-section text-center text-white pb-5'>
            <InView triggerOnce={false} threshold={0.6}>
                {({ inView, ref, entry }) => (
                    <div ref={ref} className={`${inView ? "fade2" : "dis"} `}>
                        <h2 className='py-5'>Magna faucibus lorem diam</h2>
                        <p>Ante metus praesent faucibus ante integer id accumsan eleifend</p>

                        <Container>
                            <Form>
                                <Row>
                                    <Col lg={3}></Col>
                                    <Col lg={4} className="my-5 mb-lg-5 column">
                                        <Form.Control type='email' placeholder="Your Email Address" className='py-3 bg-transparent text-white'/>
                                    </Col>
                                    <Col lg={2} className="mb-5 my-lg-5 mb-lg-5">
                                        <Form.Control type='submit' style={{color:" rgb(228, 76, 101"}} className='py-3' value={"Get Started"} />
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                )}
            </InView>
  
        </Container>

        {/* Section 7  - Footer */}

        <footer fluid className='footer pb-5'>
            <Container className='pt-5'>
                <Row className='pt-5'>
                    <Col xs={1} lg={4}></Col>

                    <Col xs={11} lg={5}>
                        <CiTwitter className='mx-md-3 mx-2' style={{color:"rgb(131, 132, 138)"}} size={"2.5em"}/>
                        <SlSocialFacebook className='mx-md-3 mx-2' style={{color:"rgb(131, 132, 138)"}} size={"2em"}/>
                        <SlSocialLinkedin className='mx-md-2 mx-2' style={{color:"rgb(131, 132, 138)"}} size={"2em"}/>
                        <SlSocialInstagram className='mx-md-3 mx-2' style={{color:"rgb(131, 132, 138)"}} size={"2em"}/>
                        <FaGithub className='mx-md-3 mx-2' style={{color:"rgb(131, 132, 138)"}} size={"2em"}/>
                        <CiMail className='mx-md-2 mx-2' style={{color:"rgb(131, 132, 138)"}} size={"2.5em"}/>
                    </Col>

                    <Col xs={12} lg={3}></Col>
                </Row>
                <Container>
                    <Row className='text-light'>
                        <Col xs={12} md={4} className="text-center mt-5 my-lg-5 my-0"><p>@ Untitled. All rights reserved.</p></Col>
                        <Col xs={12} md={4} className="text-center my-1 my-lg-5"><p>Design: HTMLS UP</p></Col>
                        <Col xs={12} md={4} className="text-center my-1 my-lg-5"><p>Demo Images: Unsplash</p></Col>
                    </Row>
                </Container>
            </Container>
        </footer>

    </React.Fragment>
  )
}

export default footer