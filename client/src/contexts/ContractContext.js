import React, { createContext, useState } from "react";

import { ethers, utils, providers } from 'ethers';

import ContractAPI from '../api/contractAPI.js';

const ContractContext = createContext(undefined);
const ContractDispatchContext = createContext(undefined);

const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState({});
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState({});
  const [abi, setAbi] = useState({});
  const [contractdefName, setContractdefName] = useState("");

  const initialise = () => {
    const contractinst = new ethers.Contract(address, abi, provider);
    setContract(contractinst);
  };

  const initialiseManual = (cdefName, addr, cdefId) => {
    return Promise.all([
      generateProvider(),
      ContractAPI.getContractABI(cdefId),
    ])
    .then((values) => {
      values[1] = values[1].data;
      return values;
    })
    .then((values) => {
      setContractdefName(cdefName);
      setAddress(addr);
      const contractinst = new ethers.Contract(addr, values[1], values[0]);
      setContract(contractinst);
      return contractinst;
    })
    .catch((error) => {
      console.warn("Error provisioning contract instance", error);
      return null;
    });
  };

  const generateProvider = (type = "") => {
    let provider = null;
    switch (type.toLowerCase()) {
      case "infura":
        provider = ethers.providers.InfuraProvider();
      case "etherscan":
        provider = ethers.providers.EtherscanProvider();
      default:
        provider = ethers.getDefaultProvider();
    }
    return provider;
  };

  const fetchAndSetABI = (cdefId) => {
    ContractAPI.getContractABI(cdefId).then((payload) => {
      setAbi(payload.data);
    });
  };

  return (
    <ContractContext.Provider value={{
      contract,
      address,
      provider,
      abi,
      contractdefName,
    }}>
      <ContractDispatchContext.Provider value={{
        setContract,
        setAddress,
        setProvider,
        setAbi,
        setContractdefName,
        initialise,
        initialiseManual,
        generateProvider,
        fetchAndSetABI
      }}>
        {children}
      </ContractDispatchContext.Provider>
    </ContractContext.Provider>
  );
};

export { ContractProvider, ContractContext, ContractDispatchContext };
