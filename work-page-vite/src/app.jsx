import React, { useEffect } from 'react';
import Typed from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Card } from 'react-bootstrap';
import image from './data/image.png';
import './app.css';
import inkendin from './data/In-Blue-34.png';
import stackoverflow from './data/stackoverflow-3819627975.png';
import github from './data/github_PNG40-3901690518.png';
import gmail from './data/gmail-logo-circle-2-2047502769.png';
import laptop from './data/laptop-3214756.svg';
import JavaScriptIcon from './data/js-icon.png'
import BootstrapIcon from './data/bootstrap-icon.svg'

const Header = () => {
  useEffect(() => {
    const header = document.getElementById('header');
    header.style.animation = 'slide-in 1s ease-in-out';

    const title = document.getElementById('title');
    title.style.animation = 'bounce 2s ease-in-out infinite';
  }, []);

  return (
    <>
      <Navbar expand="md" variant="light" className="fixed-top">
        <Navbar.Brand>
          <span className="NameBar" style={{ fontWeight: 'arial', fontSize: 'medium' }}>
            Daniel Uribe
          </span>
        </Navbar.Brand>
      </Navbar>
      <div className="header-container" id="header">
        <Container className="p-0 p-lg-5">
          <Row className="d-flex justify-content-center justify-content-lg-between align-items-center">
            <Col xs={12} lg={6} className="order-2 order-lg-1">
              <div className="title-container">
                <div>
                  <h1 className="title" id="title">
                    Hi, I am Daniel
                  </h1>
                </div>
              </div>
              <span>
                <div className="animated-typing">
                  <Typed
                    strings={['Beginner in development', 'Working hard to improve', "I'm a developer"]}
                    typeSpeed={40}
                    backSpeed={30}
                    loop
                    className="typed-cursor"
                  />
                </div>
              </span>
              <div className="d-flex justify-content-lg-start mt-2 px-5">
                <a href="https://www.linkedin.com/in/daniel-uribe-pulgar-93905a273/" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <button className="btn btn-light">
                    <img src={inkendin} alt="button1" height="23" width="22" />
                  </button>
                </a>
                <a href="https://stackoverflow.com/users/21894223/daniel-uribe?tab=profile" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <button className="btn btn-light">
                    <img src={stackoverflow} alt="button2" height="23" width="22" />
                  </button>
                </a>
                <a href="https://github.com/DAg2no" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <button className="btn btn-light">
                    <img src={github} alt="button3" height="23" width="22" />
                  </button>
                </a>
                <a href="mailto:danielscrip.zsh@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <button className="btn btn-light">
                    <img src={gmail} alt="button4" height="23" width="22" />
                  </button>
                </a>
             
                </div>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center order-1 order-lg-2">
              <img src={image} alt="header-img" className="img-fluid enlarged" />
            </Col>
          </Row>
        </Container>
      </div>
      <section className="Margin-section">
  <Container>
    <Row className="d-flex justify-content-center">
      <Col xs="12" sm="5">
        <h1 className="text-light text-center fw-light">Skills</h1>
        <img src={laptop} alt="laptop" />
      </Col>
      <Col xs="12" sm="5" className="text-center mt-sm-4">
        <h4 className="text-light fw-light">Languages Known</h4>
        <div className="d-flex justify-content-center">
<Card>
  <img src={JavaScriptIcon} alt="JS" width={30}/>
</Card>
              
          <a href="#">
            <button>
              <img src="#" alt="NaN" />
            </button>
          </a>
          <a href="#">
            <button>
              <img src="#" alt="NaN" />
            </button>
          </a>
          <a href="#">
            <button>
              <img src="#" alt="NaN" />
            </button>
          </a>
        </div>
        <div>
          <h4 className="text-light fw-light">Frontend</h4>
          <div className="d-flex justify-content-center">
            <Card>
              <img src={BootstrapIcon} alt="Bootstrap" width={30}/>
            </Card>
                
            
            <Card>
              <img src="#" alt="NaN" />
            </Card>
               

            <a href="#">
              <button>
                <img src="#" alt="NaN" />
              </button>
            </a>
            <a href="#">
              <button>
                <img src="#" alt="NaN" />
              </button>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-light fw-light">Backend, Database and Cloud</h4>
          <div className="d-flex justify-content-center">
            <a href="#">
              <button className="btn">
                <img src="#" alt="JS" />
              </button>
            </a>
            <a href="#">
              <button className="btn">
                <img src="#" alt="NaN" />
              </button>
            </a>
            <a href="#">
              <button className="btn">
                <img src="#" alt="NaN" />
              </button>
            </a>
            
                <img src="#" alt="NaN" />
             
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>

    </>
  );
};

export default Header;
