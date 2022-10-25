import React from 'react'
import {Container,Col,Row,Nav,Navbar,NavDropdown,Card} from "react-bootstrap"
import {InView} from 'react-intersection-observer';
import {Link} from "react-router-dom"
import {BsChevronDown} from "react-icons/bs"
import Img from "Assets/Images/logo.jpg"


function nav() {
  return (
    <React.Fragment>
            <Container fluid className='banner pt-3'>
            <Navbar bg="transparent " expand="lg">
            <Container className='bg-transparent'>
                <div className="d-flex">
                <img src={Img} style={{height:"3rem"}} alt="" />
                <Navbar.Brand className='text-white ms-3' href="#home">CCRN</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"rgb(228, 76, 101)"}} />
                <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto mar">
                    <Nav.Link className='text-white mx-1' ><Link className='links' style={{textDecoration:"none"}} Navigate  to="/Home">Home</Link></Nav.Link>

                    <NavDropdown className="mx-1 text-white" title={"Layouts"} id="basic-nav-dropdown">
                        <NavDropdown.Item  href="#action/3.1"><Link style={{color:"black",textDecoration:"none"}} Navigate  to="">Action</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2"><Link style={{color:"black",textDecoration:"none"}} Navigate  to="">Another Action</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3"><Link style={{color:"black",textDecoration:"none"}} Navigate  to="">Something</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"><Link style={{color:"black",textDecoration:"none"}} Navigate  to="">Some Action</Link></NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className='text-white mx-1'><Link className='links'  style={{textDecoration:"none"}} Navigate  to="">Gallery</Link></Nav.Link>

                    <Nav.Link className='text-white mx-1'><Link className='links' style={{textDecoration:"none"}} Navigate  to="">Login</Link></Nav.Link>

                    <Nav.Link className='text-white mx-1'><Link className='links' style={{textDecoration:"none"}} Navigate  to="/Signup">Signup</Link></Nav.Link>
                   
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <InView triggerOnce={false} threshold={0.5}>
                {({ inView, ref, entry }) => (
                    <Container ref={ref} className={`${inView ? "fadebottom" : "dis"}  text-white  mt-5 con`}>
                        <Row className='op'>
                                <Col xs={12} lg={6} className="text-center">
                                    
                                    <h1 className='mt-5 ms-lg-5'>Catholic Charismatic Renewal Of Nigeria <span style={{color:'yellow'}}>Nkwo-Nike Deanery Enugu</span></h1>

                                    <p className='my-4 ms-lg-5' style={{fontSize:"17px"}}>And there are no hoverboards or flying cars. <br />
                                    Just apps. Lots of mother flipping apps.</p>
                                </Col>

                                <Col xs={12} lg={6} className="text-center">
                                    <center>
                                    <Card style={{ width: '18rem'}} className="rounded-circle bg-transparent me-lg-5 top">
                                        <Card.Img className="rounded-circle" variant="top" src={Img} />
                                    </Card>
                                    </center>
                                </Col>
                        </Row>
                    </Container>
                )}
            </InView>

            <center><a href="#one"><BsChevronDown style={{color:"white"}} className="mt-5" size={"3em"}/></a></center>
        </Container>

    </React.Fragment>
  )
}

export default nav