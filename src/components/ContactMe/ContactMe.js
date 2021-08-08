import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function ContactMe() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState(false);

  function handleChange(e) {
    e.preventDefault();

    if (e.target.value === "") {
      document.getElementsByName(e.target.name)[0].classList.add("is-invalid");
    } else {
      document
        .getElementsByName(e.target.name)[0]
        .classList.remove("is-invalid");
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    const errors = document.getElementsByClassName("is-invalid");

    if (errors > 0) {
      setErrors(true);
    } else setErrors(false);
  }

  return (
    <Container>
      <h1>Contact Me</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            placeholder="Enter name "
            onBlur={handleChange}
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            placeholder="Enter email"
            type="email"
            name="email"
            onBlur={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            onBlur={handleChange}
            name="message"
          />
        </Form.Group>

        <Button className="color-nav">Submit</Button>
        {errors && <p>Missing data make sure look at input that is red</p>}
      </Form>
    </Container>
  );
}

export default ContactMe;
