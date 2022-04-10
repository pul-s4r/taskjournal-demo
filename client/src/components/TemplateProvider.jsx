import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';

import { ContractContext } from '../contexts/ContractContext.js';
import { AuthContext } from '../contexts/AuthContext.js';

import JobView from '../plugins/owner-task-view/JobView.jsx';
import JobManager from '../plugins/contractor-task-view/JobManager.jsx';

import ContractAPI from '../api/contractAPI.js';

const ownerTemplateMap = {
  "TaskJournal": (props) => {return (<JobView {...props}/>)},
};

const contractorTemplateMap = {
  "TaskJournal": (props) => {return (<JobManager {...props}/>)},
};

const TemplateProvider = ({ children }) => {
  const { authData, web3Provider, address, balance, signer } = useContext(AuthContext);
  const { contract, contractdefName } = useContext(ContractContext);

  const templateMap = authData.accountType === "OWNER" ? ownerTemplateMap
    : contractorTemplateMap;

  const templateSwitcher = (
    templateMap.hasOwnProperty(contractdefName) ?
    (
      <Container>
        {templateMap[contractdefName]({
          contract,
          authContext: {authData, web3Provider, address, balance, signer}
        })}
      </Container>
    )
    : (<Container>
        <Row><h1>Pending</h1></Row>
        <Row>Please select a valid template</Row>
      </Container>)
  );

  return templateSwitcher;
};

export default TemplateProvider;
