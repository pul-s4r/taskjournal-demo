const maxIdx = 10;

const AccountActions = {
  // rewrite to accept todo
  getAccount: async (web3) => {
    return AccountActions.getAccountIndexed(web3, 0);
  },
  getAccountIndexed: async (web3, idx) => {
    if (idx < 0 || idx >= maxIdx) {
      console.warn('Account index exceeds maximum available, defaulting to 0'); 
      idx = 0;
    }
    return new Promise((resolve, reject) => {
      web3.eth.getAccounts((error, accounts) => {
        if(typeof error === null) {
          return reject(error);
        }
        resolve(accounts[idx]);
      });
    });
  }
};

export default AccountActions;
