import React from 'react'
import {InView} from 'react-intersection-observer';
import {Container,Col,Row} from "react-bootstrap"
import {BsChevronDown} from "react-icons/bs"



function info() {
  return (
    <React.Fragment>
        <InView triggerOnce={false} threshold={0.3}>
                {({ inView, ref, entry }) => (
                <section ref={ref} fluid className={`${inView ? "fade" : "dis"} text`} id='one'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={4} className="text-white my-4 my-lg-5 py-lg-5">
                                <header>
                                    <h2>Odio faucibus ipsum integer consequat</h2>
                                    <p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
                                </header>
                            </Col>

                            <Col xs={12} lg={4} className="text-white my-4  my-lg-5 py-lg-5">
                                <p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
                                Blandit orci porttitor semper. Arcu phasellus tortor enim mi
                                nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
                                augue varius tempus lobortis porttitor accumsan consequat
                                adipiscing lorem dolor.</p>
                            </Col>

                            <Col xs={12} lg={4} className="text-white my-4  my-lg-5 py-lg-5">
                                <p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
                                adipiscing adipiscing metus massa. Blandit orci porttitor semper.
                                Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
                                mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
                                ipsum dolor nullam.</p>
                            </Col>
                        </Row>
                    </Container>
                    <center><a href="#two"><BsChevronDown style={{color:"white"}} className="mb-5" size={"3em"}/></a></center>
                </section>
                )}
        </InView>

    </React.Fragment>
  )
}

export default info