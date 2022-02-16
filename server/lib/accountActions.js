const AccountActions = {
  // rewrite to accept todo
  getAccount: async (web3) => {
    return new Promise((resolve, reject) => {
      web3.eth.getAccounts((error, accounts) => {
        if(typeof error === null) {
          return reject(error);
        }
        resolve(accounts[0]);
      });
    });
  },
};

export default AccountActions;
