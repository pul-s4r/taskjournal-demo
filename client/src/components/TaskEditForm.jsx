import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const TaskEditForm = (props) => {
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
              value={""}
              onChange={(e) => {}}
            />
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
              value={""}
              onChange={(e) => {}}
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
              Submit
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

export default TaskEditForm;
