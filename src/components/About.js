import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about from '../assets/img/about.png';

const About = () => {
  return (
    <section id="about" class="section-padding">
      <Container>
        <h2 className="text-center section-title"><span>About</span> Me</h2>
        <Col md={{ span: 8, offset: 2 }}>
        <Row className="mt-4 d-flex justify-content-center align-items-center">

          <Col md={8}>
            <div className='about-content'>
              <p>
              Experienced Web Developer proficient in
front-end and back-end technologies.
Skilled in creating responsive, user-friendly
websites using HTML, CSS, JavaScript, and
various frameworks. Strong problem-solving
abilities with a passion for staying updated
with the latest web development trends.
              </p>
              <a href="https://facebook.com" className="abt-icons mx-2">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
        </a>
        <a href="https://twitter.com" className="abt-icons mx-2">
          <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
        </a>
        <a href="https://instagram.com" className="abt-icons mx-2">
          <FontAwesomeIcon icon={["fab", "whatsapp"]} size="lg" />
        </a>
              <a href="../assets/PDMSJayasinghe.pdf" class="btn-border" download>Download CV</a>
            </div>
          </Col>
          <Col md={4}>
          <div className='about-img'>
            <img
              src={about}
              className="img-fluid"
              alt="Profile"
            />
            </div>
          </Col>
        </Row>
        </Col>
      </Container>
    </section>
  );
};

export default About;
