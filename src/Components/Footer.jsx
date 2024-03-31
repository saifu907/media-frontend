import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
  

function Footer() {
  return (
    <div>
         <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Landing page
                  </Link>
                </li>
                <li>
                  <Link to={'/home'} style={{color:'white'}}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={'/watchhistory'} style={{color:'white'}}>
                    Watchhistory
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 4
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 4
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 4
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 2
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 3
                  </Link>
                </li>
                <li>
                  <Link to={'/'} style={{color:'white'}}>
                    Link 4
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <Link to='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </Link>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer