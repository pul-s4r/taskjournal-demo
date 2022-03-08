import axios from 'axios';

import taskJournal from './journalStateInstance.js';

const web3 = taskJournal.web3;

const isFinalised = async (req, res) => {
  return new Promise((resolve, reject) => {
    taskJournal.instance.isFinalised()
      .then((data) => resolve({'finalised': data}))
      .catch((error) => reject({'error': error}));
  });
};

/* REWRITE AS PROMISE */
const PaymentActions = {
  getContract: async (req, res) => {
    res.status(200).json({'status': 'Success', 'payload': taskJournal.address});
    return taskJournal.address;
  },
  getOwnerAccount: async (req, res) => {
    res.status(200).json({'status': 'Success', 'payload': taskJournal.ownerAccount});
    return taskJournal.ownerAccount;
  },
  setOwnerAccount: async (req, res) => {
    const { address } = req.body;
    return new Promise((resolve, reject) => {
      console.log("Checking: ", req.body);
      taskJournal.ownerAccount = address;
      if (web3.utils.isAddress(address)) {
        taskJournal.instance.setOwner(address, {from: taskJournal.ownerAccount, gas:1000000})
        .then((data) => {
          res.status(200).json({'status': 'Success', 'payload': data});
          resolve({'status': 'Success', 'payload': data});
        })
        .catch((error) => {
          res.status(400).json({'status': 'Error', 'error': error});
          resolve({'status': 'Error', 'error': error});
        });
      } else {
        res.status(400).json({'status': 'Failure', 'reason': "Not a valid address"});
        resolve({'status': 'Failure', 'error': "Not a valid address"});
      }
    });
  },
  getOwnerAccountBalance: async (req, res) => {
    return new Promise((resolve, reject) => {
      const balanceEth = web3.eth.getBalance(taskJournal.ownerAccount)
      .then((data) => {
        return web3.utils.fromWei(data);
      })
      .then((data) => {
        res.status(200).json({'status': 'Success', 'payload': data});
        resolve({'status': 'Success', 'payload': data});
      })
      .catch((error) => {
        res.status(400).json({'status': 'Error', 'error': error});
        resolve({'status': 'Error', 'error': error});
      });
    });
  },
  getContractorAccount: async (req, res) => {
    res.status(200).json({'status': 'Success', 'payload': taskJournal.contractorAccount});
    return taskJournal.contractorAccount;
  },
  setContractorAccount: async (req, res) => {
    const { address } = req.body;
    return new Promise((resolve, reject) => {
      if (web3.utils.isAddress(address)) {
        taskJournal.contractorAccount = address;
        taskJournal.instance.setPayee(address)
        .then((data) => {
          res.status(200).json({'status': 'Success', 'payload': data});
          resolve({'status': 'Success', 'payload': data});
        })
        .catch((error) => {
          res.status(400).json({'status': 'Error', 'reason': "Not a valid address"});
          resolve({'status': 'Error', 'error': error});
        });
      } else {
        resolve({'status': 'Failure', 'error': "Not a valid address"});
      }
    });
  },
  getContractorAccountBalance: async (req, res) => {
    return new Promise((resolve, reject) => {
      const balanceEth = web3.eth.getBalance(taskJournal.contractorAccount)
      .then((data) => {
        return web3.utils.fromWei(data);
      })
      .then((data) => {
        res.status(200).json({'status': 'Success', 'payload': data});
        resolve({'status': 'Success', 'payload': data});
      })
      .catch((error) => {
        res.status(400).json({'status': 'Error', 'error': error});
        resolve({'status': 'Error', 'error': error});
      });
    });
  },
  getContractBalance: async (req, res) => {
    return new Promise((resolve, reject) => {
      taskJournal.instance.getBalance()
        .then((data) => {
          data = web3.utils.fromWei(data); 
          res.status(200).json({'status': 'Success', 'payload': data});
          resolve({'status': 'Success', 'payload': data});
        })
        .catch((error) => {
          res.status(400).json({'status': 'Error', 'error': error});
          resolve({'status': 'Error', 'error': error});
        });
    });
  },
  getAmountPayable: async (req, res) => {
    return new Promise((resolve, reject) => {
      taskJournal.instance.sumFeeCompleted()
        .then((data) => {
          res.status(200).json({'status': 'Success', 'payload': data});
          resolve({'status': 'Success', 'payload': data});
        })
        .catch((error) => {
          res.status(400).json({'status': 'Error', 'error': error});
          resolve({'status': 'Error', 'error': error});
        });
    });
  },
  isPaid: async (req, res) => {
    return new Promise((resolve, reject) => {
      taskJournal.instance.isPaid()
        .then((data) => {
          res.status(200).json({'status': 'Success', 'payload': data});
          resolve({'status': 'Success', 'payload': data});
        })
        .catch((error) => {
          res.status(400).json({'status': 'Error', 'error': error});
          resolve({'status': 'Error', 'error': error});
        });
    });
  },
  isReleased: async (req, res) => {
    return new Promise((resolve, reject) => {
      taskJournal.instance.isReleased()
        .then((data) => {
          res.status(200).json({'status': 'Success', 'payload': data});
          resolve({'status': 'Success', 'payload': data});
        })
        .catch((error) => {
          console.log("Error in isReleased: ", error)
          res.status(400).json({'status': 'Error', 'error': error});
          resolve({'status': 'Error', 'error': error});
        });
    });
  },
  makePaymentToContract: async (req, res) => {
    const { address, value } = req.body;
    return new Promise((resolve, reject) => {
      console.log("Paying");
      taskJournal.instance.isFinalised()
      .then((data) => {
        var result = {};
        console.log("Finalised: ", data);
        if (data === true) {
          result = taskJournal.instance.deposit({
            'to': taskJournal.address,
            'from': address,
            'value': Number(value)
          })
          .then(() => { return {'status': 'Success'}; });
          console.log("Result: ", result);
        } else {
          result = {'status': 'Failure', 'reason': 'Not finalised yet'};
        }
        res.status(200).json(result);
        resolve(result);
      })
      .catch((error) => {
        console.log(`Error encountered in make payment (owner): ${error}`);
        res.status(400).json({'status': 'Error', 'error': error});
        resolve({'status': 'Error', 'error': error});
      });
    });
  },
  transferPaymentToContractor: async (req, res) => {
    const { amount } = req.body;
    return new Promise((resolve, reject) => {
      taskJournal.instance.getBalance()
      .then((data) => {
        var result = taskJournal.instance.transferToAddress(taskJournal.contractorAccount, data, {from: taskJournal.ownerAccount, gas:1000000})
        .then(() => { return {'status': 'Success'}; });
        res.status(200).json(result);
        resolve(result);
      })
      .catch((error) => {
        console.log(`Error encountered in transfer funds (contractor): ${error}`);
        res.status(400).json({'status': 'Error', 'error': error});
        resolve({'status': 'Error', 'error': error});
      });
    });
  },
};

export default PaymentActions;
