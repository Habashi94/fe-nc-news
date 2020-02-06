import React from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">NC-News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/topics">Topics</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
