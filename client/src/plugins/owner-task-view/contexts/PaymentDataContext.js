import React, { createContext, useState } from "react";

const PaymentDataContext = createContext(undefined);
const PaymentDataDispatchContext = createContext(undefined);

const PaymentDataProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState({
    finalised: false,
    amountPayable: 0,
    paidToContract: false,
    released: false,
  });

  return (
    <PaymentDataContext.Provider value={paymentData}>
      <PaymentDataDispatchContext.Provider value={setPaymentData}>
        {children}
      </PaymentDataDispatchContext.Provider>
    </PaymentDataContext.Provider>
  );
};

export { PaymentDataProvider, PaymentDataContext, PaymentDataDispatchContext };
