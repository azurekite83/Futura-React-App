<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './FuturaApp.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function FuturaApp() {
  return(
    <>
      <Header />
      <Welcome />
      <MissionStatement />
    </>
  );
} 

function Header() {
  return (
    <Container>
      <Nav className="justify-content-center" id="navigation">
        <Nav.Item>
          <Nav.Link href="#welcome"> Welcome </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#aboutUs"> About Us </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#products"> Products </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#downloads"> Downloads </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

function Welcome() {
  return(
    <Container>
      <Row className="justify-content-center" id="welcome">
        <h1>Welcome!</h1>

        <Col xs={6}>
          <p>Futura Corporations is an early 2000 establishment made to lessen the carbon
            footprint that we made by consuming too much fossil fuel.</p>
        </Col>
      </Row>
    </Container>
  );
}

function MissionStatement() {
  return (
    <Container>
      <Row className="justify-content-center" id="missionStatement">
        <Col xs={10}>
        <h3>Our Mission</h3>

        <p> Our mission in Futura is to provide the most energy and cost efficient
          solution to cars, while also lessening the carbon footprint caused by overuse 
          of fossil fuels. By doing this we can provide a cleaner environment and help
          those that are affected by pollution in greater cities. We believe that saving
          the Earth begins with refinement of our vehicles, and we can do just that.
        </p>
        </Col>
      </Row>
    </Container>
=======
import React, { useState, useEffect, Fragment } from 'react';
import { motion } from "framer-motion"

import './FuturaApp.css';

function FuturaApp(props) {
  return (
    <Fragment>
      <Test />
    </Fragment>
    
  );
}

function Test(props) {
  return (
    <motion.div animate={{ scale: 0.5 }} />
>>>>>>> 4dd7d3f0ab00de7c1b6e96426e6fecdf15a21e5e
  );
}

export default FuturaApp;
