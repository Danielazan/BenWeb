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
                            <Col xs={12} className='d-flex my-5 text-white'>
                                <Row>
                                    <Col xs={12} lg={2}>
                                        <h2 className='about my-lg-5 my-2'>ABOUT US</h2>
                                    </Col>
                                    <Col xs={12} lg={10}>
                                        <p style={{lineHeight:"30px"}}>
                                        As a pious movement of the Holy Spirit within the Catholic Church, CCRN achieves her aim and object The Catholic Charismatic Renewal started in February 1967 in Duquesne University, Pennsylvania, USA. Like a grain of mustard seed, it has spread all over the world with a membership of about 115 million Catholics. It was birthed by the Holy Spirit and its growth has been powered by the Holy Spirit.The Catholic Charismatic Renewal of Nigeria (CCRN) is a lay organization which started in Nigeria in 1967. Within her 50 years of existence, she has spread to virtually all the parishes in the nine Archdioceses, forty-four Dioceses, and two Vicariates of the Nigerian Church. Using our most recent information, she has about 2,100 Prayer Groups (PG) and Coordinators, four hundred and forty-four executives of the Diocesan Service Team (DST), seventy two leaders of the Provincial Service ...
                                        </p>
                                    </Col>
                                </Row>
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