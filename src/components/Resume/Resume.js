import React from "react";
import { Container, ListGroup } from "react-bootstrap";

function Resume(props) {
  return (
    <Container>
      <h1>Resume</h1>
      <h3>Programming Languages, Software & Frameworks:</h3>
      <ListGroup>
        <ListGroup.Item>HTML & CSS</ListGroup.Item>
        <ListGroup.Item>NodeJS</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
        <ListGroup.Item>Azure</ListGroup.Item>
        <ListGroup.Item>Swift</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>SQL</ListGroup.Item>
        <ListGroup.Item>Tedious</ListGroup.Item>
        <ListGroup.Item>Figma</ListGroup.Item>
        <ListGroup.Item>Git</ListGroup.Item>
        <ListGroup.Item>ResearchKit</ListGroup.Item>
        <ListGroup.Item>CareKit</ListGroup.Item>
        <ListGroup.Item>XCode</ListGroup.Item>
        <ListGroup.Item>FireBase</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Resume;
