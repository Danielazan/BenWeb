import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Row,Col,Container} from "react-bootstrap"
import {SlDiamond} from "react-icons/sl"
import {FaPaperPlane,FaRocket,FaSignal} from "react-icons/fa"

function Icons() {
  return (
    <React.Fragment>
        <h3 className='erat py-3 pe-4'>Erat lacinia</h3>

        <Row>
            <Col xs={12} lg={6}  className='mt-5'>
                <Row>
                  <Col xs={12} lg={4}>
                    <Container className='icon-div'>
                      <SlDiamond size={"3em"} className="mt-0 mt-lg-5 ms-0 ms-lg-5 mb-3 gem"/>
                    </Container>
                  </Col>

                  <Col xs={12} lg={8}>
                      <h3>Portitor ullamcorper</h3>
                      <p>
                      Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                      </p>
                  </Col>
                </Row>
            </Col>

            <Col xs={12} lg={6}  className='mt-5'>
              <Row>
                  <Col xs={12} lg={4}>
                    <Container className='icon-div'>
                      <FaPaperPlane size={"3em"} className="mt-0 mt-lg-5 ms-0 ms-lg-5 mb-3 gem"/>
                    </Container>
                  </Col>

                  <Col xs={12} lg={8}>
                      <h3>Portitor ullamcorper</h3>
                      <p>
                      Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                      </p>
                  </Col>
                </Row>
            </Col>

            <Col xs={12} lg={6}  className='mt-5'>
                <Row>
                  <Col xs={12} lg={4}>
                    <Container className='icon-div'>
                      <FaRocket size={"3em"} className="mt-0 mt-lg-5 ms-0 ms-lg-5 mb-3 gem"/>
                    </Container>
                  </Col>

                  <Col xs={12} lg={8}>
                      <h3>Portitor ullamcorper</h3>
                      <p>
                      Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                      </p>
                  </Col>
                </Row>
            </Col>

            <Col xs={12} lg={6} className='mt-5'>
              <Row>
                  <Col xs={12} lg={4}>
                    <Container className='icon-div'>
                      <FaSignal size={"3em"} className="mt-0 mt-lg-5 ms-0 ms-lg-5 mb-3 gem"/>
                    </Container>
                  </Col>

                  <Col xs={12} lg={8}>
                      <h3>Portitor ullamcorper</h3>
                      <p>
                      Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                      </p>
                  </Col>
                </Row>
            </Col>

        </Row>

        <hr className='hl'/>

    </React.Fragment>
  )
}

export default Icons