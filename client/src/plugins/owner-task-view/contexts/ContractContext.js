import React, { createContext, useState } from "react";

const ContractContext = createContext(undefined);
const ContractDispatchContext = createContext(undefined);

const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState({});

  return (
    <ContractContext.Provider value={contract}>
      <ContractDispatchContext.Provider value={setContract}>
        {children}
      </ContractDispatchContext.Provider>
    </ContractContext.Provider>
  );
};

export { ContractProvider, ContractContext, ContractDispatchContext };
