import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer(props) {
  return (
    <footer>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col md="auto">3 of 3</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
