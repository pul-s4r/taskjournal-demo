import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import TaskAPI from '../api/taskAPI.js';
import { PaymentDataContext, PaymentDataDispatchContext } from '../contexts/PaymentDataContext.js';

const TaskPayForm = (props) => {
  const paymentData = useContext(PaymentDataContext);
  const setPaymentData = useContext(PaymentDataDispatchContext);

  const [formData, setFormData] = useState({
    amount: "",
    address:  "",
  });
  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
    ownerBalance: 'N/A',
    contractBalance: 'N/A'
  });

  const handleButtonFinalise = () => {
    TaskAPI.finalise().then((data) => {
    });
  };

  const handleFormSubmit = () => {
    // Pay code
    console.log("Amount: ", formData.amount);
    // TaskAPI.payFromOwner(formData.amount).then((data) => {
    //
    // });
  };

  const handleFormRefresh = () => {
    console.log("Refresh called");
    Promise.all([
      TaskAPI.isFinalised().then(data => data.payload), TaskAPI.getAmountPayable().then(data => data.payload),
      TaskAPI.getOwnerAccountBalance().then(data => data.payload),
      TaskAPI.getContractBalance().then(data => data.payload)
    ])
      .then((values) => {
        console.log("ContractBalance: ", values[3]);
          setPaymentData(
          {... paymentData,
            finalised: values[0],
            amountPayable: values[1]
          });
          setDisplayOptions({...displayOptions, ownerBalance: values[2], contractBalance: values[3]});

        }
      );
  };

  const handleFormClear = () => {

  };

  return(
    <Container>
      <Row>
        <h1>Pay Contract</h1>
      </Row>
      <Row className="mb-3">
        <Col sm={4}>
        </Col>
        <Col>
        </Col>
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
        <Col>
          <Button
            variant="primary"
            onClick={() => handleButtonFinalise()}
          >
            Finalise
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
            {Number(displayOptions.contractBalance).toFixed(5)}
          </Col>
          <Col sm={4}>
            <Form.Label>
              Owner Account Balance
            </Form.Label>
          </Col>
          <Col sm={8} md={8} className="text-center">
            {Number(displayOptions.ownerBalance).toFixed(5)}
          </Col>
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
              Pay Amount
            </Form.Label>
          </Col>
          <Col sm={8} md={8}>
            <Form.Control
              id="inputTaskAmount"
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
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
              disabled
              id="inputTaskFee"
              placeholder="Address"
              type="string"
              value={formData.fee}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
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
              Pay
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
