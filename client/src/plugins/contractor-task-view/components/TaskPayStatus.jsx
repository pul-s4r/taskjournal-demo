import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import TaskAPI from '../api/taskAPI.js';
import { PaymentDataContext, PaymentDataDispatchContext } from '../contexts/PaymentDataContext.js';

const TaskPayStatus = (props) => {
  const paymentData = useContext(PaymentDataContext);
  const setPaymentData = useContext(PaymentDataDispatchContext);

  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
  });

  const handleFormSubmit = () => {
    Promise.all([
      TaskAPI.isFinalised().then(data => data.payload), TaskAPI.getAmountPayable().then(data => data.payload),
      TaskAPI.isPaid().then(data => data.payload),
      TaskAPI.isReleased().then(data => data.payload)
    ])
      .then((values) => setPaymentData(
        {... paymentData,
          finalised: values[0],
          amountPayable: values[1],
          paidToContract: values[2],
          released: values[3]
        })
      );

  };

  const handleFormClear = () => {

  };

  return(
    <Container>
      <Row>
        <h1>Payment Status</h1>
      </Row>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Contract is Finalised
            </Form.Label>
          </Col>
          <Col sm={8} md={8} className="text-center">
            {paymentData.finalised ? "Yes" : "No"}
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Amount Payable
            </Form.Label>
          </Col>
          <Col sm={8} md={8} className="text-center">
            {Number(`0x${paymentData.amountPayable}`)}
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Paid to Contract
            </Form.Label>
          </Col>
          <Col sm={8} md={8} className="text-center">
            {paymentData.paidToContract ? "Yes" : "No"}
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Released
            </Form.Label>
          </Col>
          <Col sm={8} md={8} className="text-center">
            {paymentData.released ? "Yes" : "No"}
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
              Refresh
            </Button>
          </Col>
        </Row>

    </Container>
  );
};

export default TaskPayStatus;
