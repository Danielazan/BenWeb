import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Card,Button} from "react-bootstrap"
import bear from "../Images/pic03.jpg"

function Cards() {
  return (
    <React.Fragment>
        <h3 className='erat py-3 pe-4'>Ipsum sed dolor</h3>

        <Row>
            <Col xs={12} lg={6} className='mt-5'>
              <Card className='bg-transparent border-0' style={{ width: '100%'}}>
                <Card.Img variant="top" className='rounded-2' src={bear}/>

                <Card.Body className='bg-transparent px-0'>
                  <h5>Interdum aenean</h5>
                  <Card.Text className='txt'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant='outline-danger' className='px-4 rounded-1 '>More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} lg={6} className='mt-5'>
              <Card className='bg-transparent border-0' style={{ width: '100%'}}>
                  <Card.Img variant="top" className='rounded-2' src={bear} />

                  <Card.Body className='bg-transparent px-0'>
                    <h5>Interdum aenean</h5>
                    <Card.Text className='txt'>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant='outline-danger' className='px-4 rounded-1 '>More</Button>
                  </Card.Body>
              </Card>
            </Col>

            <Col xs={12} lg={6} className='mt-5'>
              <Card className='bg-transparent border-0' style={{ width: '100%'}}>
                <Card.Img variant="top" className='rounded-2' src={bear}/>

                <Card.Body className='bg-transparent px-0'>
                  <h5>Interdum aenean</h5>
                  <Card.Text className='txt'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant='outline-danger' className='px-4 rounded-1 '>More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} lg={6} className='mt-5'>
              <Card className='bg-transparent border-0' style={{ width: '100%'}}>
                  <Card.Img variant="top" className='rounded-2' src={bear} />

                  <Card.Body className='bg-transparent px-0'>
                    <h5>Interdum aenean</h5>
                    <Card.Text className='txt'>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant='outline-danger' className='px-4 rounded-1 '>More</Button>
                  </Card.Body>
              </Card>
            </Col>

            <Col xs={12} lg={6} className='mt-5'>
              <Card className='bg-transparent border-0' style={{ width: '100%'}}>
                <Card.Img variant="top" className='rounded-2' src={bear}/>

                <Card.Body className='bg-transparent px-0'>
                  <h5>Interdum aenean</h5>
                  <Card.Text className='txt'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant='outline-danger' className='px-4 rounded-1 '>More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} lg={6} className='mt-5'>
              <Card className='bg-transparent border-0' style={{ width: '100%'}}>
                  <Card.Img variant="top" className='rounded-2' src={bear} />

                  <Card.Body className='bg-transparent px-0'>
                    <h5>Interdum aenean</h5>
                    <Card.Text className='txt'>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant='outline-danger' className='px-4 rounded-1 '>More</Button>
                  </Card.Body>
              </Card>
            </Col>
        </Row>

    </React.Fragment>
  )
}

export default Cards