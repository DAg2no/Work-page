import React, { Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./index.css";

const Header = () => {

  return (
    <Fragment>
      <header className="header-container" id="header">
        <Container>
          <Row className="header-container">
          </Row>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;
