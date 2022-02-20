import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import { Container, Row, Col } from 'react-bootstrap';

const publicNavBarLinks = [
  { href: "/", name: "Home" },
  { href: "/owner", name: "Owner View" },
  { href: "/contractor", name: "Contractor View" },
];

const Header = (props) => {
  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Job Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {publicNavBarLinks.map((link, idx) => (
              <Nav.Link key={idx} href={link.href}>{link.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;
