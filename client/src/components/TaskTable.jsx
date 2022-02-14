import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { formatDate } from '../utils/utils.js';

import { TaskDataProvider, TaskDataContext, TaskDataDispatchContext } from '../contexts/TaskDataContext.js';

const TaskTable = (props) => {
  // const [taskData, setTaskData] = useState([]);

  const taskData = useContext(TaskDataContext);
  const setTaskData = useContext(TaskDataDispatchContext); 

  const [displayOptions, setDisplayOptions] = useState({
    showCompleted: false,
  });
  const [radioValue, setRadioValue] = useState('Yes');
  const radios = [
    {name: 'Yes', value: true},
    {name: 'No', value: false},

  ];

  const handleTaskDataUpdate = () => {

  };

  useEffect(() => {

  }, []);

  return(
    <Container>
      <Row>
        <h1>Task List</h1>
      </Row>
      <Row>
        <Col sm={2} className="align-items-center">Show Completed: </Col>
        <Col sm={2}>
          <ButtonGroup>
            {radios.map((radio, value) => (
              <ToggleButton
                key={value}
                id={`radio-${value}`}
                type="radio"
                variant={radio.value === true ? 'outline-success' : 'outline-secondary'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => {setRadioValue(e.currentTarget.value); setDisplayOptions({...displayOptions, showCompleted: e.currentTarget.value})}}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Table responsive striped size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date Created</th>
            <th>Deadline</th>
            <th>Completed</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(taskData) && taskData.length ? taskData.map((task) => (
              <tr>
                <th>{task[0]}</th>
                <th>{task[1]}</th>
                <th>{task[2]}</th>
                <th>{task[3]}</th>
                <th>{task[4]}</th>
                <th>{task[5] === true ? "Yes" : "No"}</th>
                <th></th>
              </tr>
            ))
            : <tr>
              <td></td>
              <td></td>
              <td scope="row">No tasks to display</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          }
        </tbody>
      </Table>
    </Container>
  );
};

export default TaskTable;
