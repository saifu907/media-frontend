import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'



function WatchHistory() {
  const [history,setHistory] =useState([])

  useEffect(() =>{
    getHistory()
  },[])

  const getHistory =async ()=>{
    const result =await getHistoryAPI()
    if(result.status === 200){
      setHistory(result.data)
    }else{
      console.log("api error")
      console.log(result.message)
    }
  }

  const removeHistory= async (id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }
  
  return (
    <>
    <div className="container d-flex justify-content-between align-items-center">
      <h2>Watch Histroy</h2>
      <Link to ={'/home'}><i class="fa-solid fa-house ms-2"></i>Back to Home</Link>

    </div>

    <table className='table mb-5 container shadow w-100'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Strap</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {
          history?.length>0?history?.map((video,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
            <td>{video?.timeStamp}</td>
            <td><Button className='btn' onClick={()=>removeHistory(video?.id)}><i class="fa-regular fa-trash-can" style={{color: "#ff0000"}}></i></Button></td>
            </tr>


          )):<p> History is empty</p>
          }
         
      </tbody>

    </table>

    </>
  )
}

export default WatchHistory