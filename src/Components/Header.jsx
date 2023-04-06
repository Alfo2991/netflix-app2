import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            height="30"
            className="d-inline-block align-top"
            alt="Netflix logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Link to="/TvShows" className="nav-link">TV Shows</Link>      
                  <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#latest">Latest</Nav.Link>
            <Nav.Link href="#my-list">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#search">
              <i className="fas fa-search"></i>
            </Nav.Link>
            <Nav.Link href="#notifications">
              <i className="fas fa-bell"></i>
            </Nav.Link>
            <Nav.Link href="#account">
              <i className="fas fa-user"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
