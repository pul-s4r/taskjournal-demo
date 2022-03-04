import { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { AuthContext, AuthDispatchContext, initialStateAuth } from '../contexts/AuthContext.js';
import ConnectButton from './ConnectButton.jsx';

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
  const { authData, account, balance } = useContext(AuthContext);
  const { setAuthData, handleActivate, handleDeactivate } = useContext(AuthDispatchContext);
  const nav = useNavigate();

  const handleLogout = () => {
    setAuthData(initialStateAuth);
    nav("/login");
  };

  const publicNav = (
    <Navbar.Collapse className="basic-navbar-nav">
      {publicNavBarLinks.map((link, idx) => (
        <Nav.Link key={idx} href={link.href}>{link.name}</Nav.Link>
      ))}
    </Navbar.Collapse>
  );

  const privateNav = (
    <Navbar.Collapse className="basic-navbar-nav">
      {privateNavBarLinks.map((link, idx) => (
        <Nav.Link key={idx} href={link.href}>{link.name}</Nav.Link>
      ))}
    </Navbar.Collapse>
  );

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
      <Col sm={3}>
        <Navbar.Text>
          <div>{`Account: ${account ? account : "..."}`}</div>
          <div>{`Balance: ${balance ? balance : "..."}`}</div>
        </Navbar.Text>
      </Col>
      <Col sm={2} className="mr-sm-2">
        {
          account ?
          <ConnectButton statusconnect={"false"} onClick={() => {handleDeactivate()}}/>
          : <ConnectButton statusconnect={"true"} onClick={() => {handleActivate()}}/>
        }
      </Col>
      <Col sm={1}></Col>
      <Col sm={2}>
        <Button className="mr-sm-2" variant="outline-secondary" type="button" onClick={handleLogout}>
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
        {authData.token ? privateNav : publicNav}
        {authData.token ? privateUserNav : publicUserNav}
      </Container>
    </Navbar>

  );
};

export default Header;
