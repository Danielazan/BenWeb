import React, {useState} from 'react'
import {Button,Offcanvas,ListGroup} from "react-bootstrap"
import { MdSettingsSuggest } from "react-icons/md"

function SideBar2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <React.Fragment>
      <Button variant="none" className="d-lg-none" onClick={handleShow}>
        <MdSettingsSuggest className="text-white" size={30}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton >
          <Offcanvas.Title  >Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body   style={{backgroundColor:"rgb(25, 26, 36)"}} >
        
          <ListGroup  className="SideList mt-4" variant='flush'> 
              <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action >New Information </ListGroup.Item>

              <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action >Add Service Member</ListGroup.Item>
              
              <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action >Add Images</ListGroup.Item>

              <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action >Add New Videos</ListGroup.Item>

              <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action >Publications</ListGroup.Item>

              <ListGroup.Item style={{backgroundColor:"rgb(25, 26, 36)"}} className="border-white my-2 py-3 p-0 ms-lg-3 list" action >Events</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  )
}

export default SideBar2