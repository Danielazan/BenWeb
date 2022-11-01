import React from 'react'
import Navbar from 'Components/Navbar'
import { Container,Row,Col } from 'react-bootstrap'
import Sidebar from './SideBar2'
import Main from './Main'
import Style from "Pages/Admin2Component/Style/Style.css"
import Sectiontrack from './Sectiontrack'

function Admin() {
  return (
    <React.Fragment>
        <Navbar/>

        <Container fluid className='mt-3'>
            <Row>
                <Col xs={12} lg={3}><Sidebar/></Col>

                <Col xs={12} lg={6}><Main/></Col>

                <Col className='d-lg-block d-none widget-p' xs={12} lg={3}>

                  <Sectiontrack/>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}

export default Admin

