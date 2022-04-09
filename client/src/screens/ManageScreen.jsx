import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import ContractTemplateSelector from '../components/ContractTemplateSelector.jsx';

import { ContractInstDataProvider } from '../contexts/ContractInstDataContext.js';
import { ContractProvider } from '../contexts/ContractContext.js';

import JobView from '../plugins/owner-task-view/JobView.jsx';

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
          
        </Row>
      </ContractInstDataProvider>
    </ContractProvider>

    </Container>
  );
};

export default ManageScreen;
