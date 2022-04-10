import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';

import { ContractContext } from '../contexts/ContractContext.js';
import { AuthContext } from '../contexts/AuthContext.js';

import JobView from '../plugins/owner-task-view/JobView.jsx';

import ContractAPI from '../api/contractAPI.js';

const ownerTemplateMap = {
  "TaskJournal": (<JobView />),
};

const contractorTemplateMap = {
  "TaskJournal": (<h1>Coming soon</h1>),
};

const TemplateProvider = ({ children }) => {
  const { authData } = useContext(AuthContext);
  const { contract, contractdefName } = useContext(ContractContext);

  const templateMap = authData.accountType === "OWNER" ? ownerTemplateMap
    : contractorTemplateMap;

  // console.log("Contract name: ", contractdefName);
  // console.log("Contract: ", contract);

  const templateSwitcher = (
    templateMap.hasOwnProperty(contractdefName) ?
    (
      <Container>
        {templateMap[contractdefName]}
      </Container>
    )
    : (<p>Please select a template</p>)
  );

  return templateSwitcher;
};

export default TemplateProvider;
