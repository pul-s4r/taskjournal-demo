import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import TaskTable from './components/TaskTable.jsx';
import TaskEditForm from './components/TaskEditForm.jsx';
import TaskCompleteForm from './components/TaskCompleteForm.jsx';
import TaskPayStatus from './components/TaskPayStatus.jsx';
import TaskReleaseForm from './components/TaskReleaseForm.jsx';

import { TaskDataProvider } from './contexts/TaskDataContext.js';
import { PaymentDataProvider } from './contexts/PaymentDataContext.js';

const JobManager = (props) => {
  const [title, setTitle] = React.useState("Home");
  const { contract } = props;

  return (
    <Container>
      <h1>Contractor View</h1>
      <TaskDataProvider>
        <TaskTable isManager={false} contract={contract}/>
        <Row>
          <Col>
            <TaskCompleteForm contract={contract}/>
          </Col>
          <Col>
            <TaskEditForm contract={contract}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <PaymentDataProvider>
              <TaskPayStatus contract={contract}/>
            </PaymentDataProvider>
          </Col>
          <Col>
            <TaskReleaseForm contract={contract}/>
          </Col>
        </Row>
      </TaskDataProvider>
    </Container>
  );
};

export default JobManager;
