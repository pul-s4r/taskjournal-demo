import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import TaskTable from './components/TaskTable.jsx';
import TaskAddForm from './components/TaskAddForm.jsx';
import TaskEditForm from './components/TaskEditForm.jsx';

const App = () => {
  const [title, setTitle] = React.useState("Home");
  const [username, setUsername] = React.useState("John Doe");
  const [activeProfileId, setActiveProfileId] = React.useState("A1B2C3");

  return (
    <div className="app">
      <Container>
        <h1>Manager - {username}</h1>
        <TaskTable />
        <TaskAddForm />
        <TaskEditForm />
      </Container>
    </div>
  );
}

export default App;
