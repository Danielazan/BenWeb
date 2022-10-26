import React from 'react'
import {Link} from "react-router-dom"
import {Container,Nav,Navbar,NavDropdown,} from "react-bootstrap"
import Img from "Assets/Images/logo.jpg"

function Navigate() {
  return (
    <React.Fragment>
        <Navbar bg="transparent " className='pt-3' expand="lg">
            <Container className='bg-transparent'>
                <Link Navigate to="/" style={{textDecoration:"none"}} className="d-flex">
                
                  <img src={Img} style={{height:"3rem"}} alt="" />
                  <Navbar.Brand className='text-white ms-3'>CCRN</Navbar.Brand>
                </Link>
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

                    <Nav.Link className='text-white mx-1'><Link className='links'  style={{textDecoration:"none"}} Navigate  to="/Gallery">Gallery</Link></Nav.Link>

                    <Nav.Link className='text-white mx-1'><Link className='links' style={{textDecoration:"none"}} Navigate  to="">Login</Link></Nav.Link>

                    <Nav.Link className='text-white mx-1'><Link className='links' style={{textDecoration:"none"}} Navigate  to="/Signup">Signup</Link></Nav.Link>
                   
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </React.Fragment>
  )
}

export default Navigate