import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import TaskTable from './components/TaskTable.jsx';
import TaskPayForm from './components/TaskPayForm.jsx';
import TaskAddForm from './components/TaskAddForm.jsx';

import { TaskDataProvider } from './contexts/TaskDataContext.js';
import { PaymentDataProvider } from './contexts/PaymentDataContext.js';

const JobView = (props) => {
  const [title, setTitle] = React.useState("Home");

  return (
    <Container>
      <h1>Owner View</h1>
      <TaskDataProvider>
        <TaskTable isManager={true}/>
          <Row>
            <Col>
              <TaskAddForm />
            </Col>
            <Col>
              <PaymentDataProvider>
                <TaskPayForm />
              </PaymentDataProvider>
            </Col>
          </Row>
      </TaskDataProvider>
    </Container>
  );
};

export default JobView;
