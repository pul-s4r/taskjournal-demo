import React, { createContext, useState } from "react";

const ContractDefDataContext = createContext(undefined);
const ContractDefDataDispatchContext = createContext(undefined);

const ContractDefDataProvider = ({ children }) => {
  const [contractDef, setContractDefData] = useState([]);

  return (
    <ContractDefDataContext.Provider value={contractDef}>
      <ContractDefDataDispatchContext.Provider value={setContractDefData}>
        {children}
      </ContractDefDataDispatchContext.Provider>
    </ContractDefDataContext.Provider>
  );
};

export { ContractDefDataProvider, ContractDefDataContext, ContractDefDataDispatchContext };
