import React from 'react'
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Nava from './Nav';
import Info from './Info';
import Slide from "./Slide-sec"
import Icon from './Icon';
import Footer from './Footer';


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