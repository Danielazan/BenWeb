import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Card,Dropdown,ListGroup,Offcanvas,Button,InputGroup,Form} from "react-bootstrap";
import {HiMenu} from "react-icons/hi"
import bear from "../Images/pic07.jpg"
import mount from "../Images/pic08.jpg"
import laptop from "../Images/pic09.jpg"
import {HiMail} from "react-icons/hi"
import {FaPhone,FaHome} from "react-icons/fa"


function Offc() {

    
  const options = [
    
    {
      name: 'Enable body scrolling',
      scroll: true,
      backdrop: false,
    },
    
  ];

  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
  
    return (
      <>
       <div className='menu'> <Button variant="none" onClick={toggleShow} className="me-2"><HiMenu size={"2em"} style={{color:'rgb(245, 106, 106)'}}/></Button></div>

        <Offcanvas style={{backgroundColor:"rgb(245, 246, 247)"}} className="ree" show={show} onHide={handleClose} {...props}>

          <Offcanvas.Header closeButton>

            <Offcanvas.Title>
              <InputGroup className="mb-3">

                <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
                <Button variant="outline-secondary" id="button-addon2">Search</Button>

              </InputGroup>
            </Offcanvas.Title>

          </Offcanvas.Header>

          <Offcanvas.Body>
            <h5 className='off-h3 py-2'>Menu</h5>

            <ListGroup variant="flush" className='bg-transparent'>

              <ListGroup.Item className='bg-transparent pb-3'><a className='link' href="">Homepage</a></ListGroup.Item>

              <ListGroup.Item className='bg-transparent pb-3'><a className='link' href="">Generic</a></ListGroup.Item>

              <ListGroup.Item className='bg-transparent pb-3'><a className='link' href="">Elements</a></ListGroup.Item>

              <ListGroup.Item className='bg-transparent pb-3'><a className='link' href="">Homepage</a></ListGroup.Item>

              <ListGroup.Item className='bg-transparent'>
              <Dropdown  style={{marginLeft:'-8%'}}>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{color:'rgb(90, 91, 95)'}}>Submenu</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </ListGroup.Item>

              <ListGroup.Item className='bg-transparent pb-3'><a className='link' href="">Etiam</a></ListGroup.Item>

              <ListGroup.Item className='bg-transparent pb-3'><a className='link' href="">Adipscing</a></ListGroup.Item>

              <ListGroup.Item className='bg-transparent'>
              <Dropdown  style={{marginLeft:'-8%'}}>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{color:'rgb(90, 91, 95)'}}>Another Submenu</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </ListGroup.Item>

              <ListGroup.Item className='bg-transparent pb-3'><a className='link' href="">Maximus</a></ListGroup.Item>

              <ListGroup.Item className='bg-transparent pb-3'><a className='link' href="">Sapa</a></ListGroup.Item>

              <ListGroup.Item className='bg-transparent pb-3'><a className='link' href="">Amet</a></ListGroup.Item>

            </ListGroup>

            <hr className='my-4' style={{height:"2.5px",border:"none",backgroundColor:" rgb(64, 64, 64)"}}/>
            <h5 className='off-h py-2'>Ante-Iterdum</h5>

            <Card className='mt-5 ms-lg-2 ms-3 bg-transparent border-0' style={{ width: '20rem'}}>
              <Card.Img variant="top" className='rounded-2' src={bear} />

              <Card.Body className='bg-transparent'>

                <Card.Text className='txt'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

            <hr className='' style={{height:"1.2px",border:"none",backgroundColor:" rgb(64, 64, 64)",width:"85%",marginLeft:"5%"}}/>

            <Card className='mt-5 ms-lg-2 ms-3 bg-transparent border-0' style={{ width: '20rem'}}>
              <Card.Img variant="top" className='rounded-2' src={mount} />

              <Card.Body className='bg-transparent'>

                <Card.Text className='txt'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

            <hr className='' style={{height:"1.2px",border:"none",backgroundColor:" rgb(64, 64, 64)",width:"85%",marginLeft:"5%"}}/>

            <Card className='mt-5 ms-lg-2 ms-3 bg-transparent border-0' style={{ width: '20rem'}}>
              <Card.Img variant="top" className='rounded-2' src={laptop} />

              <Card.Body className='bg-transparent'>

                <Card.Text className='txt'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

            <Button variant='outline-danger' className='px-4 ms-2'>More</Button>

            <hr className='' style={{height:"1.2px",border:"none",backgroundColor:" rgb(64, 64, 64)",width:"85%",marginLeft:"5%"}}/>

            <h5 className='off-h py-2 my-4 ms-2'>Get In Touch</h5>

            <p className='ms-2 txt'>Sed varius enim lorem ullamcorper dolore
              aliquam aenean ornare velit lacus, ac varius
              enim lorem ullamcorper dolore. Proin sed
              aliquam facilisis ante interdum. Sed nulla
              amet lorem feugiat tempus aliquam.
            </p>

            <div className="d-flex ms-2 off-can-nav my-3">
              <HiMail size={"1.7em"} style={{color:" rgb(245, 106, 106)"}}/>
              <p className='txt ms-3'>information@untitled.tld</p>
            </div>

            
            <div className="d-flex ms-2 off-can-nav my-3">
              <FaPhone size={"1.5em"} style={{color:" rgb(245, 106, 106)"}}/>
              <p className='txt ms-3'>(000) 000-0000</p>
            </div>

            <div className="d-flex ms-2 off-can-nav my-3">
              <FaHome size={"2.2em"} style={{color:" rgb(245, 106, 106)"}}/>
              <p className='txt ms-3'>1234 Somewhere Road #8254 Nashville, TN 00000-0000</p>
            </div>

            <p className='txt mt-5 pt-1 ms-2' style={{fontSize:"12px"}}>O Untitled. All rights reserved. Demo Images:Unsplash. Design: HTMLS UP.</p>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (
    <React.Fragment>
         <main fluid style={{height:"5vh"}}>
            {options.map((props, idx) => (
            <OffCanvasExample key={idx} {...props} />))}
        </main>
    </React.Fragment>
  )
}

export default Offc