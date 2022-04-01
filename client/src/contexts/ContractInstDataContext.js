import React, { createContext, useState } from "react";

const ContractInstDataContext = createContext(undefined);
const ContractInstDataDispatchContext = createContext(undefined);

const ContractInstDataProvider = ({ children }) => {
  const [contractInst, setContractInstData] = useState([]);

  return (
    <ContractInstDataContext.Provider value={contractInst}>
      <ContractInstDataDispatchContext.Provider value={setContractInstData}>
        {children}
      </ContractInstDataDispatchContext.Provider>
    </ContractInstDataContext.Provider>
  );
};

export { ContractInstDataProvider, ContractInstDataContext, ContractInstDataDispatchContext };
