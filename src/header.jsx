import React, { useEffect, Fragment } from "react";
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import image from "./data/image.png";
import "./header.css";
import inkendin from "./data/In-Blue-34.png";
import stackoverflow from "./data/stackoverflow-3819627975.png";
import github from "./data/github_PNG40-3901690518.png";
import gmail from "./data/gmail-logo-circle-2-2047502769.png";

const Header = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    header.style.animation = "slide-in 1s ease-in-out";

    const title = document.getElementById("title");
    title.style.animation = "bounce 2s ease-in-out infinite";
  }, []);

  return (
    <Fragment>
      <Navbar expand="md" variant="light" className="fixed-top">
        <Navbar.Brand>
          <span
            className="NameBar text-light"
            style={{ fontWeight: "normal", fontSize: "larger" }}
          >
            Daniel Uribe
          </span>
          {/* span con con la animacion de escritura */}
        </Navbar.Brand>
      </Navbar>
      <div className="header-container" id="header">
        <Container>
          <Row className="header-container">
            <Col xs={12} lg={7} className="order-2 order-lg-1">
              <div className="title-container">
                <div className="slide-in">
                  <h1 className="title" id="title">
                    Hi, I'm Daniel
                  </h1>
                  <span className="fs-1 text-warning span-typed fw-light">
                    <Typed
                      strings={[
                        "Beginner in development",
                        "Working hard to improve",
                        "I'm a developer",
                      ]}
                      typeSpeed={40}
                      backSpeed={20}
                      loop
                    />
                  </span>
                </div>

                {/* botones */}
                <div className="d-flex flex-lg-column justify-content-lg-start mt-3">
                  <a
                    href="https://www.linkedin.com/in/daniel-uribe-pulgar-93905a273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <button type="button" className="btn btn-light">
                      <img
                        src={inkendin}
                        alt="LinkedIn"
                        height="40"
                        width="40"
                      />
                    </button>
                  </a>
                  <a
                    href="https://stackoverflow.com/users/21894223/daniel-uribe?tab=profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <button className="btn btn-light">
                      <img
                        src={stackoverflow}
                        alt="Stack Overflow"
                        height="40"
                        width="40"
                      />
                    </button>
                  </a>
                  <a
                    href="https://github.com/DAg2no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                  >
                    <button className="btn btn-light" type="button">
                      <img src={github} alt="GitHub" height="40" width="40" />
                    </button>
                  </a>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={5} className="order-1 order-lg-2">
              <img src={image} alt="Header" className="img-fluid enlarged" />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Header;
