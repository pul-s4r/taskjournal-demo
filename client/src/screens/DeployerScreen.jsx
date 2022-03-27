import React, { useState, useEffect, useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import ContractDefListTable from '../components/ContractDefListTable.jsx';
import ContractAddModal from '../components/ContractAddModal.jsx';

import { ContractDefDataProvider } from '../contexts/ContractDefDataContext.js';

const DeployerScreen = (props) => {
  return (
    <Container>
      <Header/>
      <h1>Contract Manager</h1>
      <ContractAddModal />
      <ContractDefDataProvider>
        <ContractDefListTable />
      </ContractDefDataProvider>
    </Container>
  );
};

export default DeployerScreen;
