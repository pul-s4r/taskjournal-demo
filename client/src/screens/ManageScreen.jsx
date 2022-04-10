import React, { useState, useEffect, useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import ContractTemplateSelector from '../components/ContractTemplateSelector.jsx';

import { ContractInstDataProvider } from '../contexts/ContractInstDataContext.js';
import { ContractProvider, ContractContext } from '../contexts/ContractContext.js';

import TemplateProvider from '../components/TemplateProvider.jsx';

const ManageScreen = (props) => {

  return (
    <Container>
      <Header/>
      <ContractProvider>
      <ContractInstDataProvider>
        <Row className="justify-content-center">
          <h1>Manage Contract</h1>
        </Row>
        <Row className="justify-content-center" sm={2}>
          <ContractTemplateSelector />
        </Row>
        <Row className="justify-content-center">
          <TemplateProvider></TemplateProvider>
        </Row>
      </ContractInstDataProvider>
    </ContractProvider>

    </Container>
  );
};

export default ManageScreen;
