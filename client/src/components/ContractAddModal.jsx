import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';

import ContractAPI from '../api/contractAPI.js';

const contractOptions = [
  {name: "CONTRACT", text: "Contract"},
  {name: "LIBRARY", text: "Library"}
];

const initialFormData = {
  name: "",
  type: "Contract",
  srcs: [],
  srcNames: [],
  main: "",
  link: "",
};

const ContractAddModal = (props) => {
  const [show, setShow] = useState(false);
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
      ContractAPI.addContractDef(formData.name, formData.type.toUpperCase(), formData.srcs, formData.main)
      .then((result) => {

      });
      handleClose();
    }
  };

  const findErrors = () => {
    const { name, type, srcs, main } = formData;
    const newErrors = {};
    if ( !name || name === "" ) newErrors.name = "Name cannot be blank";
    if ( !type || type === "" ) newErrors.type = "Must select a valid contract type";
    if ( !srcs || srcs.length === 0) newErrors.srcs = "Must upload at least one source file";
    if ( !main || main === "") newErrors.main = "Must select a main source file";
    return newErrors;
  };

  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Add Definition
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contract Definition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={false}>
            <Form.Group className="mb-3" controlId="addForm.Name">
              <Form.Label>Contract Name</Form.Label>
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
            <Form.Group className="mb-3" controlId="addForm.Type">
              <Form.Label>Contract Type</Form.Label>
              <Form.Select
                onClick={(e) => {
                  setFormData({... formData, type: e.target.value});
                }}
                isInvalid={ !!errors.type }
              >
                {contractOptions ? contractOptions.map((entry) => {
                  return (<option key={`contractopt-${entry.text}`}>{entry.text}</option>)
                }) : (<option>{"Contract"}</option>)}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.type}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addForm.Srcs">
              <Form.Label>Files</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={(e) => {
                  setFormData({... formData, srcs: e.target.files, srcNames: Object.values(e.target.files).map(file => file.name)})
                }}
                isInvalid={ !!errors.srcs }
              />
              <Form.Control.Feedback type="invalid">
                {errors.srcs}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addForm.Main">
              <Form.Label>Main File</Form.Label>
              <Form.Select
                onClick={(e) => {
                  setFormData({... formData, main: e.target.value});
                }}
                isInvalid={ !!errors.main }
              >
                {formData.srcNames ? formData.srcNames.map(option => (<option key={`mainlist-${option}`}>{option}</option>)) : (<option>{''}</option>)}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.main}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="addForm.Link">
              <Form.Label>Link Other Library</Form.Label>
              <Form.Select disabled>
                <option>Coming Soon ...</option>
              </Form.Select>
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
    </Container>
  );
};

export default ContractAddModal;
