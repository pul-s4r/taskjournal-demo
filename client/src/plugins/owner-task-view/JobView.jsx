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
  const { name, address, abi, provider } = props;
  const { authData, web3Provider, balance } = props;

  return (
    <Container>
      <h1>Owner View</h1>
      <ContractProvider>
      <TaskDataProvider>
        <TaskTable isManager={true}
          address={address}
          abi={abi}
          provider={provider}
          name={name}
        />
          <Row>
            <Col>
              <TaskAddForm authData={authData}/>
            </Col>
            <Col>
              <PaymentDataProvider>
                <TaskPayForm authData={authData} web3Provider={web3Provider} balance={balance}/>
              </PaymentDataProvider>
            </Col>
          </Row>
      </TaskDataProvider>
    </ContractProvider>
    </Container>
  );
};

export default JobView;
