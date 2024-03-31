import React, { useEffect, useState } from 'react'
import { Col, FloatingLabel,Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, getAVideoAPI, getAllCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category(dropResponse) {
  const [allCategories,setAllCategories] =useState([])
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() =>{
    getAllCategories()
  },[dropResponse])

  const getAllCategories = async ()=>{
    const {data}=await getAllCategoryAPI()
    setAllCategories(data)
  }

  const handleAdd=async() =>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
        getAllCategories()

      }else{
        alert(result.message)
      }
    }

  }


  const removecategory = async (id)=>{
    await removeCategoryAPI(id)
    getAllCategories()

  }
  const dragOver=(e)=>{
    console.log('started')
    e.preventDefault()
  }

  const videoDrop=async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData('videoId')
    console.log('videoId: '+videoId+'droped'+categoryId)
    const {data}= await getAVideoAPI(videoId)
    console.log(data);
    const selectedCategory =allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getAllCategories()
  }


  const videoDragStarted=(e,videoId,categoryId)=>{
    let datashare ={videoId,categoryId}
    e.dataTransfer.setData('data',JSON.stringify(datashare))
  }
  return (
    <>
    <div className="d-grid">

    <Button  variant="primary" onClick={handleShow}>
      Add Category
    </Button>
    </div>
    {
      allCategories?.length>0?allCategories.map(category=>(
      <div className='border rounded p-3 mt-3' onDragOver={e=>dragOver(e)} droppable="true" onDrop={e=>videoDrop(e,category?.id)}>
        <div className="d-flex justify-content-between align-items-center">
          <h6>{category?.categoryName}</h6>
          <Button variant="primary" onClick={()=>removecategory(category?.id)}><i class="fa-regular fa-trash-can" style={{color: "#ff0000"}}></i></Button>
          
        </div>

      <Row>
        {
          category?.allVideos?.length>0?category?.allVideos.map(card=>(
            <Col sm={12} draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
              <VideoCard video={card} insideCategory={true}/>

            </Col>
          )):null
        }
      </Row>





      </div>

      )): <p> No Categories added yet....</p>
    }

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>Add</Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Category