import React, { useState, useEffect, useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import ContractDefListTable from '../components/ContractDefListTable.jsx';
import ContractAddModal from '../components/ContractAddModal.jsx';
import ContractInstListTable from '../components/ContractInstListTable.jsx';

import { ContractDefDataProvider } from '../contexts/ContractDefDataContext.js';
import { ContractInstDataProvider } from '../contexts/ContractInstDataContext.js';

const DeployerScreen = (props) => {
  const [deployListShow, setDeployListShow] = useState(false);

  return (
    <Container>
      <Header/>
      <h1>Contract Manager</h1>
      <ContractAddModal />
      <ContractDefDataProvider>
        <ContractDefListTable />
        <ContractInstDataProvider>
          <ContractInstListTable show={deployListShow} setShow={setDeployListShow}/>
        </ContractInstDataProvider>
      </ContractDefDataProvider>
    </Container>
  );
};

export default DeployerScreen;
