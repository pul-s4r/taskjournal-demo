import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import { ethers } from 'ethers';

import { ContractContext } from '../contexts/ContractContext.js';
import { PaymentDataContext, PaymentDataDispatchContext } from '../contexts/PaymentDataContext.js';

const TaskPayForm = (props) => {
  const paymentData = useContext(PaymentDataContext);
  const setPaymentData = useContext(PaymentDataDispatchContext);
  const { authData, web3Provider, address, balance, signer } = props;

  const contract = useContext(ContractContext);

  const [formData, setFormData] = useState({
    amount: "",
    address:  "",
  });
  const [displayOptions, setDisplayOptions] = useState({
    status: "Pending",
    ownerBalance: "N/A",
    contractBalance: "N/A",
    contractAddress: "",
  });

  useEffect(() => {
    handleFormRefresh();
  }, []);

  const handleButtonFinalise = () => {
    contract.finalise().then((data) => {
    });
    handleFormRefresh();
  };

  const handleFormSubmit = () => {
    // Handle payment from wallet
    console.log("Amount: ", formData.amount);
    signer.sendTransaction({
      from: address,
      to: displayOptions.contractAddress,
      value: ethers.utils.parseEther(formData.amount),
      nonce: web3Provider.getTransactionCount(address, "latest"),
      gasLimit: ethers.utils.hexlify(100000),
      gasPrice: web3Provider.getGasPrice(),
    })
    .then(transaction => {
      console.log("Sent transaction: ", transaction);
    })

  };

  const handleFormRefresh = () => {
    const hasMethods = ['isFinalised', 'getAmountPayable', 'getContract', 'getContractBalance'].map(method => contract.hasOwnProperty(method));
    if (hasMethods.every(status => status === true)) {
      Promise.all([
        contract.isFinalised().then(data => data),
        contract.getAmountPayable().then(data => data),
        contract.getContract().then(data => data),
        contract.getContractBalance().then(data => data)
      ])
        .then((values) => {
          console.log("ContractBalance: ", values[3]);
            setPaymentData(
            {... paymentData,
              finalised: values[0],
              amountPayable: values[1]
            });
            console.log("Address: ", values[2])
            setDisplayOptions({...displayOptions, ownerBalance: (authData.accountType === "OWNER" ? balance : "N/A (not owner)"), contractBalance: values[3], contractAddress: values[2]});

          }
        );
    }
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
            {Number(`0x${displayOptions.contractBalance}`).toFixed(5)}
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
