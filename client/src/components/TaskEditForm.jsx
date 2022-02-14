import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { TaskDataContext } from '../contexts/TaskDataContext.js';

const TaskEditForm = (props) => {
  const taskData = useContext(TaskDataContext);

  const [formData, setFormData] = useState({
    id: 0,
    numDays: 0,
    reason: "",
  });

  const handleFormSubmit = () => {

  };

  const handleFormClear = () => {

  };

  return(
    <Container>
      <Row>
        <h1>Delay Task</h1>
      </Row>
        <Form.Group className="row form_elem_p mb-3 align-items-center" controlId="selectTask">
          <Col sm={2}>
            <Form.Label>
              Task ID
            </Form.Label>
          </Col>
          <Col sm={6} md={6}>
            <Form.Select
              id="selectTask"
              placeholder="Task ID"
              value={formData.id}
              onClick={(e) => setFormData({...formData, id: e.target.value})}
              onChange={(e) => setFormData({...formData, id: e.target.value})}
              >
              {
                Array.isArray(taskData) && taskData.length ? taskData.map((task) => typeof task[0] !== 'undefined' ? (
                  <option key={'inputTaskId' + task[0]}>task[0]</option>
                ) : <option>Undefined</option>) 
                : <option key={"inputTaskBlank"}></option>
              }
            </Form.Select>

          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center" controlId="inputDelayDuration">
          <Col sm={2}>
            <Form.Label>
              Delay Period (Days)
            </Form.Label>
          </Col>
          <Col sm={6} md={6}>
            <Form.Control
              id="inputDelayDuration"
              placeholder="# Days"
              type="number"
              value={formData.numDays}
              onChange={(e) => setFormData({...formData, numDays: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center" controlId="inputReason">
          <Col sm={2}>
            <Form.Label>
              Reason for Change
            </Form.Label>
          </Col>
          <Col sm={6} md={6}>
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
        </Row>

    </Container>
  );
};

export default TaskEditForm;
