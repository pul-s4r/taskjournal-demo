import { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { AuthContext, AuthDispatchContext, initialStateAuth } from '../contexts/AuthContext.js';

const publicUserNavBarLinks = [
  { href: "/login", name: "Login" },
  { href: "/register", name: "Register" },
];

const privateUserNavBarLinks = [
  { href: "/login", name: "Login" },
];

const publicNavBarLinks = [
  { href: "/", name: "Home" },
];

const privateNavBarLinks = [
  { href: "/", name: "Home" },
  { href: "/owner", name: "Owner View" },
  { href: "/contractor", name: "Contractor View" },
];

const Header = (props) => {
  const authData = useContext(AuthContext);
  const setAuthData = useContext(AuthDispatchContext);
  const nav = useNavigate();

  const handleLogout = () => {
    setAuthData(initialStateAuth);
    nav("/login");
  };

  const publicUserNav = (
    <Navbar.Collapse className="justify-content-end">
      {publicUserNavBarLinks.map((link, idx) => (
        <Nav.Link key={idx} href={link.href}>{link.name}</Nav.Link>
      ))}
    </Navbar.Collapse>
  );

  const privateUserNav = (
    <Navbar.Collapse className="justify-content-end">
      <Col sm={4}>
        <Navbar.Text className="mr-sm-2">Signed in as: {authData.email}</Navbar.Text>
      </Col>
      <Col sm={2}>
        <Button className="" variant="outline-secondary" type="button" onClick={handleLogout}>
          Logout
        </Button>
      </Col>
    </Navbar.Collapse>
  );

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Job Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {privateNavBarLinks.map((link, idx) => (
              <Nav.Link key={idx} href={link.href}>{link.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        {authData.token ? privateUserNav : publicUserNav}
      </Container>
    </Navbar>

  );
};

export default Header;
