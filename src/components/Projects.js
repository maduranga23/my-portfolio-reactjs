import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import project1 from '../assets/img/project1.jpg';
import project2 from '../assets/img/project2.jpg';
import project3 from '../assets/img/project3.jpg';
import project4 from '../assets/img/project4.jpg';
import project5 from '../assets/img/project5.jpg';
import project6 from '../assets/img/project6.jpg';

const Projects = () => {
  return (
    <section id="projects" class="section-padding">
      <Container>
        <h2 className="text-center section-title">My <span>Projects</span></h2>
        <Row className="mt-4">
          
          <Col md={4} className="overlay-container ">
          <div className="image-wrapper">
            <img
              src={project1}
              className="img-fluid"
              alt="Project 1"
            />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Anusha Tours</h3>
                <p>Developed a responsive website for a travel agency using HTML, CSS, Bootstrap, and JavaScript.</p>
                <a href="https://www.anushatours.com" class="btn-white-border">Open Now</a>
              </div>
            </div>
            </div>
          </Col>
           <Col md={4} className="overlay-container">
           <div className="image-wrapper">
            <img
              src={project2}
              className="img-fluid"
              alt="Project 2"
            />
            <div className="overlay">
              <div className="overlay-content">
                <h3>WB Sanka Tours</h3>
                <p>Developed a responsive website for a travel agency using HTML, CSS, Bootstrap, and JavaScript.</p>
                <a href="https://www.wbsankatours.com" class="btn-white-border">Open Now</a>
              </div>
            </div>
            </div>
          </Col>       
          <Col md={4} className="overlay-container">
          <div className="image-wrapper">
            <img
              src={project3}
              className="img-fluid"
              alt="Project 3"
            />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Lanka Fiber Fabrica</h3>
                <p>Developed a responsive website for a company using HTML, CSS, Bootstrap, and JavaScript.</p>
                <a href="https://www.lankafiberfabrika.com" class="btn-white-border">Open Now</a>
              </div>
            </div>
            </div>
          </Col>      
          <Col md={4} className="overlay-container">
          <div className="image-wrapper">
            <img
              src={project4}
              className="img-fluid"
              alt="Project 4"
            />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Senkadagala Special School</h3>
                <p>Developed a responsive website for a school using HTML, CSS, Bootstrap, and JavaScript.</p>
                <a href="https://www.senkadagalaspecialschool.com" class="btn-white-border">Open Now</a>
              </div>
            </div>
            </div>
          </Col>  
          <Col md={4} className="overlay-container">
          <div className="image-wrapper">
            <img
              src={project5}
              className="img-fluid"
              alt="Project 5"
            />
            <div className="overlay">
              <div className="overlay-content">
                <h3>DM Funeral Directors</h3>
                <p>Developed a responsive website for a company using HTML, CSS, Bootstrap, and JavaScript.</p>
                <a href="https://www.dmfuneral.com" class="btn-white-border">Open Now</a>
              </div>
            </div>
            </div>
          </Col> 
           <Col md={4} className="overlay-container">
           <div className="image-wrapper">
            <img
              src={project6}
              className="img-fluid"
              alt="Project 6"
            />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Nava Ceylon Tours</h3>
                <p>Developed a dynamic travel agency website using HTML, CSS, Bootstrap, JavaScript, 
                  and PHP. The responsive frontend features interactive elements, while the PHP backend
                   manages server-side logic, sessions, and database interactions. 
                  </p>
                  <a href="https://www.navaceylontours.com" class="btn-white-border">Open Now</a>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
