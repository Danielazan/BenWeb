import React,{useState} from 'react'
import {Button,Offcanvas,ListGroup} from "react-bootstrap"
import {Link} from "react-router-dom"
import {HiMenu,HiOutlineMail} from "react-icons/hi"
import {MdOutlineWidgets} from "react-icons/md"
import {RiPagesLine} from "react-icons/ri"
import {BsCalendarCheck} from "react-icons/bs"
import {FaWpforms} from "react-icons/fa"


function Sidebar() {

       
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
       <div className='menu'> <Button variant="none" onClick={toggleShow}><HiMenu size={"2em"} style={{color:'rgb(245, 106, 106)'}}/></Button></div>

        <Offcanvas style={{backgroundColor:"rgb(25, 26, 36)"}} className="ree" show={show} onHide={handleClose} {...props}>

          <Offcanvas.Header closeButton className='mt-5 me-4'>

            <Offcanvas.Title>
             
            </Offcanvas.Title>

          </Offcanvas.Header>

          <Offcanvas.Body>
            <h5 className='ms-3' style={{color:"rgb(146, 158, 164)"}}>Compoments</h5>
            <ListGroup variant='flush'>
              <ListGroup.Item className='bg-transparent text-white list'><Link Navigate to="/" style={{textDecoration:"none"}} className="d-flex side-link"><MdOutlineWidgets size={"1.5em"} className="me-3"/>Widgets</Link></ListGroup.Item>

              <ListGroup.Item className='bg-transparent text-white list'><Link Navigate to="/" style={{textDecoration:"none"}} className="d-flex side-link"><HiOutlineMail size={"1.5em"} className="me-3"/>Email</Link></ListGroup.Item>

              <ListGroup.Item className='bg-transparent text-white list'><Link Navigate to="/" style={{textDecoration:"none"}} className="d-flex side-link"><RiPagesLine size={"1.5em"} className="me-3"/>Pages</Link></ListGroup.Item>

              <ListGroup.Item className='bg-transparent text-white list'><Link Navigate to="/" style={{textDecoration:"none"}} className="d-flex side-link"><BsCalendarCheck size={"1.5em"} className="me-3"/>Calendar</Link></ListGroup.Item>

              <ListGroup.Item className='bg-transparent text-white list'><Link Navigate to="/" style={{textDecoration:"none"}} className="d-flex side-link"><FaWpforms size={"1.5em"} className="me-3"/>Forms</Link></ListGroup.Item>
             
            </ListGroup>
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

export default Sidebar