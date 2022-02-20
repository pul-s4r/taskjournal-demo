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
            {paymentData.finalised}
          </Col>
        </Form.Group>
        <Form.Group className="row form_elem_p mb-3 align-items-center">
          <Col sm={4}>
            <Form.Label>
              Amount Payable
            </Form.Label>
          </Col>
          <Col sm={8} md={8} className="text-center">
            {paymentData.amountPayable}
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
