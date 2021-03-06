import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';

import { TaskDataContext } from '../contexts/TaskDataContext.js';

const TaskEditForm = (props) => {
  const { contract } = props;
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
    contract.delayTaskByDays(formData.id, formData.numDays, formData.reason).then((payload) => {
      setDisplayOptions({...displayOptions, status: "Success"});
    }).catch((error) => {
      setDisplayOptions({...displayOptions, status: "Error"});
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
          <Col sm={4}>
            <Form.Label>
              Task ID
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
            <Form.Select
              id="selectTask"
              placeholder="Task ID"
              value={formData.id}
              onClick={(e) => setFormData({...formData, id: e.target.value})}
              onChange={(e) => setFormData({...formData, id: e.target.value})}
              >
              {
                Array.isArray(taskData) && taskData.length ? taskData.map((task) => typeof task[0] !== 'undefined' ? (
                  <option key={'inputTaskId' + task[0].toNumber()}>{task[0].toNumber()}</option>
                ) : <option>Undefined</option>)
                : <option key={"inputTaskBlank"}></option>
              }
            </Form.Select>

          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col >
            <Form.Label>
              Delay Period (Days)
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
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
          <Col >
            <Form.Label>
              Reason for Change
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
            <Form.Control
              id="inputReason"
              placeholder="Description"
              value={formData.reason}
              onChange={(e) => setFormData({...formData, reason: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Row>
          <Col sm={4}>
          </Col>
          <Col sm={2}>
            <Button
              variant="primary"
              onClick={() => handleFormSubmit()}
            >
              Submit
            </Button>
          </Col>
          <Col sm={2}>
            <Button
              variant="danger"
              onClick={() => handleFormClear()}
              >
              Clear
            </Button>
          </Col>
          <Col sm={2}>
            <Badge bg={(displayOptions.status === "Success" ? "success" : displayOptions.status === "Error" ? "danger" : displayOptions.status === "Sent" ? "info" : "secondary")}>{displayOptions.status}</Badge>
          </Col>
        </Row>

    </Container>
  );
};

export default TaskEditForm;
