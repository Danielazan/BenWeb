import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import Banner from './Banner'
import Icons from './Icons.jsx'


function Main() {
  return (
    <React.Fragment>
        <Container className=''>
            <Banner/>
            <Icons/>
        </Container>
    </React.Fragment>
  )
}

export default Main