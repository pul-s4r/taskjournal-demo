import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';

import { ContractDefDataContext, ContractDefDataDispatchContext } from '../contexts/ContractDefDataContext.js';

import ContractAPI from '../api/contractAPI.js';

const initialFormData = {
  name: "",
  contractdefName: "",
  contractdefId: "",
  network: "",
};

const contractdefOptions = [
  {name: "CONTRACT", text: "Contract"},
  {name: "LIBRARY", text: "Library"}
];

const networkOptions = [
  {name: "LOCALHOST", text: "Localhost (127.0.0.1)"},
];

const ContractDeployModal = (props) => {
  const { show, setShow } = props;
  const contractDefData = useContext(ContractDefDataContext);
  const setContractDefData = useContext(ContractDefDataDispatchContext);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    setFormData(initialFormData);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = findErrors();
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors);
    } else {
      ContractAPI.addContractInst(formData.name, formData.contractdefId, formData.network)
      .then((result) => {
        console.log(result);
      });
      handleClose();
    }
  };

  const findErrors = () => {
    const { name, contractdefName, network } = formData;
    const newErrors = {};
    if ( !name || name === "" ) newErrors.name = "Name cannot be blank";
    if ( !contractdefName || contractdefName === "" ) newErrors.contractdefName = "Must select a valid contract definition";
    if ( !network || network === "" ) newErrors.network = "Must select a valid network";
    return newErrors;
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Deploy Contract</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={false}>
          <Form.Group className="mb-3" controlId="deployForm.Name">
            <Form.Label>Deployment Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({... formData, name: e.target.value});
              }}
              required
              isInvalid={ !!errors.name }
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="deployForm.Def">
            <Form.Label>Contract to Deploy</Form.Label>
            <Form.Select
              onClick={(e) => {
                const ids = contractDefData.filter(entry => entry['name'] === e.target.value);
                setFormData({... formData, contractdefName: e.target.value, contractdefId: ids ? ids[0]["_id"] : ""});
              }}
              isInvalid={ !!errors.contractdefName }
            >
              {contractDefData && Array.isArray(contractDefData) ? contractDefData.map((entry) => {
                return (<option key={`defopt-${entry.name}`}>{entry.name}</option>)
              }) : (<option>{"Contract"}</option>)}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.contractdefName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="deployForm.Network">
            <Form.Label>Network</Form.Label>
            <Form.Select
              onClick={(e) => {
                setFormData({... formData, network: e.target.value});
              }}
              isInvalid={ !!errors.network }
            >
              {networkOptions ? networkOptions.map((entry) => {
                return (<option key={`netopt-${entry.text}`}>{entry.text}</option>)
              }) : (<option>{"Contract"}</option>)}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.network}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={
          handleClose
        }>
          Cancel
        </Button>
        <Button variant="primary" onClick={(e) => {
            handleSubmit(e);
        }}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );

};

export default ContractDeployModal;
