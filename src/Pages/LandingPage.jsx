import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'





function LandingPage() {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col lg={5}>
          <h1 className='my-4'>Media player</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, distinctio! Voluptate, labore ea voluptas expedita voluptatum quisquam nemo perspiciatis placeat officia dolores, eveniet dolorem aliquid minima cupiditate sed enim corporis!</p>
          <Link to={'/home'} className='btn btn-danger'>GetStarted</Link>
        </Col>
        <Col lg={5}>
          <img className='img-fluid' src="https://gifyard.com/wp-content/uploads/2023/03/GIF-Player.gif" alt="" />
        </Col>
        <Col></Col>

        
      </Row>



      <div className='container text-center my-4'>
        <h3>Features</h3>
        <div className='cards d-flex align-items-center justify-content-between mt-4 w-100'>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/c9/09/35/c909353253ff5c9fc8a5d0a949ba7b51.gif" />
          <Card.Body>
           <Card.Title>Card Title</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/c9/09/35/c909353253ff5c9fc8a5d0a949ba7b51.gif" />
          <Card.Body>
           <Card.Title>Card Title</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/c9/09/35/c909353253ff5c9fc8a5d0a949ba7b51.gif" />
          <Card.Body>
           <Card.Title>Card Title</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
      </Card.Body>
    </Card>

 
        </div>

      </div>

      <div className="container border rounded p-5 d-flex align-items-center justify-content-center my-4">
        <div className="col-lg-5">
          <h3 className='text-warning mb-4'>Simple,Powerful & Fast</h3>
          <h6 className='mb-5'><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ducimus debitis unde, nisi illo fugit corporis in consequuntur ea recusandae velit quidem earum saepe nostrum? Maxime eius consequatur non nam.
          </h6>

          <h6 className='mb-5'><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ducimus debitis unde, nisi illo fugit corporis in consequuntur ea recusandae velit quidem earum saepe nostrum? Maxime eius consequatur non nam.
          </h6>


          <h6 className='mb-5'><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ducimus debitis unde, nisi illo fugit corporis in consequuntur ea recusandae velit quidem earum saepe nostrum? Maxime eius consequatur non nam.
          </h6>
        </div>
        <div className="col-lg-5 ms-5">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/eSJLmvULKx8?si=N5JzRLe5ItrKe9gp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
      






    </div>


  )
}

export default LandingPage