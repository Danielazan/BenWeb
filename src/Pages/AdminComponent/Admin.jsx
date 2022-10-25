import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col} from "react-bootstrap"
import Offc from "Pages/AdminComponent/Offcanvas.jsx"
import Main from 'Pages/AdminComponent/Main.jsx'



function Home() {

  return (
    <React.Fragment>
      <Container fluid style={{minHeight:"100vh",backgroundColor:"white"}}>
        <Row>
          <Col xs={0} lg={3}>
            <Offc/>
          </Col>

          <Col xs={12} lg={9}>
            <Main/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Home