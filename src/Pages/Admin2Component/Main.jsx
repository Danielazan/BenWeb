import React from 'react'
import {Card,Row,Col,ListGroup} from "react-bootstrap";
import {FaApple} from "react-icons/fa"
import {MdKeyboardArrowRight} from "react-icons/md"
import pic13 from "Assets/Images/pic12.jpg"


function Main() {
  return (
    <React.Fragment>
      <div className='text-white'>
        <h2 className='main-h2 pb-3'>Widgets</h2>

       <section id='cardwidget'>
        <h4>Card Widget</h4>

            <p>Card widget is created by using existing Bootstrap. card component with . card-img, . card-img-overlay and d-flex utilities.</p>
            <div className='main-border p-3' >
                <Card class="border-0 rounded-0 bg-transparent" style={{width:"20rem"}}>
                    <Card.Img variant="top" src={pic13} className="rounded-0 side-img" />

                </Card>
            </div>
       </section>

       <section id='listwidget' className='mt-5'>
        <h4>List Widget</h4>

            <p>List widget is created bg using existing Bootstrap . list-group component with . d -flex and hud utilities css classes.</p>
            <div className='main-border p-3' >
                <Row>
                    <Col xs={12} lg={6}>
                        <p className='txt'>WITH ICON</p>
                        <ListGroup>
                            <ListGroup.Item className='bg-transparent border-secondary d-flex text-white align-items-center py-0'><FaApple className='icon' size={"1.5em"}/> <p className='ms-3 pt-3'>Apps Store</p></ListGroup.Item>
                            <ListGroup.Item className='bg-transparent border-secondary d-flex text-white align-items-center py-0'><FaApple className='icon' style={{backgroundColor:'rgb(254, 175, 54)'}} size={"1.5em"}/> <p className='ms-3 pt-3'>Apps Store</p></ListGroup.Item>                    </ListGroup>
                    </Col>

                    <Col xs={12} lg={6}>
                        <p className='txt mt-4 mt-lg-0'>WITH SETTINGS</p>
                        <ListGroup>
                            <ListGroup.Item className='bg-transparent border-secondary d-flex text-white py-0'><p>Server auto backup<br /><span style={{color:'rgb(146, 158, 164)'}}>last backup since yesterday</span></p></ListGroup.Item>
                            <ListGroup.Item className='bg-transparent border-secondary d-flex text-white py-0'><p>Analytics enabled<br /><span style={{color:'rgb(146, 158, 164)'}}>3,392 data collected</span></p></ListGroup.Item>
                            <a href="#" style={{textDecoration:"none"}}><ListGroup.Item  className='bg-transparent border-secondary d-flex text-white justify-content-between'>Link with arrow <MdKeyboardArrowRight size={"1.5em"}/></ListGroup.Item></a>
                            <ListGroup.Item  className='bg-transparent border-secondary d-flex text-white justify-content-between'><a href="" style={{textDecoration:"none",color:"white" ,width:"100%"}} className=' d-flex justify-content-between' >Link with arrow <MdKeyboardArrowRight size={"1.5em"}/></a></ListGroup.Item>
                        </ListGroup>                        
                    </Col>

                    <Col xs={12} lg={6} className="main-col">
                        <p className='txt mt-4 mt-lg-0'>WITH IMAGE</p>
                        <ListGroup>
                            <ListGroup.Item className='bg-transparent border-secondary d-flex text-white align-items-center py-0'><FaApple className='icon' size={"1.5em"}/> <p className='ms-3 pt-3'>Iasiah Hughes</p></ListGroup.Item>
                            <ListGroup.Item className='bg-transparent border-secondary d-flex text-white align-items-center py-0'><FaApple className='icon' style={{backgroundColor:'rgb(254, 175, 54)'}} size={"1.5em"}/> <p className='ms-3 pt-3'>Ryan Turner</p></ListGroup.Item>                    </ListGroup>
                    </Col>
                </Row>
            </div>
       </section>

       <section id='statswidget' className='mt-5'>
        <h4>Stats Widget</h4>

            <p>States widget is created by using Bootstrap . card component with . d-flex and background-color utilities.</p>
            <div className='main-border p-3' >
            <Card class="border-0 rounded-0 bg-transparent" style={{width:"70%"}}>
               <div className='card-body p-4 '>
                    <h5>Total Visitors + Page Views</h5>
                    <h3>22,930</h3>
                    <h5>Today, 11:25AM</h5>
               </div>
            </Card>
            </div>
       </section>
      </div>
    </React.Fragment>
  )
}

export default Main

