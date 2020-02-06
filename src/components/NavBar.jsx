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
          <Link to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>
          <Link to="/topics">
            <Nav.Link href="/topics">Topics</Nav.Link>
          </Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
