import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { AuthContext, AuthDispatchContext } from '../contexts/AuthContext.js';
import UserAPI from '../api/userAPI.js';

const SUCCESS = "Login Successful";

const RegisterForm = (props) => {
  const authData = useContext(AuthContext);
  const setAuthData = useContext(AuthDispatchContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    accountType: "CONTRACTOR",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = React.useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (authData.token) {
      nav("/");
    }
  }, [authData, nav]);

  const messageComponent = (
    <Alert
      variant={String(message).match(/Success/i) ? "success" : "danger"}>
      {message}
    </Alert>
  );

  const handleAccTypeChange = (e) => {
    console.log(e.target.value);
  };

  const handleFormSubmit = () => {
    UserAPI.register(formData.email, formData.password, formData.accountType).then((data) => {
      if (data.hasOwnProperty("token") && !data.hasOwnProperty("errors")) {
        setAuthData({
          email: data.email,
          accountType: data.accountType,
          token: data.token,
        });
        setMessage(SUCCESS);
      } else {
        setMessage(`Failure: ${JSON.stringify(data.errors)}`);
      }
    });
  };

  return (
    <Container>
      <Form.Group controlId="formBasicEmail" className="row form_elem_p mb-3 align-items-center">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword" className="row form_elem_p mb-3 align-items-center">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
      </Form.Group>
      <Form.Group className="row form_elem_p mb-3 align-items-center">
        <Form.Label>Account Type</Form.Label>
        <div key={`inline-acc-type-select`} className="mb-3">
          <Form.Check
            inline
            checked={formData.accountType === "CONTRACTOR"}
            type={"radio"}
            id={`radio-contractor`}
            label={`Contrator`}
            name={`group-acc-type-select`}
            onChange={(e) => setFormData({...formData, accountType: "CONTRACTOR"})}
          />
          <Form.Check
            inline
            type={"radio"}
            id={`radio-contractor`}
            label={`Owner`}
            name={`group-acc-type-select`}
            onChange={(e) => setFormData({...formData, accountType: "OWNER"})}
          />
        </div>
      </Form.Group>
      {message ? messageComponent : null}
      <Row className="d-grid mb-3 align-items-center">
        <Button
          variant="primary"
          onClick={() => handleFormSubmit()}
        >
          Register
        </Button>
      </Row>

    </Container>
  )
};

export default RegisterForm;
