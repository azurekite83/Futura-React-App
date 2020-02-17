import './FuturaApp.css';
import React from 'react';
import { Container, Row, Col, Nav, Carousel, Image } from 'react-bootstrap';

import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import DownloadImg from './img/downloadImg.png';

const reviewDescriptions = ["Wow! Futura has really outdone itself! I've had this car since 2011 and the material has lasted even though the price of the car is cheap!",
"At first I was skeptical, but it seems like Futura really has outdone itself. It's very efficient and the battery life is long lasting.",
"I knew at first sight, just by looking at the car catalog that this buy was gonna be my best. Both energy efficient and lasting, and the aesthetics of the car are beautiful! Not to mention, customer service was great since this was one of my first cars, love it!"];

const reviewElements = [{image: Img1, name: "Jim Doe", review: reviewDescriptions[0], id: 1}, 
{image: Img2, name: "John Doe", review: reviewDescriptions[1], id: 2},
{image: Img3, name: "Jacy Doe", review: reviewDescriptions[2], id: 3}];

const futuraMobile = {carName: "Futura Mobile", batteryLife: "18 - 20 days", material: "Leather interior", features: "Advanced AC system with minimal electrical use, state of the art speakers, masterfully tuned with Dolby, durable Aluminum-steel alloy for exterior", id: 0};
const futuraTraveler = {carName: "Futura Traveler", batteryLife: "20 - 30 days", material: "Nylon interior", features: "Auto adjusting window shading, upgraded air filtering for long lasting clean air, docking compatibility for extended travel times", id: 1};
const stallion = {carName: "Stallion", batteryLife: "5 - 10 days", material: "Vinyl interior", features: "Max efficiency engine, utilizes the least electricity for the most speed, unmatched aesthetics, easy manual transmission", id: 2};

const vehicles = [futuraMobile, futuraTraveler, stallion];

function FuturaApp() {
  return(
    <>
      <Header />
      <Welcome />
      <MissionStatement />
      <Reviews />
      <Downloads />
      <Products vehicles={vehicles} />
    </>
  );
} 

function Header() {
  return (
    <Container id="navigation" fluid>
      <Nav className="justify-content-center">
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
    <Container fluid>
      <Row className="justify-content-center" id="welcome">
        <h1>Welcome!</h1>

        <Col xs={6}>
          <p>
            Futura Corporations is an early 2000 establishment made to lessen the carbon
            footprint that we made by consuming too much fossil fuel.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

function ReviewList(props) {
  const reviews = props.reviewElements;
  const reviewsToHtml = reviews.map((element) => {
      return (
            <Col xs={4} key={element.id}>
              <div>
                <h2>{element.name}</h2>
                <Image src={element.image} alt={element.name} rounded />
              </div>
              <div>
                <p>{element.review}</p>
              </div>
            </Col>
      );
  });

  return (
    <Container fluid id="reviews">
      <Row>
        {reviewsToHtml}
      </Row>
    </Container>
  );
}

function Reviews() {
  return (
    <ReviewList reviewElements={reviewElements} />
  );
}

function MissionStatement() {
  return (
    <Container fluid>
      <Row className="justify-content-center" id="missionStatement">
        <Col xs={10}>
        <h3>Our Mission</h3>

        <p> 
          Our mission in Futura is to provide the most energy and cost efficient
          solution to cars, while also lessening the carbon footprint caused by overuse 
          of fossil fuels. By doing this we can provide a cleaner environment and help
          those that are affected by pollution in greater cities. We believe that saving
          the Earth begins with refinement of our vehicles, and we can do just that.
        </p>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <h3>Engineering</h3>

          <p>
              At Futura, our top engineers come up with 
              well thought out solutions to make our products
              more efficient. They devote their time and resources
              to come up with better design to appeal the public and promote
              a better aesthetic, even if the customer is not interested
              in making a better environment. This helps to double sales and
              aid in our mission to spread the use of electric cars.
          </p>
        </Col>
        <Col xs={4}>
          <h3>Sales</h3>

          <p>
            Because of our engineers and their devotion to design and efficiency,
            our sales since 2000 have doubled and are increasing almost exponentially. 
          </p>

        </Col>
        <Col xs={4}>
          <h3>Delivery</h3>

          <p>
            At Futura, we deliver straight to you with our sophisticated
            shipping app (which is included in the <a href="#downloads" id="download-link">download</a> section below)
          </p>
        </Col>
      </Row>
    </Container>
  );
}

function Products(props) {
  const cars = props.vehicles;
  const carToHtml = cars.map((element) => {
    return (
      <div key={element.id}>
      <Carousel.Item>
        <Image src="#" alt={element.carName} thumbnail />
      </Carousel.Item>
      <Carousel.Caption>
        <h3>{element.carName}</h3>

        <p>"Battery life: " + {element.batteryLife} + <br/>
        "Interior material: " + {element.material} + <br/>
        "Features: " + {element.features}</p>
      </Carousel.Caption>
      </div>
    );
  });

  return(
    <Container fluid>
      <Carousel>
        {carToHtml}
      </Carousel>
    </Container>
  );
}

function Downloads() {
  return (
    <Container fluid>
      <h3>Downloads</h3>

      <Row id="downloads" className="justify-content-center">
        <Col xs={4}>
          <h4>Apple</h4>

          <img src={DownloadImg} alt="download"/>
        </Col>
        <Col xs={4}>
          <h4>Android</h4>

          <img src={DownloadImg} alt="download"/>
        </Col>
        <Col xs={4}>
          <h4>Desktop</h4>

          <img src={DownloadImg} alt="download"/>
        </Col>
      </Row>
    </Container>
  )
}

export default FuturaApp;
