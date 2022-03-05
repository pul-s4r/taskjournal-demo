import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import RegisterForm from '../components/RegisterForm.jsx';

const RegisterScreen = (props) => {

  return (
    <Container>
      <Header/>
      <Row className="justify-content-center" sm={3}>
        <h1>Register</h1>
      </Row>
      <Row className="justify-content-center" sm={3}>
        <RegisterForm />
      </Row>

    </Container>
  );
};

export default RegisterScreen;
