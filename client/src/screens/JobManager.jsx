import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import TaskTable from '../components/TaskTable.jsx';
import TaskAddForm from '../components/TaskAddForm.jsx';
import TaskEditForm from '../components/TaskEditForm.jsx';
import TaskCompleteForm from '../components/TaskCompleteForm.jsx';

import { TaskDataProvider } from '../contexts/TaskDataContext.js';

const JobManager = (props) => {
  const [title, setTitle] = React.useState("Home");

  return (
    <Container>
      <Header/>
      <TaskDataProvider>
        <TaskTable />
        <Row>
          <Col>
            <TaskAddForm />
          </Col>
          <Col>
            <TaskCompleteForm />
          </Col>
        </Row>
        <TaskEditForm />
      </TaskDataProvider>
    </Container>
  );
};

export default JobManager;
