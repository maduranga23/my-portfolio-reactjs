// src/components/FooterComponent.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <p className="mb-0">&copy; 2024 Maduranga Sandaruwan. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <a href="https://facebook.com" className="text-white mx-2">
              <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
