import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer(props) {
  return (
    <footer>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">Created By:</Col>
          <Col md="auto">Sadrac Tijerina</Col>
          <Col md="auto">2021</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
