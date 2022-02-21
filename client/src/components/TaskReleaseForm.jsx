import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import TaskAPI from '../api/taskAPI.js';
// import { PaymentDataContext, PaymentDataDispatchContext } from '../contexts/PaymentDataContext.js';

const TaskReleaseForm = (props) => {
  // const paymentData = useContext(PaymentDataContext);
  // const setPaymentData = useContext(PaymentDataDispatchContext);

  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
    contractorBalance: 'N/A',
    contractBalance: 'N/A'
  });

  const handleFormSubmit = () => {
    // TaskAPI.getContractorAccountBalance()
    //   .then((data) => data.payload)
    //   .then((data) => {
    //     console.log("Amount: ", data);
      TaskAPI.transferToContractor().then((data) => {

      });
      // });
  };

  const handleFormRefresh = () => {
    Promise.all([
      TaskAPI.getContractorAccountBalance().then(data => data.payload),
      TaskAPI.getContractBalance().then(data => data.payload)
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
