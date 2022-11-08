import React,{useEffect,useState} from 'react'
import {Card,Form} from "react-bootstrap";
import axios from 'axios';

function Image() {

    const [imgap, setImgap] = useState([])

    useEffect(() => {
        axios("https://bensite-api.onrender.com/api/bible")
            .then(res=>{
                setImgap(res.data)

                console.log(res.data)
            })
    },[])


    const [names, setNames] = useState("")

    const [descs, setDescs] = useState("")

    const [file, setFile] = useState(null)

    // function formN(e){
    //     setNames(e.target.value)
    // }

    // function formD(e){
    //     setDescs(e.target.value)
    // }

    // function formI(e){
    //     setFiles(e.target.files[0].name) 
    // }

    // async function post(e) {

    //     e.preventDefault()

    //     const info={
    //         name: names,
    //         desc: descs,
    //         bible:files
    //     }

    //     const res= await axios.post("https://bensite-api.onrender.com/api/bible",JSON.stringify(info),{
    //         headers:{
    //             "ContentType": "application/json",
    //         }
    //     })

    //     console.log(res.data)
        
    // }

    const post = async (e)=>{

        e.preventDefault()
            const info = {
                name:names,
                desc:descs,
                bible:file
            }

            const res= await axios({
                method:"post",
                url:"https://bensite-api.onrender.com/api/bible",
                data:info,
                headers:{
                    "Content-Type":"application/json"
                }
            })

            const json = res.data
            console.log(res)

    }

  return (
    <React.Fragment>
        <section className='mt-4'>
            <h4>Bible Widgets</h4>
            <p>Map Through Bible API</p>

            <div>
            <h3>Form </h3>
                <form action="">
                    <Form.Control type="text" value={names} onChange={(e)=>setNames(e.target.value)} placeholder="Name"/>
                    <br />
                    <Form.Control type="text" value={descs} onChange={(e)=>setDescs(e.target.value)} placeholder="Desc"/>
                    <br />
                    <input type="file" onChange={(e)=>{setFile(e.target.files[0]); console.log(e.target.files[0])}} accept='image/*' name="file" id="" />
                    <br /> <br />
                    <input type="submit" onClick={post} className="px-3 py-2" value="Submit" /> <br /><br />

                </form>
            </div>
            <div className='main-border main p-lg-3 p-0' >
                {
                    imgap.map(image=>{
                
                        return(
                            <center key={image._id}>
                                <Card class="rounded-0 my-3 p-4 text-start" style={{width:"100%",backgroundColor:"rgb(25, 26, 36)"}}>

                                    <img src={`https://bensite-api.onrender.com/api/bible/${image.filename}`} alt="ghgfhsdf" />

                                    <Card.Body className='bg-transparent text-start px-0'>

                                    <p>{image.metadata.desc}</p>

                                </Card.Body>
                                </Card>
                            </center>
                        )
                    })
                }
            </div>
        </section>
    </React.Fragment>
  )
}

export default Image