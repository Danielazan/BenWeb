import React from 'react'
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Nava from './Nav';
import Info from './Info';
import Slide from "./Slide-sec"
import Icon from './Icon';
import Footer from './Footer';
import Style from "Pages/HomeComponent/Style/Style.css"
import Serviceteam from '../../Components/Serviceteam';


function Home() {
  return (
    <React.Fragment>

        <Nava/>

        <Container fluid className='img-bg-1'>

        </Container>

        <Info/>

        <Slide/>

        <Serviceteam/>

        <Icon/>

       <Footer/>

    </React.Fragment>
  )
}

export default Home