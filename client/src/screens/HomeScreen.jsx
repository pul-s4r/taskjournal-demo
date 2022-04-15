import React, { useState, useEffect, useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';

const HomeScreen = (props) => {
  return (
    <Container>
      <Header/>
      <h1>Home</h1>
    </Container>
  );
};

export default HomeScreen;
