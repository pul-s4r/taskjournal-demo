import React, { createContext, useState } from "react";

import { ethers } from 'ethers';

const ContractContext = createContext(undefined);
const ContractDispatchContext = createContext(undefined);

const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState({});
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState({});
  const [abi, setAbi] = useState({});
  const [contractdefName, setContractdefName] = useState("");

  const initialise = (cdefName, addr, abiInput, provider) => {
    return new Promise((resolve, reject) => {
      const contractinst = new ethers.Contract(addr, abiInput, provider);
      setContractdefName(cdefName);
      setAddress(addr);
      setAbi(abiInput);
      setProvider(provider);
      setContract(contractinst);
      resolve(contractinst); 
    });
  }

  return (
    <ContractContext.Provider value={{
        contract,
        address,
        provider,
        abi,
        contractdefName
      }}>
      <ContractDispatchContext.Provider value={{
          initialise
        }}>
        {children}
      </ContractDispatchContext.Provider>
    </ContractContext.Provider>
  );
};

export { ContractProvider, ContractContext, ContractDispatchContext };
