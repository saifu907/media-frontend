import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Headers() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt_WJ3exQTuvVhQMg72npPq8gtCfuOfS5-Q&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <i class="fa-solid fa-play"></i>
            mediaapp
            </Link>

          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Headers