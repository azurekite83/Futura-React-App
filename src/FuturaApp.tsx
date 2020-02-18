import './FuturaApp.css';
import React from 'react';
import { Container, Row, Col, Nav, Carousel, Image } from 'react-bootstrap';
import { motion } from "framer-motion";

import DownloadImg from './img/downloadImg.png';
import FuturaMobile from './img/futuraMobile.jpg';
import FuturaTraveler from './img/futuraTraveler.jpg';
import Stallion from './img/stallion.jpg';

const reviewDescriptions = ["Wow! Futura has really outdone itself! I've had this car since 2011 and the material has lasted even though the price of the car is cheap!",
"At first I was skeptical, but it seems like Futura really has outdone itself. It's very efficient and the battery life is long lasting.",
"I knew at first sight, just by looking at the car catalog that this buy was gonna be my best. Both energy efficient and lasting, and the aesthetics of the car are beautiful! Not to mention, customer service was great since this was one of my first cars, love it!"];

const reviewElements = [{name: "Jim Doe", review: reviewDescriptions[0], id: 1}, 
{name: "John Doe", review: reviewDescriptions[1], id: 2},
{name: "Jacy Doe", review: reviewDescriptions[2], id: 3}];

const futuraMobile = {image: FuturaMobile, carName: "Futura Mobile", batteryLife: "45 miles", material: "Leather interior", features: "Advanced AC system with minimal electrical use, state of the art speakers, masterfully tuned with Dolby, durable Aluminum-steel alloy for exterior, $28k", id: 0};
const futuraTraveler = {image: FuturaTraveler, carName: "Futura Traveler", batteryLife: "80 miles", material: "Nylon interior", features: "Auto adjusting window shading, upgraded air filtering for long lasting clean air, docking compatibility for extended travel times, $32k", id: 1};
const stallion = {image: Stallion, carName: "Stallion", batteryLife: "40 miles", material: "Vinyl interior", features: "Max efficiency engine, utilizes the least electricity for the most speed, unmatched aesthetics, easy manual transmission $40k", id: 2};

const vehicles = [futuraMobile, futuraTraveler, stallion];

function FuturaApp() {
  return(
    <>
      <Header />
      <Welcome />
      <MissionStatement />
      <Promotions />
      <Reviews />
      <Products vehicles={vehicles}/>
      <Downloads />
      <Footer />
    </>
  );
} 

function Header() {
  return (
    <Container id="navigation" fluid>
      <Nav className="justify-content-center align-items-center">
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
    <Container fluid id="welcome">
      <Row className="justify-content-center align-items-center" id="heading">
        <motion.div initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
          <h1>Welcome!</h1>
        </motion.div>
      </Row> 

      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          <p>
            Futura Corporations is an early 2000's establishment made to lessen the carbon
            footprint that was made by consuming too much fossil fuel.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

function MissionStatement() {
  return (
    <Container fluid id="missionStatement">
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
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
    </Container>
  );
}

function Promotions() {
  return(
    <Container fluid id="promotions">
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
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
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          <h3>Sales</h3>

          <p>
            Because of our engineers and their devotion to design and efficiency,
            our sales since 2000 have doubled and are increasing almost exponentially. 
          </p>

        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
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

function ReviewList(props) {
  const reviews = props.reviewElements;
  const reviewsToHtml = reviews.map((element) => {
      return (
        <Row className="justify-content-center align-items-center" key={element.id}>
          <Col xs={12}>
              <ul>
                <li>
                  <h2>{element.name}</h2>
                  {element.review}
                </li>
              </ul>
            </Col>
        </Row>
      );
  });

  return (
    <Container fluid id="reviews">
      <h1> Reviews </h1>
        {reviewsToHtml}
    </Container>
  );
}

function Reviews() {
  return (
    <ReviewList reviewElements={reviewElements} />
  );
}

function Products(props) {
  const cars = props.vehicles;
  const carToHtml = cars.map((element) => {
    return (

        <Carousel.Item key={element.id}>
          <Image src={element.image} alt={element.carName}/>

          <Container fluid>
            <Row className="justify-content-center align-items-center">
              <Col xs={12}>
              <Carousel.Caption>
              <h3>{element.carName}</h3>

              <p><span>Battery life:</span> {element.batteryLife} <br/>
                <span>Interior material:</span> {element.material} <br/>
                <span>Features and Price:</span> {element.features}</p>
              </Carousel.Caption>
              </Col>
            </Row>
          </Container>

      </Carousel.Item>
      
    );
  });

  return(
    <Container fluid id="products">
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          <h1>Products</h1>
        </Col>
      </Row>
      <Carousel>
        {carToHtml}
      </Carousel>
    </Container>
  );
}

function Downloads() {
  return (
    <Container fluid id="downloads">
      <h3>Downloads</h3>

      <Row className="justify-content-center">
        <Col xs={4}>
          <h4>Apple</h4>

          <Image src={DownloadImg} alt="download"/>

          <a href="#">download</a>
        </Col>
        <Col xs={4}>
          <h4>Android</h4>

          <Image src={DownloadImg} alt="download"/>

          <a href="#">download</a>
        </Col>
        <Col xs={4}>
          <h4>Desktop</h4>

          <Image src={DownloadImg} alt="download"/>

          <a href="#">download</a>
        </Col>
      </Row>
    </Container>
  )
}

function Footer() {
  return(
    <Container fluid id="footer">
      <Row className="justify-content-center align-items-center">
        <span>2020 Futura &copy;</span>
      </Row>
    </Container>
  );
}

export default FuturaApp;
