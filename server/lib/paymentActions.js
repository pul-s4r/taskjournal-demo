import axios from 'axios';

import taskJournal from './journalStateInstance.js';

const PaymentActions = {
  getOwnerAccount: async (req, res) => {
    return taskJournal.ownerAccount;
  },
  getContractorAccount: async (req, res) => {
    return taskJournal.contractorAccount;
  },
  makePaymentFromOwner: async (req, res) => {
    const { value } = req.body;
    return new Promise((resolve, reject) => {
      taskJournal.instance.deposit().transact({
        'to': taskJournal.address,
        'from': taskJournal.getOwnerAccount(),
        'value': value
      }).then(() => {
        console.log('Attempted payment (owner): success');
        res.status(200).json({'status': 'Success'});
        resolve({'status': 'Success'});
      }).catch((error) => {
        console.log(`Error encountered in payment (owner): ${error}`)
        res.status(400).json({'status': 'Error', 'error': error});
        resolve({'status': 'Error', 'error': error});
      });
    });
  },
  transferPaymentToContractor: async (req, res) => {
    const { amount } = req.body;
    return new Promise((resolve, reject) => {
      taskJournal.instance.transfer(amount).then(() => {
        console.log('Attempted transfer (contractor): success');
        res.status(200).json({'status': 'Success'});
        resolve({'status': 'Success'});
      }).catch((error) => {
        console.log(`Error encountered in transfer (contractor): ${error}`)
        res.status(400).json({'status': 'Error', 'error': error});
        resolve({'status': 'Error', 'error': error});
      });
    });
  },
}
