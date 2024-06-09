import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skills from './Skills';

const SkillsSection = () => {
  return (
    <section id="skills-section" class="section-padding">
      <Container>
        <h2 className="text-center section-title">My <span>Skills</span></h2>
        <Row className="mt-4">
          <Col md={{ span: 6, offset: 3 }}>
          <Skills name="HTML" done="98"/>
          <Skills name="CSS" done="95"/>
          <Skills name="JavaScript" done="60"/>
          <Skills name="Bootstrap" done="80"/>
          <Skills name="Java" done="60"/>
          <Skills name="MySQL" done="80"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
