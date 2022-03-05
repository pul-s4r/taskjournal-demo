import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import LoginForm from '../components/LoginForm.jsx';

const LoginScreen = (props) => {

  return (
    <Container>
      <Header/>
      <Row className="justify-content-center" sm={3}>
        <h1>Login</h1>
      </Row>
      <Row className="justify-content-center" sm={3}>
        <LoginForm />
      </Row>

    </Container>
  );
};

export default LoginScreen;
