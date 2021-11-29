import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationMenu.css'
import logo from "../../../images/logo.png";

const NavigationMenu = () => {

  return (
    <Navbar collapseOnSelect expand="md" variant="light" fixed='top' className="container pt-3 justify-content-between nav-bg">
      <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" className="nav-logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto nav-bg">
          <Nav.Link href="#home" className="active mr-4 nav-link-style">Home</Nav.Link>
          <Nav.Link href="#projects" className="mr-4 nav-link-style">Projects</Nav.Link>
          <Nav.Link href="#blogs" className="mr-4 nav-link-style">Blogs</Nav.Link>
          <Nav.Link href="#contacts" className="mr-4 nav-link-style">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationMenu;