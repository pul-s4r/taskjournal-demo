import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';

import { TaskDataContext } from '../contexts/TaskDataContext.js';

const TaskCompleteForm = (props) => {
  const { contract } = props;
  const taskData = useContext(TaskDataContext);
  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
  });

  const [formData, setFormData] = useState({
    id: 0,
    reason: "",
  });

  const handleFormSubmit = () => {
    console.log("Sending", formData);
    contract.markComplete(formData.id, formData.reason).then((payload) => {
      console.log("Got: ", payload);
      setDisplayOptions({...displayOptions, status: typeof payload !== 'undefined' ? "Success" : "Error"});
    }).catch((error) => {
      setDisplayOptions({...displayOptions, status: "Error"});
      console.warn("Error marking task complete: ", error); 
    });
  };

  const handleFormClear = () => {
      setFormData({
        id:      0,
        reason:  "",
      });
      setDisplayOptions({
        status: "Pending",
      });
  };

  return(
    <Container>
      <Row>
        <h1>Complete Job</h1>
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
              type="BigInt"
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
        <Row>

        </Row>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Remarks
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
            <Badge bg={(displayOptions.status === "Success" ? "success" : displayOptions.status === "Error" ? "danger" : "secondary")}>{displayOptions.status}</Badge>
          </Col>
        </Row>

    </Container>
  );
};

export default TaskCompleteForm;
