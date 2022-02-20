import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import TaskTable from '../components/TaskTable.jsx';
import TaskEditForm from '../components/TaskEditForm.jsx';
import TaskCompleteForm from '../components/TaskCompleteForm.jsx';

import { TaskDataProvider } from '../contexts/TaskDataContext.js';

const JobManager = (props) => {
  const [title, setTitle] = React.useState("Home");

  return (
    <Container>
      <Header/>
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
      </TaskDataProvider>
    </Container>
  );
};

export default JobManager;
