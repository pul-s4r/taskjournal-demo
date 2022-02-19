import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import TaskAPI from '../api/taskAPI.js';

const TaskPayForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    due:  "",
  });
  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
  });

  const handleFormSubmit = () => {

  };

  const handleFormClear = () => {

  };

  return(
    <Container>
      <Row>
        <h1>Pay Contract</h1>
      </Row>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Amount Payable
            </Form.Label>
          </Col>
          <Col sm={8} md={8} className="text-center">
            Total Payable
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Pay Amount
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
            <Form.Control
              id="inputTaskAmount"
              placeholder="Amount"
              value={formData.desc}
              onChange={(e) => setFormData({...formData, desc: e.target.value})}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Pay Using
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
            <Form.Control
              id="inputTaskFee"
              placeholder="Address"
              type="string"
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

export default TaskPayForm;
