import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'




function Home() {
  const [dropResponse,setDropResponse]=useState({})
  const [uploadVideoResponse,setuploadVideoResponse]=useState([]) 
  return (
    <>
    <div className="container d-flex justify-content-between">
      <div className="add-videos">
        <Add setuploadVideoResponse={setuploadVideoResponse}/>
      </div>
      <Link to={'/watchhistory'}>
        Watch history <i class="fa-solid fa-clock-rotate-left"></i>
      </Link>
    </div>


    <div className="container-fluid row">
      <div className="all-videos col-lg-9">
        <h2>All videos</h2>
        <View setDropResponse={setDropResponse} uploadVideoResponse={uploadVideoResponse}/>
      </div>
      <div className="category col-lg-3">
        <Category dropResponse={dropResponse}/>
      </div>
    </div>
    </>
    
  )
}

export default Home