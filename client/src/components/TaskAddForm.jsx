import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const TaskAddForm = (props) => {
  return(
    <Container>
      <Row>
        <h1>Add Entry</h1>
      </Row>
        <Form.Group className="row form_elem_p mb-3 align-items-center" controlId="inputTaskName">
          <Col sm={2}>
            <Form.Label>
              Task Name
            </Form.Label>
          </Col>
          <Col sm={6} md={6}>
            <Form.Control
              id="inputTaskName"
              placeholder="Task Name"
              value={""}
              onChange={(e) => {}}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center" controlId="inputTaskDesc">
          <Col sm={2}>
            <Form.Label>
              Description
            </Form.Label>
          </Col>
          <Col sm={6} md={6}>
            <Form.Control
              id="inputTaskDesc"
              placeholder="Description"
              value={""}
              onChange={(e) => {}}
            />
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center" controlId="inputTaskDeadline">
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
              value={""}
              onChange={(e) => {}}
            />
          </Col>
        </Form.Group>
        <Row>
          <Col sm={2}>
          </Col>
          <Col sm={2}>
            <Button
              variant="primary"
              onClick={() => {}}
            >
              Add Task
            </Button>
          </Col>
          <Col sm={2}>
            <Button
              variant="danger"
              onClick={() => {}}
              >
              Clear
            </Button>
          </Col>
        </Row>

    </Container>
  );
};

export default TaskAddForm;
