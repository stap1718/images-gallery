import React from "react";
import { Navbar } from "react-bootstrap";
//import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
//import Nav from 'react-bootstrap/Nav';
//import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';
const navbarStyle = {
  backgroundColor: "lightblue",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
