import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Header from '../components/Header.jsx';
import TaskTable from '../components/TaskTable.jsx';

import { TaskDataProvider } from '../contexts/TaskDataContext.js';

const JobView = (props) => {
  const [title, setTitle] = React.useState("Home");

  return (
    <Container>
      <Header/>
      <TaskDataProvider>
        <TaskTable isEditable={false}/>
      </TaskDataProvider>
    </Container>
  );
};

export default JobView;
