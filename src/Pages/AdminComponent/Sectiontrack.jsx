import React from 'react'
import {Form,Row,Col } from 'react-bootstrap'

function Sectiontrack() {
  return (
    <React.Fragment>
       <section className='widget'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control 
              type="email" placeholder="name@example.com"
              className='format'
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="text-white">Example textarea</Form.Label>
              <Form.Control 
              as="textarea" rows={3} 
              className='format'
              />
            </Form.Group>
          </Form>
       </section>
    </React.Fragment>
  )
}

export default Sectiontrack

