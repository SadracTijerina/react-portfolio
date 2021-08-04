import React from "react";
import { Container, Image } from "react-bootstrap";

function AboutMe(props) {
  return (
    <>
      <div class="crop">
        <Image
          src={require("../../assets/images/about-me.jpg").default}
          alt="about me image"
        />
      </div>
      <Container className="about-me-content">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          imperdiet scelerisque varius. Nullam sit amet urna vulputate,
          scelerisque lorem et, sollicitudin tortor. Curabitur et odio sed dolor
          molestie elementum sit amet sit amet quam. Etiam porta eleifend magna
          egestas fermentum. Morbi ornare elit in dolor viverra venenatis. Fusce
          dictum urna ut odio efficitur suscipit. Aliquam at velit id dui
          vestibulum auctor eget vitae dolor. Proin non finibus mi. Donec cursus
          enim ut lectus rhoncus tempus. Pellentesque ut mi risus. Nam bibendum
          egestas est a maximus. Mauris vitae justo tincidunt, commodo nibh sit
          amet, dapibus mi.
          <br></br>
          <br></br>
          Proin vel odio efficitur, hendrerit turpis pellentesque, elementum
          diam. Maecenas tincidunt egestas placerat. Pellentesque non nibh
          suscipit, hendrerit augue eget, egestas sapien. Vivamus sollicitudin
          blandit enim eget varius. Nullam tempor mi sit amet massa maximus,
          eget convallis felis vulputate. Aliquam erat volutpat. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Maecenas nec
          venenatis tellus, et pellentesque nunc. Morbi nec arcu id mi lobortis
          tincidunt. Sed ut metus ligula. Quisque non nulla tellus. Phasellus
          sagittis vehicula nulla id venenatis. Sed non orci lectus.{" "}
        </p>
      </Container>
    </>
  );
}

export default AboutMe;
