import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { formatDateString } from '../utils/utils.js';

import ContractDeployModal from './ContractDeployModal.jsx';

import ContractAPI from '../api/contractAPI.js';
import { ContractInstDataContext, ContractInstDataDispatchContext } from '../contexts/ContractInstDataContext.js';

const ContractInstListTable = (props) => {
  const { show, setShow } = props;
  const contractInstData = useContext(ContractInstDataContext);
  const setContractInstData = useContext(ContractInstDataDispatchContext);
  // const authData = useContext(AuthContext);

  const handleContractInstDataUpdate = () => {
    ContractAPI.getContractInsts().then((newData) => {
      setContractInstData(newData.data);
    });
  };

  const handleContractInstDelete = (id) => {
    ContractAPI.deleteContractInst(id).then((result) => {
      console.log(result);
      if (result) {
        setContractInstData(contractInstData.filter(entry => entry['_id'] !== id));
      }
    });
  };

  useEffect(() => {
    handleContractInstDataUpdate();
  }, []);

  return (
    <Container>
      <Row>
        <h1>Contract Deployment List</h1>
      </Row>
      <Row>
        <Col sm={2}>
          <Button onClick={() => handleContractInstDataUpdate()}>
            Refresh
          </Button>
        </Col>
        <Col sm={2}>
          <Button onClick={() => setShow(true)}>
            Deploy Contract
          </Button>
        </Col>
      </Row>
      <ContractDeployModal show={show} setShow={setShow}/>
      <Table responsive striped size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contract Instance</th>
            <th>Date Created</th>
            <th>Provider URL</th>
            <th>Address</th>
            <th>Users</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            typeof contractInstData !== 'undefined' && Array.isArray(contractInstData) && contractInstData.length ?
              contractInstData.map((contractInst, idx) => (
                <tr key={`contractInstData${idx}`}>
                  <th>{idx}</th>
                  <th>{contractInst['name']}</th>
                  <th>{contractInst['contractdefName']}</th>
                  <th>{formatDateString(contractInst['dateCreated'])}</th>
                  <th>{contractInst['providerUrl']}</th>
                  <th>{contractInst['address']}</th>
                  <th>{contractInst['users']}</th>
                  <th>
                    <Button variant="outline-primary">
                      Edit
                    </Button>
                    {' '}
                    <Button variant="outline-danger"
                      onClick={() => handleContractInstDelete(contractInst['_id'])}
                    >
                      Delete
                    </Button>
                  </th>
                </tr>
              )
            )
            : <tr>
            <td></td>
            <td></td>
            <td scope="row">No contract definitions to display</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          }
        </tbody>
      </Table>
    </Container>
  );
};

export default ContractInstListTable;
