import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import TaskTable from './components/TaskTable.jsx';
import TaskEditForm from './components/TaskEditForm.jsx';
import TaskCompleteForm from './components/TaskCompleteForm.jsx';
import TaskPayStatus from './components/TaskPayStatus.jsx';
import TaskReleaseForm from './components/TaskReleaseForm.jsx';

import { TaskDataProvider } from './contexts/TaskDataContext.js';
import { PaymentDataProvider } from './contexts/PaymentDataContext';

const JobManager = (props) => {
  const [title, setTitle] = React.useState("Home");

  return (
    <Container>
      <h1>Contractor View</h1>
      <TaskDataProvider>
        <TaskTable isManager={false}/>
        <Row>
          <Col>
            <TaskCompleteForm />
          </Col>
          <Col>
            <TaskEditForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <PaymentDataProvider>
              <TaskPayStatus />
            </PaymentDataProvider>
          </Col>
          <Col>
            <TaskReleaseForm />
          </Col>
        </Row>
      </TaskDataProvider>
    </Container>
  );
};

export default JobManager;
