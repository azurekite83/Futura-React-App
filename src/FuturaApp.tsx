import './FuturaApp.css';
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import DownloadImg from './img/downloadImg.png'

function FuturaApp() {
  return(
    <>
      <Header />
      <Welcome />
      <MissionStatement />
      <CompanyPromotion />
      <Downloads />
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
          <p>
            Futura Corporations is an early 2000 establishment made to lessen the carbon
            footprint that we made by consuming too much fossil fuel.
          </p>
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

const reviewDescriptions = ["Wow! Futura has really outdone itself! I've had this car since 2011 and the material has lasted even though the price of the car is cheap!",
"At first I was skeptical, but it seems like Futura really has outdone itself. It's very efficient and the battery life is long lasting.",
"I knew at first sight, just by looking at the car catalog that this buy was gonna be my best. Both energy efficient and lasting, and the aesthetics of the car are beautiful! Not to mention, customer service was great since this was one of my first cars, love it!"];

const reviewElements = [{image: Img1, name: "Jim Doe", review: reviewDescriptions[0], id: 1}, 
{image: Img2, name: "John Doe", review: reviewDescriptions[1], id: 2},
{image: Img3, name: "Jacy Doe", review: reviewDescriptions[2], id: 3}];

function ReviewList(props) {
  const reviews = props.reviewElements;
  const reviewsToHtml = reviews.map((element) => {
      return (
        <Row key={element.id}>
          <Col xs={8} lg>
            <h2>{element.name}</h2>
            <img src={element.image} alt={element.name} className="img-fluid"/>

            <p>{element.review}</p>
          </Col>
          
        </Row>
      );
  });

  return (
    <Container>
      {reviewsToHtml}
    </Container>
  );
}
function CompanyPromotion() {
  return(
    <>
    <Container>
      <Row>
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
    </Container>
    <Container>
      <Row>
        <Col xs={12}>
          <h3>Sales</h3>

          <p>
            Because of our engineers and their devotion to design and efficiency,
            our sales since 2000 have doubled and are increasing almost exponentially. 
            <br/>
            Here are some reviews on Futura electric cars:
          </p>

          <ReviewList reviewElements={reviewElements} />

        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12}>
          <h3>Delivery</h3>

          <p>
            At Futura, we deliver straight to you with our sophisticated
            shipping app (which is included in the <a href="#downloads" id="download-link">download</a> section below)
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

function Downloads() {
  return (
    <Container>
      <h3>Downloads</h3>

      <Row>
        <Col xs={4}>
          <h4>Apple</h4>

          <img src={DownloadImg} className="img-fluid" alt="download"/>
        </Col>
        <Col xs={4}>
          <h4>Android</h4>

          <img src={DownloadImg} className="img-fluid" alt="download"/>
        </Col>
        <Col xs={4}>
          <h4>Desktop</h4>

          <img src={DownloadImg} className="img-fluid" alt="download"/>
        </Col>
      </Row>
    </Container>
  )
}

export default FuturaApp;
