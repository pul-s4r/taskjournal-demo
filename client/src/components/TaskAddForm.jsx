import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import TaskAPI from '../api/taskAPI.js';

const TaskAddForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    due:  "",
  });
  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
  });

  const handleFormSubmit = () => {
    // console.log("Sending: ", formData.name, formData.desc, Date(formData.due))
    TaskAPI.createTask(formData.name, formData.desc, formData.due).then((payload) => {
      setDisplayOptions({...displayOptions, status: payload.status});
    });
  };

  const handleFormClear = () => {
    setFormData({
      name: "",
      desc: "",
      due:  "",
    });
    setDisplayOptions({
      status: "Pending",
    });
  };

  return(
    <Container>
      <Row>
        <h1>Add Entry</h1>
      </Row>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>
              Task Name
            </Form.Label>
          </Col>
          <Col sm={6} md={6}>
            <Form.Control
              id="inputTaskName"
              placeholder="Task Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>
              Description
            </Form.Label>
          </Col>
          <Col sm={6} md={6}>
            <Form.Control
              id="inputTaskDesc"
              placeholder="Description"
              value={formData.desc}
              onChange={(e) => setFormData({...formData, desc: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>
              Deadline
            </Form.Label>
          </Col>
          <Col sm={6} md={6}>
            <Form.Control
              id="inputTaskDeadline"
              placeholder="Deadline"
              type="date"
              value={formData.due}
              onChange={(e) => setFormData({...formData, due: e.target.value})}
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
              Add Task
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
            <Badge bg={(displayOptions.status === "Success" ? "success" : displayOptions.status === "Error" ? "danger" : "secondary")}>{displayOptions.status}</Badge>
          </Col>
        </Row>

    </Container>
  );
};

export default TaskAddForm;
