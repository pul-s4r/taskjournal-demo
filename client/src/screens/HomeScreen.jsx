import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import TaskTable from '../components/TaskTable.jsx';

import { TaskDataProvider } from '../contexts/TaskDataContext.js';

const HomeScreen = (props) => {
  const [title, setTitle] = React.useState("Home");

  return (
    <Container>
      <Header/>
      <h1>Home</h1>
      <TaskDataProvider>
        <TaskTable isManager={false}/>
      </TaskDataProvider>
    </Container>
  );
};

export default HomeScreen;
