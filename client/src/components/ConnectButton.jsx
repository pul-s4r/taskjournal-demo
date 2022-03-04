import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ConnectButton = (props) => {
  return (
    <Container>
      <Row className="d-grid gap-2">
        <Button {...props}>
          {props.statusconnect === "true" ? "Connect" : "Disconnect"}
        </Button>
      </Row>
    </Container>
  );
};

export default ConnectButton;
