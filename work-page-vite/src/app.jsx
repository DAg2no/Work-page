import React, { useEffect } from 'react';
import Typed from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import image from './data/image.png';
import './app.css';
import inkendin from './data/In-Blue-34.png'

 

const Header = () => {
  useEffect(() => {
    const header = document.getElementById('header');
    header.style.animation = 'slide-in 1s ease-in-out';

    const title = document.getElementById('title');
    title.style.animation = 'bounce 2s infinite';
    title.style.animationDuration = '2s';
  }, []);

  return (
    <>
      <div className='header-container' id='header'>
      <h5>Daniel Uribe</h5>
      <Container className='p-5'>
        
        <Row className='d-flex'>
          <Col xs={7} md={6} lg={7} className='order-2 order-lg-1'>
            <div className='title-container'>
              <div>
                <h1 className='title' id='title'>
                  Hi, I am Daniel
                </h1>
              </div>
            </div>
            <span>
              <div className='animated-typing'>
                <Typed
                  strings={[
                    'Beginner in developer',
                    'Fgrkergkm',
                    'Rghfmn',
                    "I'm in developer"
                  ]}
                  typeSpeed={40}
                  backSpeed={30}
                  loop
                />
              </div>
            </span>
            <div className='d-flex justify-content-center mt-3'>
              <a href="https://www.linkedin.com/in/daniel-uribe-pulgar-93905a273/">
                <button className='btn btn-light mx-2'>
        <img src={inkendin} alt='button1' height='25'width='25'/>
      </button>
              </a>
      
      <button className='btn btn-light mx-2'>
        <img src='https://example.com/image2.png' alt='button2' height='30'width='20'/>
      </button>
      <button className='btn btn-light mx-2'>
        <img src='https://example.com/image3.png' alt='button3' height='30'width='20'/>
      </button>
      <button className='btn btn-light mx-2'>
        <img src='https://example.com/image4.png' alt='button4' height='30' width='20'/>
      </button>
    </div>

          </Col>
          <Col xs={5} md={6} lg={5} className='d-flex order-1 order-lg-2'>
            <img
              src={image}
              alt='header-img'
              className='img-fluid enlarged'
            />
          </Col>
        </Row>
      </Container>
    </div>
    <section>

    </section>
    </>
    

  );
};

export default Header;
