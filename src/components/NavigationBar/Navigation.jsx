import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navdiv">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
