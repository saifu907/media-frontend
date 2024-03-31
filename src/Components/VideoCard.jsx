import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryAPI, deletevideoAPI } from '../services/allAPI';


function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true)
    
    const {caption,link}=video
    let today =new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log()
    let videoHistory = {caption,link,timeStamp}
    await addVideoHistoryAPI(videoHistory)
  };

  const removeVideo =async (id) => {
    await deletevideoAPI(id)
    setDeleteVideoResponse(true)

  }

  const dragStarted=(e,id) => {
    console.log("dragged"+id)
    e.dataTransfer.setData("videoId",id)
  }
  

  return (
    <>
    
    <Card style={{ width: '18rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img onClick={handleShow} height={'180px'} variant="top" src={video?.url}/>
      <Card.Body className='d-flex align-items-center justify-content-between '>
        <Card.Title className='m-0'>{video?.caption}</Card.Title>

        {insideCategory?null:<Button onClick={()=>removeVideo(video?.id)} variant="primary"><i class="fa-regular fa-trash-can" style={{color: "#ff0000"}}></i></Button>}
      </Card.Body>
    </Card>



   

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>

        <iframe className='w-100' height="446" src={`${video?.link}?autoplay=1`} title={video?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Modal.Body>
        
      </Modal>




    </>
  )
}

export default VideoCard