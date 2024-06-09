// src/components/HeroSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Hero = () => {
  return (
    <section id="hero" class="section-padding">
    <Container>
     
        <Row className="align-items-center">
            <Col md={{ span: 8, offset: 2 }}>
            <h1 className="text-white">
              Transforming Ideas
              <br />
           into <span>elegant solutions</span>
            </h1>
<p className="text-white">Turning your ideas into elegant solutions is my specialty. With a keen eye for detail and a passion for creativity,
   I transform concepts into stunning, functional designs that stand out. Every project is a journey from vision
    to reality, crafted with precision and finesse. Explore my work and see how I can bring your ideas
     to life with elegance and expertise.</p>
            <a href="https://www.anushatours.com" class="btn-white-border mt-5">Contact Me</a>
          </Col>
         
        </Row>
     
    </Container>
    </section>
  );
};

export default Hero;
