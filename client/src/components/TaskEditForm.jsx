import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import TaskAPI from '../api/taskAPI.js';

import { TaskDataContext } from '../contexts/TaskDataContext.js';

const TaskEditForm = (props) => {
  const taskData = useContext(TaskDataContext);
  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
  });

  const [formData, setFormData] = useState({
    id: 0,
    numDays: 0,
    reason: "",
  });

  const handleFormSubmit = () => {
    console.log("Sending", formData);
    TaskAPI.delayTask(formData.id, formData.numDays, formData.reason).then((payload) => {
      setDisplayOptions({...displayOptions, status: payload.status});
    });
  };

  const handleFormClear = () => {
      setFormData({
        id:      "",
        numDays: "",
        reason:  "",
      });
      setDisplayOptions({
        status: "Pending",
      });
  };

  return(
    <Container>
      <Row>
        <h1>Delay Job</h1>
      </Row>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>
              Task ID
            </Form.Label>
          </Col>
          <Col sm={4} md={4}>
            <Form.Select
              id="selectTask"
              placeholder="Task ID"
              value={formData.id}
              onClick={(e) => setFormData({...formData, id: e.target.value})}
              onChange={(e) => setFormData({...formData, id: e.target.value})}
              >
              {
                Array.isArray(taskData) && taskData.length ? taskData.map((task) => typeof task[0] !== 'undefined' ? (
                  <option key={'inputTaskId' + task[0]}>{task[0]}</option>
                ) : <option>Undefined</option>)
                : <option key={"inputTaskBlank"}></option>
              }
            </Form.Select>

          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>
              Delay Period (Days)
            </Form.Label>
          </Col>
          <Col sm={4} md={4}>
            <Form.Control
              id="inputDelayDuration"
              placeholder="# Days"
              type="number"
              value={formData.numDays}
              onChange={(e) => setFormData({...formData, numDays: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>
              Reason for Change
            </Form.Label>
          </Col>
          <Col sm={4} md={4}>
            <Form.Control
              id="inputReason"
              placeholder="Description"
              value={formData.reason}
              onChange={(e) => setFormData({...formData, reason: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Row>
          <Col sm={2}>
          </Col>
          <Col sm={1}>
            <Button
              variant="primary"
              onClick={() => handleFormSubmit()}
            >
              Submit
            </Button>
          </Col>
          <Col sm={1}>
            <Button
              variant="danger"
              onClick={() => handleFormClear()}
              >
              Clear
            </Button>
          </Col>
          <Col sm={1}>
            <Badge bg={(displayOptions.status === "Success" ? "success" : displayOptions.status === "Error" ? "danger" : displayOptions.status === "Sent" ? "info" : "secondary")}>{displayOptions.status}</Badge>
          </Col>
        </Row>

    </Container>
  );
};

export default TaskEditForm;