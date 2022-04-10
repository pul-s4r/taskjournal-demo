import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';

import { AuthContext } from '../contexts/AuthContext.js';
import { ContractInstDataContext, ContractInstDataDispatchContext } from '../contexts/ContractInstDataContext.js';
import { ContractContext, ContractDispatchContext } from '../contexts/ContractContext.js';

import ContractAPI from '../api/contractAPI.js';

const initialFormData = {
  template: "",
  address: "",
  provider: "",
  contractdefId: "",
  contractdefName: "",
};

const ContractTemplateSelector = (props) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const { signer } = useContext(AuthContext);

  const contractInstData = useContext(ContractInstDataContext);
  const setContractInstData = useContext(ContractInstDataDispatchContext);
  const { contract, address, provider, abi, contractdefName } = useContext(ContractContext);
  const { initialise, initialiseManual, setAddress, setContractdefName, generateProvider, fetchAndSetABI } = useContext(ContractDispatchContext);

  const handleContractInstDataUpdate = () => {
    ContractAPI.getContractInsts().then((newData) => {
      setContractInstData(newData.data);
    });
  };

  const initContractObject = async () => {

  };

  useEffect(() => {
    handleContractInstDataUpdate();
  }, []);

  // require additional data on available contracts

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
      const contractinst = initialiseManual(formData.contractdefName, formData.address, formData.contractdefId, signer).then((instance) => {
        // console.log("CI: ", instance);
      });
    }
  };

  const findErrors = () => {
    const { template, address, provider, abi } = formData;
    const newErrors = {};
    if ( !template || template === "" ) newErrors.template = "A contract template must be chosen";
    return newErrors;
  };

  return (
    <Container>
      <Form noValidate validated={false}>
        <Form.Group className="mb-3" controlId="templateForm.Template">
          <Form.Label>Template</Form.Label>
          <Form.Select
            onClick={(e) => {
              const formObject = contractInstData.filter(item => item['name'] === e.target.value)[0];
              if (formObject !== undefined) {
                setFormData({... formData, template: e.target.value, contractdefId: formObject['contractdefId'], contractdefName: formObject['contractdefName'], address: formObject['address'], provider: formObject['provider']});
              }
            }}
            isInvalid={ !!errors.template }
          >
            {contractInstData ? contractInstData.map(option => (<option key={`template-${option}`}>{option['name']}</option>)) : (<option>{''}</option>)}
          </Form.Select>
          <Form.Text id="template-info-contractdef" muted>
            Contract of: {formData.contractdefName}
            <br></br>
            At address: {formData.address}
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.template}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      <Row>
        <Col>
          <Button variant="secondary" onClick={
            handleClose
          }>
            Cancel
          </Button>
        </Col>
        <Col>
          <Button variant="info" onClick={(e) => {

          }}>
            Refresh
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={(e) => {
            handleSubmit(e);
          }}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContractTemplateSelector;
