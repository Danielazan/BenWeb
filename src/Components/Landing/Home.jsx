import React from 'react'
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Nava from './nav';
import Info from './info';
import Slide from "./slide-sec"
import Icon from './icon';
import Footer from './footer';


function Home() {
  return (
    <React.Fragment>

        <Nava/>

        <Container fluid className='img-bg-1'>

        </Container>

        <Info/>

        <Slide/>

        <Icon/>

       <Footer/>

    </React.Fragment>
  )
}

export default Home