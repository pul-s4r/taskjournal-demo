import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { formatDate } from '../utils/utils.js';

import { ethers } from 'ethers';
import { ContractContext, ContractDispatchContext } from '../contexts/ContractContext.js';
import { TaskDataContext, TaskDataDispatchContext } from '../contexts/TaskDataContext.js';

const TaskTable = (props) => {
  const { isManager, name, address: addr, abi, provider } = props;

  const { contract } = useContext(ContractContext);
  const { initialise } = useContext(ContractDispatchContext);

  const taskData = useContext(TaskDataContext);
  const setTaskData = useContext(TaskDataDispatchContext);
  const [taskCom, setTaskCom] = useState([]);

  const [displayOptions, setDisplayOptions] = useState({
    showCompleted: true,
  });
  const [radioValue, setRadioValue] = useState('Yes');
  const radios = [
    {name: 'Yes', value: true},
    {name: 'No', value: false},

  ];

  useEffect(() => {
    try {
      initialise(name, addr, abi, provider);
    } catch (error) {
      console.warn("Error initialising contract: ", error);
    }
  }, [name, addr, abi, provider]);

  const contractGetTasks = () => {
    return new Promise((resolve, reject) => {
      if (contract.hasOwnProperty('getTaskIds')) {
        const taskList = contract.getTaskIds().then((taskIds) => {
          const taskList = [];
          const taskCom = [];
          taskIds.forEach((taskId) => {
            taskList.push(contract.getTask(taskId));
            taskCom.push(contract.getTaskCompletionStatus(taskId));
          });

          return Promise.all([Promise.all(taskList), Promise.all(taskCom)]);
        })
        .then((tasks) => {
          var taskList = tasks[0];
          var taskCom = tasks[1];
          // taskList.forEach((task, idx) => {taskList[idx].push(taskCom[idx])});
          resolve([taskList, taskCom]);
          return taskList;
        })
        .catch((error) => {
          return [];
        });
      } else {
        reject([]);
      }
    });

  };

  const handleTaskDataUpdate = () => {
    contractGetTasks().then((newData) => {
      // console.log("ND: ", newData);
      setTaskData(newData[0]);
      setTaskCom(newData[1]);
    });
  };

  useEffect(() => {
    handleTaskDataUpdate();
  }, []);

  useEffect(() => {

  }, [displayOptions.showCompleted]);

  return(
    <Container>
      <Row>
        <h1>Job List</h1>
      </Row>
      <Row>
        <Col sm={2} className="align-items-center">Show Completed: </Col>
        <Col sm={2}>
          <ToggleButtonGroup
            type="radio"
            name="showCompleted"
            defaultValue={[true]}
          >
            {radios.map((radio, value) => (
              <ToggleButton
                key={value}
                id={`radio-${value}`}
                type="radio"
                variant={radio.value === true ? 'outline-success' : 'outline-secondary'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => {
                  setRadioValue(eval(e.currentTarget.value));
                  setDisplayOptions({...displayOptions, showCompleted: eval(e.currentTarget.value)});
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Col>
        <Col sm={2}>
          <Button onClick={() => handleTaskDataUpdate()}>
            Refresh
          </Button>
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
            <th>Job Fee</th>
            <th>Completed</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            typeof taskData !== 'undefined' && Array.isArray(taskData) && taskData.length ?
              taskData.filter((task) => displayOptions.showCompleted === true ? task : (task['6'] === false ? task : undefined)
            ).map((task, idx) => {return (
                <tr key={`taskData${task[0]}`}>
                  <th>{task[0].toNumber()}</th>
                  <th>{task[1]}</th>
                  <th>{task[2]}</th>
                  <th>{formatDate(task[3].toNumber())}</th>
                  <th>{formatDate(task[4].toNumber())}</th>
                  <th>{task[5].toNumber()}</th>
                  <th>{taskCom[idx] === true ? "Yes" : "No"}</th>
                  {isManager ? (
                    <th>
                      <Button variant="outline-danger">
                        Delete
                      </Button>
                    </th>
                  ) : <th>{' '}</th>}
                </tr>
              )}
            )
            : <tr>
              <td></td>
              <td></td>
              <td scope="row">No tasks to display</td>
              <td></td>
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
