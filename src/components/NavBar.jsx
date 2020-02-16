import React from "react";
import { Link } from "@reach/router";

import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">NC-News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/topics">
            Topics
          </Nav.Link>
          <Nav.Link as={Link} to="/users">
            Users
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
