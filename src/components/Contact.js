import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" class="section-padding">
      <Container>
        <h2 className="text-center section-title"><span>Contact</span> Me</h2>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <p className="title-des text-center">Let's build something exceptional together. Whether you need a website 
        developed from scratch, a redesign, or custom functionality, I'm here to help. Reach out to discuss your project 
        requirements or to learn more about my services. Fill out the form below or send me an email, and I'll respond 
        promptly. I look forward to collaborating with you to bring your vision to life.</p>
    
          </Col>
        </Row>
           <Row className="mt-4">
          <Col md={{ span: 6, offset: 3 }} className='text-center'>
            <Form>
              <Form.Group controlId="formBasicName">
           
                <Form.Control type="text" placeholder="Enter your name" className="custom-form-group"/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" >
               
                <Form.Control type="email" placeholder="Enter email" className="custom-form-group" />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
              
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message" className="custom-form-group"
                />
              </Form.Group>

              <a href="https://www.anushatours.com" class="btn-border" type='submit'>Send Message</a>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
