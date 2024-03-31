import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../services/allAPI';



function Add({setuploadVideoResponse}) {

  const [uploadVideo,setUploadVideo] =useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const getYouTubeLink=(e)=> {
    const {value}=e.target
    if(value.includes("v=")){
      let vID=value.split("v=")[1].slice(0,11)
      console.log(`http://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`http://www.youtube.com/embed/${vID}`})

    }else{
      setUploadVideo({...uploadVideo,link:``})


    }
  }


  const handleUpload = async()=>{
    const {id,caption,url,link}= uploadVideo
    if(!id||!url||!link||!caption){
      alert("Please fill empty fields")
    }else{
      const result = await uploadVideoAPI(uploadVideo)
      if(result.status >= 200 && result.status < 300){
        handleClose()
        setUploadVideo({
          id:'',caption:'',url:'',link:''
        })
        setuploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }






  return (
    
    
      <>
      <div className='d-flex align-items-center '>
        <h5 className='mb-0'>Upload Video </h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-circle-plus"></i></button>
      </div>



      

      <Modal show={show} onHide={handleClose} 
      backdrop="static"
      keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Enter Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Id" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Video Title"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Title" onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>
        
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Image URL" onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
        
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Video URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video URL" onChange={getYouTubeLink}/>
      </FloatingLabel>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      </>
    
  )
}

export default Add