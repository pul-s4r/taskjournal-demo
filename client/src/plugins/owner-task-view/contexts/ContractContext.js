import React, { createContext, useState } from "react";

const ContractContext = createContext(undefined);
const ContractDispatchContext = createContext(undefined);

const ContractProvider = ({ children }) => {
  const [Contract, setContract] = useState({});

  return (
    <ContractContext.Provider value={Contract}>
      <ContractDispatchContext.Provider value={setContract}>
        {children}
      </ContractDispatchContext.Provider>
    </ContractContext.Provider>
  );
};

export { ContractProvider, ContractContext, ContractDispatchContext };
