import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';

const TaskReleaseForm = (props) => {
  const { contract } = props;

  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
    contractorBalance: 'N/A',
    contractBalance: 'N/A'
  });

  const handleFormSubmit = () => {
    contract.transferToContractor().then((data) => {

    });
  };

  const handleFormRefresh = () => {
    Promise.all([
      NaN,
      contract.getBalance().then(data => data)
    ])
      .then((values) => setDisplayOptions(
        {... displayOptions,
          contractorBalance: values[0],
          contractBalance: values[1]
        })
      );

  };

  const handleFormClear = () => {

  };

  return(
    <Container>
      <Row>
        <h1>Release Contract Funds</h1>
      </Row>
      <Row className="mb-3">
        <Col sm={4}>
        </Col>
        <Col>
          <Button
            variant="primary"
            onClick={() => handleFormRefresh()}
          >
            Refresh
          </Button>
        </Col>
      </Row>
      <Form.Group className="row form_elem_p mb-3 align-items-center">
        <Col sm={4}>
          <Form.Label>
            Contract Balance
          </Form.Label>
        </Col>
        <Col sm={8} md={8} className="text-center">
          {Number(`0x${displayOptions.contractBalance}`).toFixed(5)}
        </Col>
        <Col sm={4}>
          <Form.Label>
            Contractor Account Balance
          </Form.Label>
        </Col>
        <Col sm={8} md={8} className="text-center">
          {Number(displayOptions.contractorBalance).toFixed(5)}
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
            Transfer
          </Button>
        </Col>
      </Row>

    </Container>
  );
};

export default TaskReleaseForm;
