import React from 'react'
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Nava from '../Landing/nav';
import Info from '../Landing/info';
import Slide from "../Landing/slide-sec"
import Icon from '../Landing/icon';
import Footer from '../Landing/footer';


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