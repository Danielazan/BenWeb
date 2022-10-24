import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import Banner from './Banner'
import Icons from './Icons.jsx'
import Card from "./Card"


function Main() {
  return (
    <React.Fragment>
        <Container className=''>
            <Banner/>
            <Icons/>
            <Card/>
        </Container>
    </React.Fragment>
  )
}

export default Main