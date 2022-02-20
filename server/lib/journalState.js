import Web3 from 'web3';
import TruffleContract from '@truffle/contract';
import { readFile } from 'fs/promises';

// import artifact from '../../build/contracts/TaskJournal.json';
import AccountActions from './accountActions.js';
// import artifact from '../temp/artifact.js';
const artifact = JSON.parse(
  await readFile(new URL('../../build/contracts/TaskJournal.json', import.meta.url))
);

class JournalState {
  constructor(config) {
    this.config = config;
  }

  setup() {
    const { ethereumUrl } = this.config;
    this.web3 = new Web3(new Web3.providers.HttpProvider(ethereumUrl));

    this.contractdef = TruffleContract(artifact);
    this.contractdef.setProvider(this.web3.currentProvider);

    this.networks = Object.keys(artifact.networks);
    this.network = this.networks[this.networks.length - 1];
    this.address = artifact.networks[this.network].address;

    const contractorAccPromise = new Promise((resolve, reject) => {
      AccountActions.getAccountIndexed(this.web3, 1).then((account) => {
        this.contractorAccount = account;
        resolve(this.contractorAccount);
      });
    });

    return new Promise((resolve, reject) => {
      AccountActions.getAccount(this.web3)
        .then((account) => {
          this.ownerAccount = account;
          return this.contractdef.at(this.address);
        })
        .then((instance) => {
          this.instance = instance;
          resolve(instance);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getOwnerAccount() {
    return this.ownerAccount;
  }

  getContractorAccount() {
    return this.contractorAccount;
  }
}

export default JournalState;
