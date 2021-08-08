import React, { useState } from "react";
import { Container, Image, Carousel } from "react-bootstrap";

function Project(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="projects">
      <h1>Projects</h1>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../assets/images/project-1.png").default}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Jot It App</h3>
            <p>
              A note taking website for anyone working on a project with the
              option to edit, save and delete any notes.{" "}
              <a href="https://github.com/SadracTijerina/Jot-It">Github.</a>{" "}
              <a href="https://jotitgood.herokuapp.com/">Webpage.</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../assets/images/project-2.png").default}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-black">NBA Alley-Oop</h3>
            <p className="text-black">
              An application for users to learn about NBA teams. The user can
              choose a specific team and then be taken to a page with
              information about the team selected.{" "}
              <a href="https://github.com/SadracTijerina/NBA-Alley-Oop">
                Github.
              </a>{" "}
              <a href="https://sadractijerina.github.io/NBA-Alley-Oop/">
                Webpage.
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../assets/images/project-3.png").default}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-black">Run Buddy</h3>
            <p className="text-black">
              A website that offers fitness training services.{" "}
              <a href="https://github.com/SadracTijerina/run-buddy">Github.</a>{" "}
              <a href="https://sadractijerina.github.io/run-buddy/">Webpage.</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Project;
