import React,{useEffect,useState} from 'react'
import {InView} from 'react-intersection-observer';
import {Container,Col,Card,Row} from "react-bootstrap"
import Pic from "Assets/Images/pic.jpg"
import axios from 'axios';

function Serviceteam() {

  const [array, setArray] = useState([])

  useEffect(() => {
    axios("https://bensite-api.onrender.com/api/ServiceTeams")
        .then(res=>{
            setArray(res.data)
        })
  })
  

  return (
    <React.Fragment>
         <InView triggerOnce={false} threshold={0.3}>
                {({ inView, ref, entry }) => (
                <section ref={ref} fluid className={`${inView ? "fade" : "dis"} service`} id='one'>
                    <Container>
                        <Row>
                            {
                                array.map(data=>{
                                    return(
                                        <Col xs={12} md={6} lg={3}>
                                           <center>
                                            <Card style={{ width: '100%' }} className="my-5 rounded-2 ser-card text-white border-0">
                                                    <Card.Img variant="top" src={Pic} />
                                                    <Card.Body className='rounded-2 bg-transparent'>
                                                        <Card.Title style={{textAlign:"center"}}>{data.Name}</Card.Title>
                                                        <Card.Text style={{textAlign:"center"}}>{data.desc}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                           </center>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </section>
                )}
        </InView>

    </React.Fragment>
  )
}

export default Serviceteam