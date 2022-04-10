import React, { useState, useEffect, useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import TaskTable from './components/TaskTable.jsx';
import TaskPayForm from './components/TaskPayForm.jsx';
import TaskAddForm from './components/TaskAddForm.jsx';

import { ContractProvider } from './contexts/ContractContext.js';
import { TaskDataProvider } from './contexts/TaskDataContext.js';
import { PaymentDataProvider } from './contexts/PaymentDataContext.js';

const JobView = (props) => {
  const [title, setTitle] = React.useState("Home");
  const { contract, authContext } = props;
  const { authData, web3Provider, address, balance, signer } = authContext;

  return (
    <Container>
      <h1>Owner View</h1>
      <ContractProvider>
      <TaskDataProvider>
        <TaskTable isManager={true} contract={contract}/>
          <Row>
            <Col>
              <TaskAddForm contract={contract} authContext={authContext}/>
            </Col>
            <Col>
              <PaymentDataProvider>
                <TaskPayForm contract={contract} authContext={authContext}/>
              </PaymentDataProvider>
            </Col>
          </Row>
      </TaskDataProvider>
    </ContractProvider>
    </Container>
  );
};

export default JobView;
