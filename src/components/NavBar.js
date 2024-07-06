import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavItem, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#hero");
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const handleNavLinkClick = (href) => {
    setActiveLink(href);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbarColor("navbar-colored");
    } else {
      setNavbarColor("navbar-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <Navbar className={`navbar-section sticky-top ${navbarColor}`} expand="lg">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">Maduranga Sandaruwan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="m-auto">
            <NavItem>
              <NavLink
                href="#hero"
                className={`navbar-item ${
                  activeLink === "#hero" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("#hero")}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#about"
                className={`navbar-item ${
                  activeLink === "#about" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("#about")}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#skills-section"
                className={`navbar-item ${
                  activeLink === "#skills-section" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("#skills-section")}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#projects"
                className={`navbar-item ${
                  activeLink === "#projects" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("#projects")}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#contact"
                className={`navbar-item ${
                  activeLink === "#contact" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClick("#contact")}
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        <a href="https://www.linkedin.com/in/madurangasandaruwan" className="nav-icons mx-2">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
        </a>
        <a href="https://github.com/maduranga23" className="nav-icons mx-2">
          <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
        </a>
        <a href="#" className="nav-icons mx-2 mr-2">
          <FontAwesomeIcon icon={["fab", "whatsapp"]} size="lg" />
        </a>
        <a
          href="../assets/PDMSJayasinghe.pdf"
          className="btn-fill ml-auto"
          download
        >
          Download CV
        </a>
      </Container>
    </Navbar>
  );
};

export default NavBar;
