import React from 'react'
import Navbar from "Components/Navbar"
import Style from "Pages/GalleryComponent/Style/Style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Col,Row,Container} from "react-bootstrap"
import Main from './Main'
import Side from './Side'


function Gallery() {
  return (
    <React.Fragment>
      <Navbar/>

      <Container className='mt-5 text-white'>
        <Row>
          <Col xs={12} lg={1}></Col>

          <Col xs={12} lg={6}><Main/></Col>

          <Col xs={12} lg={5}><Side/></Col>

          <Col xs={12} lg={1}></Col>

        </Row>
      </Container>

    </React.Fragment>
  )
}

export default Gallery