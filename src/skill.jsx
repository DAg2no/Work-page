import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import laptop from './data/laptop-3214756.svg';
import JavaScriptIcon from './data/js-icon.png';
import BootstrapIcon from './data/bootstrap-icon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './skill.css';

const Skill = () => {
  return (
    <React.Fragment>
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
                  <img src={JavaScriptIcon} alt="JS" width={30} />
                </Card>
                <a href="https://example.com">
                  <button>
                    <img src="#" alt="NaN" />
                  </button>
                </a>
                <a href="https://example.com">
                  <button>
                    <img src="#" alt="NaN" />
                  </button>
                </a>
                <a href="https://example.com">
                  <button>
                    <img src="#" alt="NaN" />
                  </button>
                </a>
              </div>
              <div>
                <h4 className="text-light fw-light">Frontend</h4>
                <div className="d-flex justify-content-center">
                  <Card>
                    <img src={BootstrapIcon} alt="Bootstrap" width={30} />
                  </Card>
                  <Card>
                    <img src="#" alt="NaN" />
                  </Card>
                  <Card>
                    <img src="#" alt="NaN" />
                  </Card>
                  <Card>
                    <img src="#" alt="NaN" />
                  </Card>
                </div>
              </div>
              <div>
                <h4 className="text-light fw-light">Backend, Database and Cloud</h4>
                <div className="d-flex justify-content-center">
                  <img src="#" alt="JS" />
                  <img src="#" alt="NaN" />
                  <img src="#" alt="NaN" />
                  <img src="#" alt="NaN" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Skill;
