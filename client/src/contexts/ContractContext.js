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

  const initialise = () => {
    const contractinst = new ethers.Contract(address, abi, provider); 
    setContract(contractinst);
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
    setProvider(provider);
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
    }}>
      <ContractDispatchContext.Provider value={{
        setContract,
        setAddress,
        setProvider,
        setAbi,
        initialise,
        generateProvider,
        fetchAndSetABI
      }}>
        {children}
      </ContractDispatchContext.Provider>
    </ContractContext.Provider>
  );
};

export { ContractProvider, ContractContext, ContractDispatchContext };
