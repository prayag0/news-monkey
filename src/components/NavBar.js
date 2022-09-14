import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All articles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Top Headlines
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
      </Navbar>
      </div>
    )
  }
}

export default NavBar