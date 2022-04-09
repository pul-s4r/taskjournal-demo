import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import { ContractContext } from '../contexts/ContractContext.js';

const TaskAddForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    due:  "",
  });
  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
  });

  const contract = useContext(ContractContext);

  const handleFormSubmit = () => {
    if (contract.hasOwnProperty('createTask')) {
      let due = new Date(formData.due);
      due = Math.floor(due.getTime()/1000);
      contract.createTask(formData.name, formData.desc, due, formData.fee).then((payload) => {
        setDisplayOptions({...displayOptions, status: "Success"});
      })
      .catch((error) => {
        setDisplayOptions({...displayOptions, status: "Error"});
      });
    }
  };

  const handleFormClear = () => {
    setFormData({
      name: "",
      desc: "",
      due:  "",
      fee: 0,
    });
    setDisplayOptions({
      status: "Pending",
    });
  };

  return(
    <Container>
      <Row>
        <h1>Add Job</h1>
      </Row>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Task Name
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
            <Form.Control
              id="inputTaskName"
              placeholder="Task Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Description
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
            <Form.Control
              id="inputTaskDesc"
              placeholder="Description"
              value={formData.desc}
              onChange={(e) => setFormData({...formData, desc: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Deadline
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
            <Form.Control
              id="inputTaskDeadline"
              placeholder="Deadline"
              type="date"
              value={formData.due}
              onChange={(e) => setFormData({...formData, due: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Fee
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
            <Form.Control
              id="inputTaskFee"
              placeholder="Fee"
              type="number"
              value={formData.fee}
              onChange={(e) => setFormData({...formData, fee: e.target.value})}
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
              Add
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
