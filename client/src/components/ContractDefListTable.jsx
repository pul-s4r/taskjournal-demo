import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { formatDateString } from '../utils/utils.js';

import ContractAPI from '../api/contractAPI.js';
import { ContractDefDataContext, ContractDefDataDispatchContext } from '../contexts/ContractDefDataContext.js';
// import { AuthContext } from '../contexts/AuthContext.js';

const ContractDefListTable = (props) => {
  const contractDefData = useContext(ContractDefDataContext);
  const setContractDefData = useContext(ContractDefDataDispatchContext);
  // const authData = useContext(AuthContext);

  const handleContractDefDataUpdate = () => {
    ContractAPI.getContractDefs().then((newData) => {
      setContractDefData(newData.data);
    });
  };

  const handleContractDefDelete = (id) => {
    ContractAPI.deleteContractDef(id).then((result) => {
      console.log(result);
      if (result) {
        setContractDefData(contractDefData.filter(entry => entry['_id'] !== id));
      }
    });
  };

  console.log(contractDefData);

  useEffect(() => {
    handleContractDefDataUpdate();
  }, []);

  return (
    <Container>
      <Row>
        <h1>Contract Definition List</h1>
      </Row>
      <Row>
        <Col sm={2}>
          <Button onClick={() => handleContractDefDataUpdate()}>
            Refresh
          </Button>
        </Col>
      </Row>
      <Table responsive striped size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Sources</th>
            <th>Date Created</th>
            <th>Date Modified</th>
            <th>Permissions</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            typeof contractDefData !== 'undefined' && Array.isArray(contractDefData) && contractDefData.length ?
              contractDefData.map((contractDef, idx) => (
                <tr key={`contractDefData${idx}`}>
                  <th>{idx}</th>
                  <th>{contractDef['name']}</th>
                  <th>{Object.keys(contractDef['input']['sources']).join(", ")}</th>
                  <th>{formatDateString(contractDef['dateCreated'])}</th>
                  <th>{formatDateString(contractDef['dateModified'])}</th>
                  <th>{' '}</th>
                  <th>
                    <Button variant="outline-primary">
                      Edit
                    </Button>
                    {' '}
                    <Button variant="outline-danger"
                      onClick={() => handleContractDefDelete(contractDef['_id'])}
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
          </tr>
          }
        </tbody>
      </Table>
    </Container>
  );
};

export default ContractDefListTable;
