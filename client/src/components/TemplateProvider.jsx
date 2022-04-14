import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import plugin from 'js-plugin';

import { ContractContext } from '../contexts/ContractContext.js';
import { AuthContext } from '../contexts/AuthContext.js';

import '../plugins/contractor-task-view';
import '../plugins/owner-task-view';

// import JobView from '../plugins/owner-task-view/JobView.jsx';
// import JobManager from '../plugins/contractor-task-view/JobManager.jsx';

import ContractAPI from '../api/contractAPI.js';

const ownerTemplateMap = {
  // "TaskJournal": (props) => {return (<JobView {...props}/>)},
  "TaskJournal": (props) => {
    return plugin.invoke("TaskJournal.owner.processInit", props);
  }
};

const contractorTemplateMap = {
  // "TaskJournal": (props) => {return (<JobManager {...props}/>)},
  "TaskJournal": (props) => {
    return plugin.invoke("TaskJournal.contractor.processInit", props);
  },
};

const TemplateProvider = ({ children }) => {
  const { authData, web3Provider, balance, signer } = useContext(AuthContext);
  const { contract, abi, address, contractdefName } = useContext(ContractContext);

  const templateMap = authData.accountType === "OWNER" ? ownerTemplateMap
    : contractorTemplateMap;

  const templateSwitcher = (
    templateMap.hasOwnProperty(contractdefName) ?
    (
      <Container>
        {templateMap[contractdefName]({
          name: contractdefName, address, abi, provider: signer,
          authData, web3Provider, balance
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
