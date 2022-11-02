import axios from 'axios';
import React,{useEffect,} from 'react'
import {Container,Button} from "react-bootstrap"
import {InView} from 'react-intersection-observer';
import {useNewsContext} from "Hook/useNewsContext"



function Slide() {

    // const [array, setArray] = useState([])

    const {News,dispatch}= useNewsContext()

    useEffect(() => {
       const Getnews = async ()=>{

        const url= "https://bensite-api.onrender.com/api/news"

        const response = await axios.get(url)

        const json = await response.data

      
            dispatch({type:"SET NEWS", payload:json})

            console.log(dispatch)
        

        dispatch({type:"SET NEWS", payload:json})

        console.log(json)

       
       }
       Getnews()
       console.log(News)
      
    }, [dispatch])

  return (
    <React.Fragment>
        <section fluid className='img-bg-2' id='two'>
            <InView triggerOnce={true}  threshold={0.1}>
                {({ inView, ref, entry }) => (
                <div fluid ref={ref} className={`${inView ? "right" : "dis"} blue-div text-white`}>  
                        <h1 className='ms-3 my-4'>News Updates</h1>
                        { News &&
                        News.map(data =>{
                            return(
                                <div className='ms-3' key={data._id}>                               
                                    <h2 style={{color:'yellow'}}>{data.title}</h2>
                                     
                                    <p>{data.News}</p>

                                    <p>Released On : {data.createdAt}</p> 
                                    <hr  style={{backgroundColor:'yellow',border:"none",height:"3px"}}/>
                                </div>
                            )
                        })
                    }
                    
                </div>    
                )}
            </InView>
            
        </section>

        {/* Small Screen Blue */}

        <Container fluid className='blue-div-2 text-white'>
            <div>
                {   News &&
                    News.map(data =>{
                        return(
                            <div className='ms-3' key={data._id}>                               
                                <h2 style={{color:'yellow'}}>{data.title}</h2>
                                <p>{data.News}</p>
                                <p>Released On : {data.createdAt}</p>  
                                <hr  style={{backgroundColor:'yellow',border:"none",height:"3px"}}/>
                            </div>
                        )
                    })
                }
            </div>

        </Container>

         {/* Section 4  - Green Div*/}

        <section fluid className='img-bg-3'>
            <InView triggerOnce={false} threshold={0.1}>
                {({ inView, ref, entry }) => (
                <div ref={ref} fluid className={`${inView ? "left" : "dis"} green-div text-white`}>
   
                    <h2 className='pt-5 ms-5' style={{marginTop:"10vh"}}>Interdum amet non magna accumsan</h2>

                    <p className='mt-3 mx-5'>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
    
                    <p style={{color:"rgb(189, 194, 201)",lineHeight:"30px"}} className='mt-3 ms-5'>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>

                    <Button  className='mt-5 ms-5 px-5 py-3' variant="outline-light">Learn More</Button>
                </div>
                )}
            </InView>

        </section>

        {/* Small Screen Green*/}

        <Container fluid className='text-center green-div-2'>
            <h2 className='pt-0 text-white' style={{marginTop:"10vh"}}>Interdum amet non magna accumsan</h2>

            <p className='mt-3 text-white'>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>

            <p style={{color:"rgb(189, 194, 201)",lineHeight:"30px"}} className='mt-3 '>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>

            <Button  className='my-5 px-5 py-3' variant="outline-light">Learn More</Button>
        </Container>
    </React.Fragment>
  )
}

export default Slide;