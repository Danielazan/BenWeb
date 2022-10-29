import React,{useState} from 'react'
import {Button,Offcanvas} from "react-bootstrap"
import {HiMenu} from "react-icons/hi"


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
       <div className='menu'> <Button variant="none" onClick={toggleShow} className="me-2"><HiMenu size={"2em"} style={{color:'rgb(245, 106, 106)'}}/></Button></div>

        <Offcanvas style={{backgroundColor:"rgb(25, 26, 36)"}} className="ree" show={show} onHide={handleClose} {...props}>

          <Offcanvas.Header closeButton>

            <Offcanvas.Title>
             
            </Offcanvas.Title>

          </Offcanvas.Header>

          <Offcanvas.Body>
            <h5 className='off-h3 py-2'>Menu</h5>

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