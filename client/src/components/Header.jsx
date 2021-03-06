import { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { AuthContext, AuthDispatchContext, initialStateAuth } from '../contexts/AuthContext.js';
import { ellipseAddress } from '../utils/chain.js';
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

const privateNavBarLinksOwner = [
  { href: "/", name: "Home" },
  { href: "/manage", name: "Interact" },
  { href: "/contracts", name: "Manage and Deploy" },
];

const privateNavBarLinksContractor = [
  { href: "/", name: "Home" },
  { href: "/manage", name: "Interact" },
];

const Header = (props) => {
  const { authData, web3Provider, address, balance } = useContext(AuthContext);
  const { setAuthData, connect, disconnect } = useContext(AuthDispatchContext);
  const nav = useNavigate();

  const handleLogout = () => {
    setAuthData(initialStateAuth);
    disconnect();
    nav("/login");
  };

  const publicNav = (
    <Navbar.Collapse className="basic-navbar-nav">
      {publicNavBarLinks.map((link, idx) => (
        <Nav.Link key={idx} href={link.href}>{link.name}</Nav.Link>
      ))}
    </Navbar.Collapse>
  );

  const privateNavOwner = (
    <Navbar.Collapse className="basic-navbar-nav">
      {privateNavBarLinksOwner.map((link, idx) => (
        <Nav.Link key={idx} href={link.href}>{link.name}</Nav.Link>
      ))}
    </Navbar.Collapse>
  );

  const privateNavContractor = (
    <Navbar.Collapse className="basic-navbar-nav">
      {privateNavBarLinksContractor.map((link, idx) => (
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
      <Col sm={3}>
        <Navbar.Text className="mr-sm-2">Signed in as: {authData.email}</Navbar.Text>
      </Col>
      <Col sm={3}>
        <Navbar.Text>
          <div>{`Account: ${address ? ellipseAddress(address) : "..."}`}</div>
          <div>{`Balance: ${balance ? balance : "..."}`}</div>
        </Navbar.Text>
      </Col>
      <Col sm={2} className="mr-sm-2">
        {
          web3Provider ?
          <ConnectButton statusconnect={"false"} onClick={() => {disconnect()}}/>
          : <ConnectButton statusconnect={"true"} onClick={() => {connect()}}/>
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
        {authData.token ?
          (authData.accountType === "OWNER" ? privateNavOwner : privateNavContractor)
          : publicNav}
        {authData.token ? privateUserNav : publicUserNav}
      </Container>
    </Navbar>

  );
};

export default Header;
