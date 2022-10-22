import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Row,Col,Container,Card} from "react-bootstrap"

function Icons() {
  return (
    <React.Fragment>
        <h3 className='erat py-4'>Erat lacinia</h3>

        <Row>
            <Col xs={12} lg={6}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus in exercitationem soluta non ea deleniti, porro obcaecati fugiat atque enim.</p>
            </Col>

            <Col xs={12} lg={6}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus in exercitationem soluta non ea deleniti, porro obcaecati fugiat atque enim.</p>
            </Col>

        </Row>
    </React.Fragment>
  )
}

export default Icons