import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import { TaskDataProvider } from './contexts/TaskDataContext.js';

import TaskTable from './components/TaskTable.jsx';
import TaskAddForm from './components/TaskAddForm.jsx';
import TaskEditForm from './components/TaskEditForm.jsx';
import TaskCompleteForm from './components/TaskCompleteForm.jsx';

const App = () => {
  const [title, setTitle] = React.useState("Home");
  const [username, setUsername] = React.useState("John Doe");
  const [activeProfileId, setActiveProfileId] = React.useState("A1B2C3");

  return (
    <div className="app">
      <Container>
        <h1>Task Manager - {title}</h1>
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
    </div>
  );
}

export default App;
